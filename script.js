// NAVIGASI ANTAR TAB & PAGE
const navButtons = [...document.querySelectorAll('.nav-btn')];
const pages = [...document.querySelectorAll('.page')];

function showTab(tabId) {
  if (!document.getElementById(tabId)) return;

  pages.forEach(page => {
    page.classList.toggle('active', page.id === tabId);
  });

  navButtons.forEach(button => {
    const active = button.dataset.tab === tabId;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => {
  button.addEventListener('click', () => showTab(button.dataset.tab));
});

document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => showTab(button.dataset.go));
});

document.querySelectorAll('[data-tab-link]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showTab(link.dataset.tabLink);
  });
});

// DATA MATERI LENGKAP
const lessons = {
  dasar: {
    title: 'Dasar Otomotif',
    tag: 'MODUL 01 • PENGENALAN',
    points: [
      'Mobil mengubah energi bahan bakar atau listrik menjadi gerak mekanis.',
      'Sistem utama mobil meliputi mesin, pemindah tenaga (drivetrain), chassis, kelistrikan, dan bodi.',
      'Prinsip kerja keselamatan kerja (K3) wajib diterapkan sebelum menyentuh komponen fisik kendaraan.',
      'Penggunaan APD (Alat Pelindung Diri) seperti sepatu safety, kacamata pelindung, dan sarung tangan sangat krusial.'
    ],
    task: 'Sebutkan tiga sistem kendaraan dan jelaskan fungsi dasarnya masing-masing.'
  },

  mesin: {
    title: 'Mesin Kendaraan',
    tag: 'MODUL 02 • SISTEM MESIN',
    points: [
      'Piston bergerak naik-turun di dalam silinder dan meneruskan gaya hasil pembakaran ke poros engkol (crankshaft).',
      'Mesin bensin 4-tak menjalani empat siklus: Langkah Hisap, Kompresi, Usaha (Pembakaran), dan Buang.',
      'Sistem pelumasan mencegah keausan antar gesekan logam dengan mengalirkan oli bermutu.',
      'Sistem pendinginan menyerap panas berlebih dari mesin menggunakan radiator dan coolant agar tidak overheat.'
    ],
    task: 'Urutkan empat langkah kerja mesin 4-tak beserta kondisi katup masuk dan buang pada tiap langkahnya.'
  },

  tenaga: {
    title: 'Sistem Pemindah Tenaga',
    tag: 'MODUL 03 • DRIVETRAIN',
    points: [
      'Kopling (Clutch) berfungsi menghubungkan dan memutus aliran tenaga dari mesin ke transmisi secara halus.',
      'Transmisi mengubah perbandingan rasio gigi untuk menyesuaikan torsi dan kecepatan kendaraan.',
      'Poros Propeller merubah dan meneruskan putaran dari transmisi depan ke gardan/diferensial belakang.',
      'Diferensial (Gardan) membagi putaran roda kiri dan kanan agar dapat berputar dengan kecepatan berbeda saat berbelok.'
    ],
    task: 'Jelaskan alasan teknis mengapa kendaraan membutuhkan variasi perbandingan rasio gigi transmisi.'
  },

  listrik: {
    title: 'Kelistrikan Mobil',
    tag: 'MODUL 04 • ELEKTRIKAL',
    points: [
      'Aki (Baterai) menyimpan energi kimia yang diubah menjadi listrik untuk kebutuhan daya awal starting.',
      'Motor starter berfungsi memutar poros engkol pertama kali saat mesin dihidupkan.',
      'Alternator menyuplai seluruh listrik kendaraan sekaligus menguji dan mengisi kembali arus ke aki saat mesin beroperasi.',
      'Penggunaan multimeter wajib dikuasai untuk mengukur tegangan (Volt), resistansi (Ohm), dan arus (Ampere).'
    ],
    task: 'Tuliskan prosedur yang benar sebelum melakukan pengukuran resistansi hambatan menggunakan multimeter.'
  },

  bahanbakar: {
    title: 'Sistem Bahan Bakar dan EFI',
    tag: 'MODUL 05 • ENGINE MANAGEMENT',
    points: [
      'Sistem EFI (Electronic Fuel Injection) menyemprotkan bahan bakar secara presisi sesuai kebutuhan ruang bakar.',
      'ECU (Engine Control Unit) bertindak sebagai otak yang mengolah data dari berbagai sensor.',
      'Sensor posisi throttle (TPS) dan sensor suhu air pendingin (ECT) memberikan input variabel real-time.',
      'Diagnosis kerusakan EFI dapat dianalisis lewat data live stream scanner OBD-II.'
    ],
    task: 'Sebutkan fungsi dari sensor suhu mesin (ECT) dan dampaknya jika sensor tersebut rusak.'
  },

  tools: {
    title: 'Tools dan Alat Ukur',
    tag: 'MODUL 06 • PERALATAN BENGKEL',
    points: [
      'Pemilihan ukuran kunci (pass, ring, socket) yang pas mencegah kerusakan pada kepala baut/mur.',
      'Kunci Momen (Torque Wrench) digunakan untuk mengencangkan baut sesuai standar spesifikasi kekencangan pabrik.',
      'Jangka Sorong (Vernier Caliper) digunakan untuk mengukur diameter luar, diameter dalam, dan kedalaman.',
      'Mikrometer (Micrometer) memberikan tingkat ketelitian tinggi hingga 0.01 mm untuk komponen mesin.'
    ],
    task: 'Tentukan alat ukur yang paling tepat untuk mengukur ketebalan pasak dan diameter jurnal poros engkol.'
  },

  chassis: {
    title: 'Rem, Kemudi dan Suspensi',
    tag: 'MODUL 07 • CHASSIS',
    points: [
      'Sistem rem mengubah energi kinetik gerak menjadi energi panas melalui gesekan gesek.',
      'Sistem kemudi (steering system) mentransfer putaran roda kemudi ke roda depan kendaraan.',
      'Suspensi meredam kejutan dari permukaan jalan dan menjaga kestabilan daya cengkeram ban.',
      'Sistem rem hidrolik memanfaatkan fluida minyak rem berdasarkan Hukum Pascal.'
    ],
    task: 'Jelaskan dampak keselamatan jika terjadi kebocoran angin/udara atau minyak rem pada sistem hidrolik.'
  },

  diagnosis: {
    title: 'Diagnosis Kerusakan',
    tag: 'MODUL 08 • TROUBLESHOOTING',
    points: [
      'Prosedur diagnosis diawali dari konfirmasi keluhan pengguna dan analisis kondisi munculnya masalah.',
      'Lakukan pemeriksaan visual menyeluruh sebelum melakukan pengujian lanjutan.',
      'Gunakan logika sistematis: periksa pasokan listrik, aliran bahan bakar, kompresi, dan pengapian.',
      'Bandingkan hasil pengukuran alat ukur dengan spesifikasi buku manual servis resmi.'
    ],
    task: 'Tuliskan bagan urutan langkah pemeriksaan dasar saat mesin mengalami indikasi mogok/sulit dihidupkan.'
  }
};

// JALUR BELAJAR BERTAHAP & FILTER MATERI
let currentLevel = 'pemula';

const learningLevels = {
  pemula: 'Mulai dari dasar otomotif, fungsi komponen, dan keselamatan kerja sebelum praktik.',
  menengah: 'Pelajari cara kerja sistem, penggunaan alat ukur, dan cara membaca hasil pengukuran.',
  lanjut: 'Latih diagnosis berbasis gejala, pengujian terarah, interpretasi data, dan verifikasi perbaikan.'
};

function filterTopics() {
  const searchInput = document.getElementById('materiSearch');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  document.querySelectorAll('.topic-card').forEach(card => {
    const matchesLevel = card.dataset.level === currentLevel;
    const content = (card.dataset.search + ' ' + card.innerText).toLowerCase();
    const matchesSearch = content.includes(query);

    // Hanya tampilkan jika cocok dengan level aktif DAN kata kunci pencarian
    card.hidden = !(matchesLevel && matchesSearch);
  });
}

document.querySelectorAll('[data-level]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-level]').forEach(item => {
      item.classList.toggle('selected', item === button);
    });

    currentLevel = button.dataset.level;
    document.getElementById('pathDescription').textContent = learningLevels[currentLevel];

    filterTopics();
  });
});

// PENCARIAN MATERI (TERINTEGRASI DENGAN FILTER LEVEL)
document.getElementById('materiSearch').addEventListener('input', () => {
  filterTopics();
});

// MEMBUKA HALAMAN DETAIL MATERI KHUSUS
document.querySelectorAll('[data-topic]').forEach(button => {
  button.addEventListener('click', () => {
    const topicKey = button.dataset.topic;
    const lesson = lessons[topicKey];

    if (!lesson) return;

    // Setel Konten
    document.getElementById('lessonTag').textContent = lesson.tag;
    document.getElementById('lessonTitle').textContent = lesson.title;

    const bodyContainer = document.getElementById('lessonBody');
    bodyContainer.replaceChildren();

    const list = document.createElement('ul');
    lesson.points.forEach(point => {
      const item = document.createElement('li');
      item.textContent = point;
      list.appendChild(item);
    });
    bodyContainer.appendChild(list);

    const taskContainer = document.getElementById('lessonTask');
    taskContainer.replaceChildren();

    const taskTitle = document.createElement('strong');
    taskTitle.textContent = 'Aktivitas & Evaluasi Belajar:';
    
    const taskDesc = document.createElement('p');
    taskDesc.style.margin = '0';
    taskDesc.textContent = lesson.task;

    taskContainer.append(taskTitle, taskDesc);

    // Pindah Halaman ke Detail Materi
    showTab('detail-materi');
  });
});

// TOMBOL KEMBALI DARI DETAIL MATERI
document.getElementById('backToMateri').addEventListener('click', () => {
  showTab('materi');
});

// Jalankan filter pertama kali untuk menyaring materi 'pemula'
filterTopics();

// KALKULATOR KAPASITAS MESIN
function numberFrom(id) {
  return Number.parseFloat(document.getElementById(id).value);
}

function calculateDisplacement() {
  const bore = numberFrom('bore');
  const stroke = numberFrom('stroke');
  const cylinders = numberFrom('cylinders');

  const valid =
    bore > 0 &&
    stroke > 0 &&
    Number.isInteger(cylinders) &&
    cylinders > 0;

  const cc = valid
    ? Math.PI / 4 * bore * bore * stroke * cylinders / 1000
    : NaN;

  document.getElementById('ccResult').textContent =
    Number.isFinite(cc) ? cc.toFixed(1) + ' cc' : 'Periksa input';

  document.getElementById('literResult').textContent =
    Number.isFinite(cc)
      ? (cc / 1000).toFixed(3) + ' liter'
      : 'Masukkan nilai positif';
}

// KALKULATOR RASIO KOMPRESI
function calculateCompression() {
  const swept = numberFrom('swept');
  const chamber = numberFrom('chamber');

  const ratio = swept > 0 && chamber > 0
    ? (swept + chamber) / chamber
    : NaN;

  document.getElementById('compressionResult').textContent =
    Number.isFinite(ratio)
      ? ratio.toFixed(2) + ' : 1'
      : 'Periksa input';
}

// KONVERSI TEKANAN
function calculatePressure() {
  const bar = numberFrom('barValue');

  document.getElementById('kpaResult').textContent =
    bar >= 0 && Number.isFinite(bar)
      ? (bar * 100).toFixed(1)
      : '—';

  document.getElementById('psiResult').textContent =
    bar >= 0 && Number.isFinite(bar)
      ? (bar * 14.5038).toFixed(2)
      : '—';
}

['bore', 'stroke', 'cylinders'].forEach(id => {
  document.getElementById(id).addEventListener('input', calculateDisplacement);
});

['swept', 'chamber'].forEach(id => {
  document.getElementById(id).addEventListener('input', calculateCompression);
});

document.getElementById('barValue').addEventListener('input', calculatePressure);

calculateDisplacement();
calculateCompression();
calculatePressure();

// KUIS DIAGNOSIS STARTER
const answers = document.querySelectorAll('.answer-option');

answers.forEach(button => {
  button.addEventListener('click', () => {
    answers.forEach(option => {
      option.disabled = true;
      option.classList.remove('correct', 'wrong');
    });

    const feedback = document.getElementById('feedback');
    feedback.hidden = false;

    if (button.dataset.answer === 'b') {
      button.classList.add('correct');
      feedback.className = 'feedback';
      feedback.textContent =
        'Benar! Aki lemah atau terminal longgar dapat menyebabkan lampu redup dan starter tidak berputar. Periksa kondisi aki, terminal, dan tegangan sesuai prosedur.';
    } else {
      button.classList.add('wrong');

      document.querySelector('[data-answer="b"]').classList.add('correct');

      feedback.className = 'feedback incorrect';
      feedback.textContent =
        'Belum tepat. Mulailah dari pemeriksaan kondisi aki dan terminal. Lanjutkan ke rangkaian starter bila sumber daya dan sambungan sudah dipastikan baik.';
    }
  });
});

document.getElementById('resetSimulation').addEventListener('click', () => {
  answers.forEach(option => {
    option.disabled = false;
    option.classList.remove('correct', 'wrong');
  });

  const feedback = document.getElementById('feedback');
  feedback.hidden = true;
  feedback.className = 'feedback';
  feedback.textContent = '';
});

// SIMULASI RANGKAIAN STARTER
function updateCircuit() {
  const battery = document.getElementById('batterySwitch').checked;
  const fuse = document.getElementById('fuseSwitch').checked;
  const start = document.getElementById('startSwitch').checked;
  const active = battery && fuse && start;

  document.getElementById('nodeBattery')
    .classList.toggle('powered', battery);

  document.getElementById('nodeFuse')
    .classList.toggle('powered', battery && fuse);

  document.getElementById('nodeStarter')
    .classList.toggle('powered', active);

  document.querySelectorAll('.circuit-wire').forEach((wire, index) => {
    wire.classList.toggle(
      'powered',
      index === 0 ? battery && fuse : active
    );
  });

  const status = document.getElementById('circuitStatus');

  if (!battery) {
    status.textContent =
      'Sumber daya tidak tersedia. Periksa aki dan sambungan utama.';
  } else if (!fuse) {
    status.textContent =
      'Jalur terputus pada sekring. Cari penyebab sekring putus sebelum menggantinya.';
  } else if (!start) {
    status.textContent =
      'Daya tersedia pada model rangkaian. Aktifkan sakelar START untuk melihat starter bekerja.';
  } else {
    status.textContent =
      'Alur daya aktif pada model ini. Kendaraan nyata dapat memiliki relay, interlock, dan kontrol ECU.';
  }
}

['batterySwitch', 'fuseSwitch', 'startSwitch'].forEach(id => {
  document.getElementById(id).addEventListener('change', updateCircuit);
});

updateCircuit();

// TAHUN FOOTER
document.getElementById('year').textContent = new Date().getFullYear();
