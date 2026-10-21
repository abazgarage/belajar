const navButtons = [...document.querySelectorAll('.nav-btn')];
const pages = [...document.querySelectorAll('.page')];

function showTab(tabId) {
  if (!document.getElementById(tabId)) return;
  pages.forEach(page => page.classList.toggle('active', page.id === tabId));
  navButtons.forEach(button => {
    const active = button.dataset.tab === tabId;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  document.getElementById(tabId).scrollIntoView({ behavior: 'smooth', block: 'start' });
}
navButtons.forEach(button => button.addEventListener('click', () => showTab(button.dataset.tab)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showTab(button.dataset.go)));
document.querySelectorAll('[data-tab-link]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault(); showTab(link.dataset.tabLink);
}));

// Materi: pencarian dan ringkasan tiap topik.
const lessons = {
  dasar: {title:'Dasar Otomotif', tag:'PENGENALAN', points:['Mobil mengubah energi bahan bakar atau listrik menjadi gerak.','Sistem utama mobil meliputi mesin, pemindah tenaga, chassis, kelistrikan, dan bodi.','Sebelum bekerja: gunakan APD, amankan kendaraan, dan ikuti prosedur kerja.'], task:'Latihan: sebutkan tiga sistem kendaraan dan jelaskan fungsi dasarnya.'},
  mesin: {title:'Mesin Kendaraan', tag:'SISTEM MESIN', points:['Piston bergerak di dalam silinder dan meneruskan gaya ke poros engkol.','Mesin bensin 4-tak menjalani langkah hisap, kompresi, usaha, dan buang.','Sistem pendukung meliputi pelumasan, pendinginan, pemasukan udara, dan pembuangan gas.'], task:'Latihan: urutkan empat langkah kerja mesin 4-tak.'},
  tenaga: {title:'Sistem Pemindah Tenaga', tag:'DRIVETRAIN', points:['Kopling menghubungkan atau memutus tenaga mesin ke transmisi.','Transmisi mengubah perbandingan gigi sesuai kebutuhan torsi dan kecepatan.','Diferensial memungkinkan roda kiri dan kanan berputar dengan kecepatan berbeda saat berbelok.'], task:'Latihan: jelaskan mengapa kendaraan membutuhkan beberapa rasio gigi.'},
  listrik: {title:'Kelistrikan Mobil', tag:'ELEKTRIKAL', points:['Aki menyimpan energi listrik untuk membantu menghidupkan kendaraan.','Motor starter memutar mesin saat proses starting.','Alternator mengisi aki dan menyuplai sistem listrik ketika mesin hidup.','Multimeter digunakan untuk mengukur tegangan, resistansi, dan arus sesuai prosedur.'], task:'Latihan: sebelum mengukur resistansi, pastikan rangkaian tidak bertegangan.'},
  bahanbakar: {title:'Sistem Bahan Bakar & EFI', tag:'ENGINE MANAGEMENT', points:['Sistem EFI mengatur jumlah bahan bakar berdasarkan kondisi mesin.','ECU mengolah sinyal sensor dan mengendalikan aktuator seperti injektor.','Gangguan harus diperiksa melalui gejala, inspeksi, data, dan pengukuran; jangan langsung mengganti komponen.'], task:'Latihan: sebutkan fungsi sensor suhu mesin dan sensor posisi throttle.'},
  tools: {title:'Tools & Alat Ukur', tag:'PERALATAN BENGKEL', points:['Gunakan ukuran kunci yang tepat agar baut dan mur tidak rusak.','Torque wrench digunakan untuk mengencangkan baut dengan torsi sesuai spesifikasi.','Multimeter: pilih mode dan rentang yang sesuai; jangan mengukur resistansi pada rangkaian aktif.','Jangka sorong dan mikrometer dipakai untuk pengukuran dimensi dengan ketelitian berbeda.'], task:'Latihan: tentukan alat yang tepat untuk mengukur diameter poros dan tegangan aki.'},
  chassis: {title:'Rem, Kemudi & Suspensi', tag:'CHASSIS', points:['Rem mengubah energi gerak menjadi panas melalui gesekan.','Sistem kemudi mengarahkan roda sesuai input pengemudi.','Suspensi membantu menjaga kontak ban dengan jalan dan meredam guncangan.','Pemeriksaan rem adalah pekerjaan keselamatan; ikuti prosedur servis pabrikan.'], task:'Latihan: apa dampak kampas rem yang aus atau minyak rem yang kurang?' },
  diagnosis: {title:'Diagnosis Kerusakan', tag:'TROUBLESHOOTING', points:['Konfirmasi keluhan dan kapan gejala muncul.','Lakukan inspeksi visual serta periksa hal sederhana terlebih dahulu.','Buat dugaan penyebab, lakukan pengukuran, lalu bandingkan dengan spesifikasi.','Setelah perbaikan, lakukan pengujian ulang dan pastikan keluhan teratasi.'], task:'Latihan: tulis urutan pemeriksaan saat mesin sulit dihidupkan.'}
};
document.getElementById('materiSearch').addEventListener('input', event => {
  const query = event.target.value.toLowerCase().trim();
  document.querySelectorAll('.topic-card').forEach(card => {
    card.hidden = !(`${card.dataset.search} ${card.innerText}`.toLowerCase().includes(query));
  });
});
document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
  const lesson = lessons[button.dataset.topic];
  document.getElementById('lessonTag').textContent = lesson.tag;
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonBody').innerHTML = `<ul>${lesson.points.map(point => `<li>${point}</li>`).join('')}</ul><p><strong>Aktivitas belajar:</strong> ${lesson.task}</p>`;
  document.getElementById('lessonPanel').hidden = false;
  document.getElementById('lessonPanel').scrollIntoView({behavior:'smooth', block:'start'});
}));
document.getElementById('closeLesson').addEventListener('click', () => {
  document.getElementById('lessonPanel').hidden = true;
  document.getElementById('topicGrid').scrollIntoView({behavior:'smooth', block:'start'});
});

// Kalkulator kapasitas mesin, rasio kompresi, dan konversi tekanan.
function numberFrom(id) { return Number.parseFloat(document.getElementById(id).value); }
function calculateDisplacement() {
  const bore = numberFrom('bore'), stroke = numberFrom('stroke'), cylinders = numberFrom('cylinders');
  const valid = bore > 0 && stroke > 0 && Number.isInteger(cylinders) && cylinders > 0;
  const cc = valid ? Math.PI / 4 * bore * bore * stroke * cylinders / 1000 : NaN;
  document.getElementById('ccResult').textContent = Number.isFinite(cc) ? `${cc.toFixed(1)} cc` : 'Periksa input';
  document.getElementById('literResult').textContent = Number.isFinite(cc) ? `${(cc / 1000).toFixed(3)} liter` : 'Masukkan nilai positif';
}
function calculateCompression() {
  const swept = numberFrom('swept'), chamber = numberFrom('chamber');
  const ratio = swept > 0 && chamber > 0 ? (swept + chamber) / chamber : NaN;
  document.getElementById('compressionResult').textContent = Number.isFinite(ratio) ? `${ratio.toFixed(2)} : 1` : 'Periksa input';
}
function calculatePressure() {
  const bar = numberFrom('barValue');
  document.getElementById('kpaResult').textContent = bar >= 0 && Number.isFinite(bar) ? (bar * 100).toFixed(1) : '—';
  document.getElementById('psiResult').textContent = bar >= 0 && Number.isFinite(bar) ? (bar * 14.5038).toFixed(2) : '—';
}
['bore','stroke','cylinders'].forEach(id => document.getElementById(id).addEventListener('input', calculateDisplacement));
['swept','chamber'].forEach(id => document.getElementById(id).addEventListener('input', calculateCompression));
document.getElementById('barValue').addEventListener('input', calculatePressure);
calculateDisplacement(); calculateCompression(); calculatePressure();

// Simulasi diagnosis dengan umpan balik.
const answers = document.querySelectorAll('.answer-option');
answers.forEach(button => button.addEventListener('click', () => {
  answers.forEach(option => { option.disabled = true; option.classList.remove('correct','wrong'); });
  const feedback = document.getElementById('feedback');
  feedback.hidden = false;
  if (button.dataset.answer === 'b') {
    button.classList.add('correct');
    feedback.className = 'feedback';
    feedback.innerHTML = '<strong>Benar!</strong> Aki lemah atau terminal yang longgar dapat menyebabkan lampu redup dan starter tidak berputar. Periksa kondisi aki, terminal, dan tegangan sesuai prosedur sebelum melanjutkan diagnosis.';
  } else {
    button.classList.add('wrong');
    document.querySelector('[data-answer="b"]').classList.add('correct');
    feedback.className = 'feedback incorrect';
    feedback.innerHTML = '<strong>Belum tepat.</strong> Mulailah dari pemeriksaan dasar: kondisi aki dan terminal. Lanjutkan ke rangkaian starter bila sumber daya dan sambungan sudah dipastikan baik.';
  }
}));
document.getElementById('resetSimulation').addEventListener('click', () => {
  answers.forEach(option => { option.disabled = false; option.classList.remove('correct','wrong'); });
  const feedback = document.getElementById('feedback'); feedback.hidden = true; feedback.className = 'feedback'; feedback.textContent = '';
});
document.getElementById('year').textContent = new Date().getFullYear();
