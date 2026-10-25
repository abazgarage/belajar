/* AB Garage authentication - Supabase client.
 * Only the public publishable key is used in browser code.
 * Never put a Supabase service-role key here.
 */
const AUTH_CONFIG = {
  url: 'https://uaifhdrgcjpcxzycivpp.supabase.co',
  anonKey: 'sb_publishable_anTLqkGuyo24-xIk__u6Tw_XySX8j5D'
};

const form = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

const supabaseClient = window.supabase?.createClient(AUTH_CONFIG.url, AUTH_CONFIG.anonKey);

async function getCurrentProfile() {
  if (!supabaseClient) throw new Error('Supabase client belum tersedia.');
  const { data: { user } } = await supabaseClient.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabaseClient
    .from('abg_profiles')
    .select('id,full_name,nis,class_name,role,account_status')
    .eq('id', user.id)
    .single();
  if (error) throw error;
  return { user, profile: data };
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = 'Memeriksa akun...';
  message.className = 'muted';

  try {
    if (!supabaseClient) throw new Error('Koneksi login belum siap. Muat ulang halaman.');
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const current = await getCurrentProfile();
    if (!current?.profile) throw new Error('Profil akun belum tersedia.');
    if (current.profile.account_status !== 'active') {
      await supabaseClient.auth.signOut();
      throw new Error('Akun sedang tidak aktif. Hubungi admin.');
    }

    window.location.href = current.profile.role === 'admin' ? 'admin.html' : 'siswa.html';
  } catch (error) {
    message.textContent = error.message || 'Login gagal. Periksa email dan password.';
    message.className = 'muted error-text';
  }
});

window.ABAuth = {
  client: supabaseClient,
  getCurrentProfile,
  async requireRole(role) {
    const current = await getCurrentProfile();
    if (!current) {
      window.location.href = 'login.html';
      return null;
    }
    if (current.profile.account_status !== 'active' || (role && current.profile.role !== role)) {
      window.location.href = current.profile.role === 'admin' ? 'admin.html' : 'siswa.html';
      return null;
    }
    return current;
  },
  async logout() {
    await supabaseClient?.auth.signOut();
    window.location.href = 'login.html';
  }
};