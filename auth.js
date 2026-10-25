/* AB Garage authentication adapter.
 * Configure Supabase in this file when the project is connected.
 * Never put a Supabase service-role key in browser code.
 */
const AUTH_CONFIG = { url: '', anonKey: '' };

const form = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = 'Sistem login belum terhubung ke database. Hubungkan project Supabase terlebih dahulu.';
});
