/* AB Garage access gate.
   Beranda tetap publik; materi, kalkulator, dan simulasi hanya untuk akun aktif. */
const ACCESS_CONFIG = {
  url: 'https://uaifhdrgcjpcxzycivpp.supabase.co',
  anonKey: 'sb_publishable_anTLqkGuyo24-xIk__u6Tw_XySX8j5D'
};

const accessClient = window.supabase?.createClient(
  ACCESS_CONFIG.url,
  ACCESS_CONFIG.anonKey
);

let bypassTarget = null;

async function requireLearningAccess() {
  if (!accessClient) {
    window.location.href = 'login.html';
    return false;
  }

  try {
    const { data: { user }, error: userError } = await accessClient.auth.getUser();
    if (userError || !user) {
      window.location.href = 'login.html';
      return false;
    }

    const { data: profile, error: profileError } = await accessClient
      .from('abg_profiles')
      .select('account_status')
      .eq('id', user.id)
      .single();

    if (profileError || profile?.account_status !== 'active') {
      await accessClient.auth.signOut();
      window.location.href = 'login.html';
      return false;
    }

    return true;
  } catch (error) {
    console.error('Pemeriksaan akses AB Garage gagal:', error);
    window.location.href = 'login.html';
    return false;
  }
}

document.addEventListener('click', async (event) => {
  const target = event.target.closest('[data-tab], [data-go], [data-topic]');
  if (!target) return;

  // Izinkan satu klik ulang yang sengaja dilakukan setelah autentikasi berhasil.
  if (target === bypassTarget) {
    bypassTarget = null;
    return;
  }

  const destination = target.dataset.tab || target.dataset.go;
  const isProtected = target.hasAttribute('data-topic') ||
    ['materi', 'detail-materi', 'kalkulator', 'simulasi'].includes(destination);

  if (!isProtected) return;

  event.preventDefault();
  event.stopImmediatePropagation();

  if (!(await requireLearningAccess())) return;

  if (target.hasAttribute('data-topic')) {
    bypassTarget = target;
    target.click();
    return;
  }

  if (typeof window.showTab === 'function') {
    window.showTab(destination);
  }
}, { capture: true });
