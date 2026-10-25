const AUTH_CONFIG = {
  url: 'https://uaifhdrgcjpcxzycivpp.supabase.co',
  anonKey: 'sb_publishable_anTLqkGuyo24-xIk__u6Tw_XySX8j5D'
};

const supabaseClient = window.supabase?.createClient(AUTH_CONFIG.url, AUTH_CONFIG.anonKey);
const form = document.getElementById('registerForm');
const message = document.getElementById('registerMessage');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = 'Membuat akun...';
  message.className = 'muted';

  try {
    if (!supabaseClient) throw new Error('Koneksi pendaftaran belum siap. Muat ulang halaman.');

    const fullName = document.getElementById('fullName').value.trim();
    const nis = document.getElementById('nis').value.trim();
    const className = document.getElementById('className').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    if (password !== passwordConfirm) throw new Error('Konfirmasi password tidak sama.');
    if (password.length < 8) throw new Error('Password minimal 8 karakter.');

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, nis, class_name: className },
        emailRedirectTo: 'https://abazgarage.github.io/belajar/login.html'
      }
    });
    if (error) throw error;

    if (data.session) {
      window.location.href = 'siswa.html';
      return;
    }

    message.textContent = 'Akun berhasil dibuat. Cek email untuk konfirmasi, lalu login ke AB Garage.';
    form.reset();
  } catch (error) {
    message.textContent = error.message || 'Pendaftaran gagal.';
    message.className = 'muted error-text';
  }
});
