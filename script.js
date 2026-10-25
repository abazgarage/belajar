// ================================
// AB GARAGE - BELAJAR OTOMOTIF
// ================================

const navButtons = [...document.querySelectorAll('.nav-btn')];
const pages = [...document.querySelectorAll('.page')];

function showTab(tabId) {
  const target = document.getElementById(tabId);
  if (!target) return;

  pages.forEach(page => page.classList.toggle('active', page.id === tabId));
  navButtons.forEach(button => {
    const active = button.dataset.tab === tabId;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => button.addEventListener('click', () => showTab(button.dataset.tab)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showTab(button.dataset.go)));
document.querySelectorAll('[data-tab-link]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showTab(link.dataset.tabLink);
}));

// ================================
// DATA MATERI PEMBELAJARAN
// ================================
const lessons = {
  dasar: {
    title: 'MENYIAPKAN GAMBAR TEKNIK', tag: 'MODUL 01',
    sections: [
      { heading: 'A. Pengetahuan yang Diperlukan dalam Membaca Gambar Teknik', content: `
        <h3>1. Fungsi Gambar Teknik</h3>
        <p>Gambar teknik merupakan media untuk menyatakan maksud bagi orang-orang teknik dan sering disebut sebagai bahasa teknik. Gambar harus menyampaikan informasi secara tepat, jelas, dan objektif.</p>
        <ul><li><strong>Penyampaian informasi:</strong> meneruskan maksud perancang kepada pihak lain.</li><li><strong>Pengawetan dan penyimpanan:</strong> menjadi data teknis atau blueprint.</li><li><strong>Penuangan gagasan dan pengembangan:</strong> membantu mengembangkan rancangan dari sketsa sampai gambar yang lebih sempurna.</li></ul>
        <h3>2. Standar Industri</h3><p>Standar gambar teknik dibuat agar komunikasi teknik tidak menimbulkan salah pengertian. Contoh standar yang dikenal adalah JIS, NEN, DIN, SII, dan ISO.</p>
        <h3>3. Peralatan Gambar</h3><p>Peralatan antara lain kertas gambar, pensil, pena gambar, jangka, penggaris, mal, mistar skala, busur derajat, penghapus, papan/meja gambar, dan mesin gambar.</p>
        <h3>4. Cara Menggunakan Peralatan</h3><p>Kertas harus rata dan sejajar dengan papan gambar. Ukuran dipindahkan dengan teliti. Garis horizontal ditarik dari kiri ke kanan dan garis vertikal dari bawah ke atas. Saat menggambar lingkaran, kaki jangka dijaga tegak lurus terhadap kertas.</p>
        <h3>5. Garis, Angka, dan Huruf</h3><p>Jenis garis, angka, huruf, dan lambang mempunyai arti tertentu. Penulisannya harus jelas, seragam, dan mudah direproduksi agar tidak menimbulkan salah baca.</p>
        <div class="materi-image-box"><img src="images/pensil.jpg" alt="Jenis pensil" class="responsive-img"><p class="img-caption">Contoh peralatan gambar</p></div>` },
      { heading: 'B. Keterampilan yang diperlukan', content: `<ul><li>Memilih peralatan gambar.</li><li>Menggunakan peralatan gambar.</li><li>Mengidentifikasi produk, sistem, atau komponen.</li><li>Menyajikan produk, sistem, atau komponen.</li></ul>` },
      { heading: 'C. Sikap Kerja', content: `<ul><li>Cermat dan teliti dalam memilih alat.</li><li>Rapi dan taat asas saat menggunakan alat.</li><li>Teliti saat mengidentifikasi komponen.</li><li>Rapi dan sistematis saat menyajikan gambar.</li></ul>` }
    ],
    task: `<p><strong>Latihan:</strong> Sebutkan tiga fungsi utama gambar teknik. Jelaskan mengapa ketelitian dan kerapian penting dalam gambar teknik.</p>`
  },

  mesin: {
    title: 'MESIN KENDARAAN', tag: 'MODUL 02',
    sections: [
      { heading: 'A. Tujuan Pembelajaran', content: `<p>Setelah mempelajari modul ini, peserta dapat mengenali komponen utama mesin, menjelaskan prinsip kerja mesin 4-tak, serta memahami fungsi sistem pelumasan, pendinginan, dan kompresi.</p>` },
      { heading: 'B. Komponen Utama Mesin', content: `<p>Mesin pembakaran dalam mengubah energi kimia bahan bakar menjadi energi mekanis. Komponen utama meliputi blok silinder, kepala silinder, piston, connecting rod, crankshaft, camshaft, katup, dan flywheel.</p><ul><li><strong>Piston:</strong> bergerak naik-turun di dalam silinder.</li><li><strong>Connecting rod:</strong> meneruskan gaya piston ke crankshaft.</li><li><strong>Crankshaft:</strong> mengubah gerak bolak-balik menjadi putaran.</li><li><strong>Camshaft:</strong> mengatur pembukaan dan penutupan katup.</li><li><strong>Katup:</strong> mengatur masuknya campuran/udara dan keluarnya gas buang.</li></ul>` },
      { heading: 'C. Siklus Mesin 4-Tak', content: `<ol><li><strong>Hisap:</strong> piston bergerak turun dan katup masuk terbuka.</li><li><strong>Kompresi:</strong> piston bergerak naik dengan katup tertutup.</li><li><strong>Usaha:</strong> pembakaran mendorong piston turun.</li><li><strong>Buang:</strong> piston bergerak naik dan gas sisa keluar melalui katup buang.</li></ol><p>Satu siklus lengkap membutuhkan dua putaran crankshaft.</p>` },
      { heading: 'D. Pelumasan dan Pendinginan', content: `<p>Sistem pelumasan mengurangi gesekan, membantu pendinginan, membersihkan komponen, dan melindungi permukaan dari keausan. Sistem pendinginan menjaga temperatur kerja agar mesin tidak terlalu panas maupun terlalu dingin.</p><p>Komponen pendinginan cair umumnya meliputi radiator, water pump, thermostat, selang, dan coolant.</p>` },
      { heading: 'E. Kompresi dan Gejala Gangguan', content: `<p>Kompresi diperlukan agar proses pembakaran berlangsung efektif. Kompresi rendah dapat disebabkan oleh kebocoran katup, ring piston aus, gasket kepala silinder rusak, atau masalah lain pada ruang bakar. Diagnosis harus dilakukan melalui pemeriksaan dan pengukuran, bukan langsung mengganti komponen.</p>` }
    ],
    task: `<p><strong>Latihan:</strong> Urutkan empat langkah mesin 4-tak dan jelaskan fungsi piston, connecting rod, serta crankshaft.</p>`
  },

  tenaga: {
    title: 'PEMINDAH TENAGA', tag: 'MODUL 03',
    sections: [
      { heading: 'A. Fungsi Sistem Pemindah Tenaga', content: `<p>Sistem pemindah tenaga meneruskan dan mengatur torsi dari mesin menuju roda penggerak. Sistem ini juga memungkinkan perubahan perbandingan putaran dan torsi sesuai kondisi kendaraan.</p>` },
      { heading: 'B. Kopling', content: `<p>Kopling menghubungkan dan memutuskan tenaga mesin dengan transmisi. Pada kendaraan manual, pengemudi menggunakan pedal kopling untuk mengatur perpindahan tenaga.</p><ul><li>Flywheel menyediakan permukaan gesek.</li><li>Clutch disc meneruskan torsi.</li><li>Pressure plate menekan clutch disc.</li><li>Release bearing membantu proses pembebasan kopling.</li></ul><p>Gejala seperti kopling selip, pedal bergetar, atau sulit masuk gigi memerlukan pemeriksaan sesuai prosedur.</p>` },
      { heading: 'C. Transmisi', content: `<p>Transmisi menyediakan berbagai rasio gigi. Gigi rendah menghasilkan torsi roda lebih besar dan cocok untuk mulai bergerak atau beban berat. Gigi lebih tinggi digunakan untuk kecepatan kendaraan yang lebih tinggi dengan putaran mesin yang lebih rendah.</p>` },
      { heading: 'D. Diferensial dan Poros Penggerak', content: `<p>Diferensial memungkinkan roda kiri dan kanan berputar dengan kecepatan berbeda ketika kendaraan berbelok. Poros penggerak meneruskan putaran dari diferensial ke roda.</p>` },
      { heading: 'E. Pemeriksaan Dasar', content: `<p>Periksa kebocoran oli, kondisi sambungan, suara abnormal, getaran, dan kelancaran perpindahan gigi. Gunakan spesifikasi pabrikan untuk menentukan batas keausan dan jenis pelumas.</p>` }
    ],
    task: `<p><strong>Latihan:</strong> Jelaskan fungsi kopling dan mengapa diferensial diperlukan saat kendaraan berbelok.</p>`
  },

  listrik: {
    title: 'KELISTRIKAN MOBIL', tag: 'MODUL 04',
    sections: [
      { heading: 'A. Dasar Sistem Kelistrikan', content: `<p>Sistem kelistrikan kendaraan menggunakan sumber tegangan, penghantar, beban, pengaman, dan pengendali. Sumber utama saat mesin mati adalah baterai, sedangkan alternator memasok dan mengisi baterai ketika mesin bekerja.</p>` },
      { heading: 'B. Baterai / Aki', content: `<p>Baterai menyimpan energi listrik dan menyediakan arus besar untuk starter. Pemeriksaan dasar mencakup kondisi terminal, kebersihan, kekencangan koneksi, dan tegangan sesuai prosedur pabrikan.</p>` },
      { heading: 'C. Sistem Starter', content: `<p>Rangkaian starter pada dasarnya mengalirkan daya dari baterai melalui pengaman dan pengendali menuju motor starter. Motor starter memutar crankshaft agar mesin dapat mulai bekerja.</p><p>Jika starter tidak berputar, diagnosis dilakukan berurutan: konfirmasi keluhan, periksa baterai dan terminal, periksa pengaman/kabel, periksa sinyal kontrol, kemudian periksa motor starter.</p>` },
      { heading: 'D. Alternator dan Pengisian', content: `<p>Alternator menghasilkan energi listrik ketika mesin berputar. Regulator menjaga tegangan pengisian dalam rentang yang sesuai. Lampu indikator pengisian yang menyala dapat menjadi petunjuk adanya masalah pada sistem pengisian.</p>` },
      { heading: 'E. Sekring, Relay, dan Sensor', content: `<p>Sekring melindungi rangkaian dari arus berlebih. Relay memungkinkan beban dikendalikan oleh rangkaian kontrol dengan arus lebih kecil. Sensor mengubah kondisi fisik seperti temperatur, posisi, tekanan, atau kecepatan menjadi sinyal yang dapat dibaca sistem kontrol.</p>` },
      { heading: 'F. Keselamatan', content: `<p>Jangan mengganti sekring dengan kapasitas lebih besar tanpa dasar spesifikasi. Hindari hubungan singkat terminal baterai. Saat mengukur kelistrikan, gunakan mode dan rentang multimeter yang benar.</p>` }
    ],
    task: `<p><strong>Latihan:</strong> Buat urutan pemeriksaan ketika starter tidak berputar tetapi lampu dashboard redup.</p>`
  },

  bahanbakar: {
    title: 'SISTEM BAHAN BAKAR', tag: 'MODUL 05',
    sections: [
      { heading: 'A. Prinsip Dasar', content: `<p>Mesin memerlukan campuran udara dan bahan bakar yang sesuai agar pembakaran berlangsung baik. Pada sistem injeksi elektronik, jumlah bahan bakar dikendalikan berdasarkan berbagai input sensor dan strategi ECU.</p>` },
      { heading: 'B. Aliran Bahan Bakar', content: `<p>Secara umum bahan bakar mengalir dari tangki melalui pompa, penyaring, saluran, kemudian menuju injektor. Komponen dan susunan dapat berbeda menurut desain kendaraan.</p>` },
      { heading: 'C. Throttle dan Udara Masuk', content: `<p>Throttle mengatur jumlah udara yang masuk ke mesin. Sistem modern dapat menggunakan throttle elektronik. Sensor posisi throttle dan sensor lain membantu ECU menentukan kebutuhan mesin.</p>` },
      { heading: 'D. Injektor dan ECU', content: `<p>Injektor menyemprotkan bahan bakar sesuai perintah ECU. ECU menggunakan informasi seperti putaran mesin, temperatur, posisi throttle, tekanan udara, dan sensor oksigen untuk mengatur strategi kerja mesin.</p>` },
      { heading: 'E. Gejala Gangguan', content: `<ul><li>Mesin sulit hidup.</li><li>Idle tidak stabil.</li><li>Akselerasi tersendat.</li><li>Konsumsi bahan bakar meningkat.</li><li>Tenaga mesin menurun.</li></ul><p>Diagnosis harus dimulai dari keluhan, inspeksi visual, pemeriksaan data atau pengukuran, lalu dibandingkan dengan spesifikasi.</p>` }
    ],
    task: `<p><strong>Latihan:</strong> Mengapa diagnosis sistem bahan bakar tidak sebaiknya langsung mengganti injektor ketika mesin brebet?</p>`
  },

  tools: {
    title: 'TOOLS DAN ALAT UKUR', tag: 'MODUL 06',
    sections: [
      { heading: 'A. Alat Tangan', content: `<p>Alat tangan dasar meliputi kunci pas, ring, soket, obeng, tang, kunci momen, dan alat khusus sesuai pekerjaan. Pilih alat berdasarkan ukuran dan jenis pengikat agar tidak merusak komponen.</p>` },
      { heading: 'B. Kunci Momen', content: `<p>Kunci momen digunakan untuk mengencangkan pengikat sesuai nilai torsi. Nilai torsi harus mengikuti spesifikasi pabrikan. Jangan menggunakan kunci momen sebagai alat untuk membuka baut kecuali alat tersebut memang dirancang untuk itu.</p>` },
      { heading: 'C. Multimeter', content: `<p>Multimeter dapat digunakan untuk mengukur tegangan, resistansi, dan arus sesuai kemampuan alat. Saat mengukur tegangan, probe dipasang paralel terhadap titik ukur. Saat mengukur resistansi, rangkaian harus dalam kondisi tidak bertegangan.</p>` },
      { heading: 'D. Jangka Sorong dan Mikrometer', content: `<p>Jangka sorong digunakan untuk mengukur dimensi luar, dalam, dan kedalaman. Mikrometer digunakan untuk pengukuran yang memerlukan ketelitian lebih tinggi. Bersihkan permukaan ukur sebelum melakukan pengukuran.</p>` },
      { heading: 'E. Prinsip Pengukuran', content: `<ol><li>Pastikan alat sesuai dengan pekerjaan.</li><li>Periksa kondisi dan nol alat.</li><li>Lakukan pengukuran dengan posisi benar.</li><li>Catat hasil dan satuannya.</li><li>Bandingkan dengan spesifikasi.</li></ol>` }
    ],
    task: `<p><strong>Latihan:</strong> Jelaskan perbedaan cara menggunakan multimeter untuk mengukur tegangan dan resistansi.</p>`
  },

  chassis: {
    title: 'REM, KEMUDI DAN SUSPENSI', tag: 'MODUL 07',
    sections: [
      { heading: 'A. Sistem Pengereman', content: `<p>Sistem rem mengubah energi gerak menjadi panas melalui gesekan sehingga kendaraan dapat diperlambat atau dihentikan. Komponen dapat meliputi pedal, master cylinder, saluran, kaliper, disc, pad, wheel cylinder, dan drum tergantung desain.</p>` },
      { heading: 'B. Pemeriksaan Rem', content: `<p>Periksa ketebalan kampas, kondisi disc atau drum, kebocoran, level fluida, selang, dan fungsi pedal. Pedal yang terasa tidak normal memerlukan pemeriksaan segera sebelum kendaraan digunakan.</p>` },
      { heading: 'C. Kemudi', content: `<p>Sistem kemudi mengubah gerakan pengemudi menjadi arah roda. Periksa free play, sambungan, tie rod, ball joint, steering rack, dan komponen bantuan kemudi sesuai desain kendaraan.</p>` },
      { heading: 'D. Suspensi', content: `<p>Suspensi membantu menjaga kontak ban dengan permukaan jalan serta mengontrol gerakan bodi. Komponen umum meliputi spring, shock absorber/strut, arm, bushing, dan ball joint.</p>` },
      { heading: 'E. Ban dan Keselamatan', content: `<p>Periksa tekanan ban, keausan telapak, kerusakan fisik, dan kesesuaian ukuran. Kondisi ban, rem, kemudi, dan suspensi berhubungan langsung dengan keselamatan kendaraan.</p>` }
    ],
    task: `<p><strong>Latihan:</strong> Sebutkan pemeriksaan awal yang harus dilakukan ketika kendaraan terasa menarik ke satu sisi.</p>`
  },

  diagnosis: {
    title: 'DIAGNOSIS KERUSAKAN', tag: 'MODUL 08',
    sections: [
      { heading: 'A. Prinsip Diagnosis', content: `<p>Diagnosis adalah proses sistematis untuk menemukan penyebab gangguan. Tujuan diagnosis bukan sekadar menemukan komponen yang rusak, tetapi membuktikan penyebab berdasarkan gejala, pemeriksaan, dan pengukuran.</p>` },
      { heading: 'B. Urutan Diagnosis Dasar', content: `<ol><li><strong>Konfirmasi keluhan:</strong> pahami kapan dan bagaimana gangguan terjadi.</li><li><strong>Inspeksi visual:</strong> cari kabel lepas, kebocoran, kerusakan, atau kondisi abnormal.</li><li><strong>Tentukan pemeriksaan:</strong> pilih alat dan titik ukur yang relevan.</li><li><strong>Lakukan pengukuran:</strong> ukur tegangan, tekanan, temperatur, resistansi, atau parameter lain sesuai sistem.</li><li><strong>Bandingkan spesifikasi:</strong> jangan menilai hasil tanpa referensi.</li><li><strong>Perbaiki dan uji ulang:</strong> pastikan keluhan hilang setelah perbaikan.</li></ol>` },
      { heading: 'C. Five Why dan Penyebab Dasar', content: `<p>Teknik bertanya “mengapa” beberapa kali dapat membantu mencari penyebab dasar, tetapi tetap harus didukung bukti pemeriksaan. Hindari asumsi seperti “komponen ini sering rusak berarti pasti itu penyebabnya”.</p>` },
      { heading: 'D. OBD dan Data Diagnostik', content: `<p>Pada kendaraan yang mendukung OBD, alat scan dapat membantu membaca DTC dan data. DTC adalah petunjuk untuk mengarahkan pemeriksaan, bukan otomatis berarti komponen yang disebut harus diganti.</p>` },
      { heading: 'E. Dokumentasi', content: `<p>Catat keluhan, kondisi saat gangguan terjadi, hasil pengukuran, komponen yang diperiksa, tindakan perbaikan, dan hasil uji ulang. Dokumentasi membuat proses diagnosis dapat ditelusuri dan diulang.</p>` },
      { heading: 'F. Keselamatan', content: `<p>Gunakan prosedur keselamatan, alat pelindung, dan prosedur pabrikan. Saat bekerja pada kendaraan, amankan kendaraan agar tidak bergerak dan hindari menyentuh bagian panas atau bergerak tanpa perlindungan.</p>` }
    ],
    task: `<p><strong>Studi kasus:</strong> Mesin sulit hidup pada pagi hari. Susun minimal lima langkah diagnosis dari konfirmasi keluhan sampai uji ulang.</p>`
  }
};

// ================================
// FILTER DAN PENCARIAN MATERI
// ================================
let currentLevel = 'pemula';
const learningLevels = {
  pemula: 'Mulai dari dasar otomotif, fungsi komponen, alat kerja, dan keselamatan.',
  menengah: 'Pelajari sistem kendaraan, cara kerja, pengukuran, dan pemeriksaan dasar.',
  lanjut: 'Latih diagnosis, analisis gejala, pengukuran, dan pengambilan keputusan teknis.'
};

function filterTopics() {
  const query = (document.getElementById('materiSearch')?.value || '').toLowerCase().trim();
  document.querySelectorAll('.topic-card').forEach(card => {
    const text = `${card.dataset.search || ''} ${card.innerText}`.toLowerCase();
    card.hidden = !(card.dataset.level === currentLevel && text.includes(query));
  });
}

document.querySelectorAll('.path-step[data-level]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.path-step[data-level]').forEach(item => item.classList.toggle('selected', item === button));
  currentLevel = button.dataset.level;
  const description = document.getElementById('pathDescription');
  if (description) description.textContent = learningLevels[currentLevel];
  filterTopics();
}));

document.getElementById('materiSearch')?.addEventListener('input', filterTopics);

// ================================
// DETAIL MATERI
// ================================
document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
  const lesson = lessons[button.dataset.topic];
  if (!lesson) return;

  document.getElementById('lessonTag').textContent = lesson.tag;
  document.getElementById('lessonTitle').textContent = lesson.title;

  const body = document.getElementById('lessonBody');
  body.replaceChildren();
  lesson.sections.forEach(section => {
    const heading = document.createElement('h3');
    heading.textContent = section.heading;
    const content = document.createElement('div');
    content.innerHTML = section.content;
    body.append(heading, content);
  });

  const task = document.getElementById('lessonTask');
  task.replaceChildren();
  const title = document.createElement('strong');
  title.textContent = 'Aktivitas & Evaluasi Belajar:';
  const content = document.createElement('div');
  content.innerHTML = lesson.task;
  task.append(title, content);

  showTab('detail-materi');
}));

document.getElementById('backToMateri')?.addEventListener('click', () => showTab('materi'));
filterTopics();

// ================================
// KALKULATOR
// ================================
function numberFrom(id) {
  const element = document.getElementById(id);
  return element ? Number.parseFloat(element.value) : NaN;
}

function calculateDisplacement() {
  const bore = numberFrom('bore');
  const stroke = numberFrom('stroke');
  const cylinders = numberFrom('cylinders');
  const valid = bore > 0 && stroke > 0 && Number.isInteger(cylinders) && cylinders > 0;
  const cc = valid ? Math.PI / 4 * bore ** 2 * stroke * cylinders / 1000 : NaN;
  document.getElementById('ccResult')?.replaceChildren(document.createTextNode(Number.isFinite(cc) ? `${cc.toFixed(1)} cc` : 'Periksa input'));
  document.getElementById('literResult')?.replaceChildren(document.createTextNode(Number.isFinite(cc) ? `${(cc / 1000).toFixed(3)} liter` : 'Masukkan nilai positif'));
}

function calculateCompression() {
  const swept = numberFrom('swept');
  const chamber = numberFrom('chamber');
  const ratio = swept > 0 && chamber > 0 ? (swept + chamber) / chamber : NaN;
  const result = document.getElementById('compressionResult');
  if (result) result.textContent = Number.isFinite(ratio) ? `${ratio.toFixed(2)} : 1` : 'Periksa input';
}

function calculatePressure() {
  const bar = numberFrom('barValue');
  const valid = bar >= 0 && Number.isFinite(bar);
  document.getElementById('kpaResult')?.replaceChildren(document.createTextNode(valid ? (bar * 100).toFixed(1) : '—'));
  document.getElementById('psiResult')?.replaceChildren(document.createTextNode(valid ? (bar * 14.5038).toFixed(1) : '—'));
}

['bore','stroke','cylinders'].forEach(id => document.getElementById(id)?.addEventListener('input', calculateDisplacement));
['swept','chamber'].forEach(id => document.getElementById(id)?.addEventListener('input', calculateCompression));
document.getElementById('barValue')?.addEventListener('input', calculatePressure);
calculateDisplacement();
calculateCompression();
calculatePressure();

// ================================
// SIMULASI DIAGNOSIS
// ================================
const answerOptions = [...document.querySelectorAll('.answer-option')];
const feedback = document.getElementById('feedback');

function showSimulationFeedback(answer) {
  if (!feedback) return;
  const correct = answer === 'b';
  feedback.hidden = false;
  feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
  feedback.innerHTML = correct
    ? '<strong>Benar.</strong> Periksa aki dan terminal terlebih dahulu. Lampu dashboard yang redup mengarah pada kemungkinan suplai listrik lemah atau koneksi buruk.'
    : '<strong>Belum tepat.</strong> Mulailah dari pemeriksaan paling dasar dan aman. Periksa aki, terminal, dan koneksi sebelum membongkar komponen lain.';
}

answerOptions.forEach(option => option.addEventListener('click', () => {
  answerOptions.forEach(item => item.classList.remove('selected','correct','wrong','incorrect'));
  const answer = option.dataset.answer;
  option.classList.add('selected', answer === 'b' ? 'correct' : 'wrong');
  if (answer !== 'b') document.querySelector('.answer-option[data-answer="b"]')?.classList.add('correct');
  showSimulationFeedback(answer);
}));

document.getElementById('resetSimulation')?.addEventListener('click', () => {
  answerOptions.forEach(item => item.classList.remove('selected','correct','wrong','incorrect'));
  if (feedback) {
    feedback.hidden = true;
    feedback.className = 'feedback';
    feedback.textContent = '';
  }
});

// ================================
// SIMULASI RANGKAIAN STARTER
// ================================
const batterySwitch = document.getElementById('batterySwitch');
const fuseSwitch = document.getElementById('fuseSwitch');
const startSwitch = document.getElementById('startSwitch');
const nodeBattery = document.getElementById('nodeBattery');
const nodeFuse = document.getElementById('nodeFuse');
const nodeStarter = document.getElementById('nodeStarter');
const circuitStatus = document.getElementById('circuitStatus');

function updateCircuit() {
  if (!batterySwitch || !fuseSwitch || !startSwitch || !circuitStatus) return;
  const batteryOn = batterySwitch.checked;
  const fuseOn = fuseSwitch.checked;
  const startOn = startSwitch.checked;
  nodeBattery?.classList.toggle('powered', batteryOn);
  nodeFuse?.classList.toggle('powered', batteryOn && fuseOn);
  nodeStarter?.classList.toggle('powered', batteryOn && fuseOn && startOn);

  if (!batteryOn) circuitStatus.textContent = 'Aki terputus. Tidak ada sumber tegangan yang mengalir.';
  else if (!fuseOn) circuitStatus.textContent = 'Sekring putus. Aliran daya berhenti sebelum mencapai starter.';
  else if (!startOn) circuitStatus.textContent = 'Sistem siap. Tekan sakelar START untuk melihat alur daya.';
  else circuitStatus.textContent = 'Aliran daya aktif: AKI → SEKRING → STARTER. Starter mendapat suplai.';
}

[batterySwitch, fuseSwitch, startSwitch].forEach(control => control?.addEventListener('change', updateCircuit));
updateCircuit();

// FOOTER
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
