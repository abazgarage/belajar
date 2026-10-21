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
    title: 'Dasar Otomotif & K3 Dalam Dunia Otomotif Mobil',
    tag: 'MODUL 01 • KURIKULUM LENGKAP K3 BENGKEL',
    sections: [
      {
        heading: 'BAB 1. PENGERTIAN, TUJUAN & MANFAAT K3',
        content: `
          <p><strong>1.1 Pengertian K3:</strong> Keselamatan dan Kesehatan Kerja (K3) adalah upaya menciptakan lingkungan kerja yang aman, sehat, dan bebas dari kecelakaan serta penyakit akibat kerja di bengkel kendaraan (pemeriksaan, perawatan mesin, rem, kelistrikan, dan uji kendaraan).</p>
          <p><strong>1.2 Tujuan Utama:</strong> Mencegah kecelakaan/cedera, melindungi kendaraan & peralatan, mencegah kebakaran/listrik, menjaga kebersihan lingkungan, serta menekan biaya akibat kerusakan/kecelakaan.</p>
          <p><strong>1.3 Manfaat:</strong> Bagi mekanik/siswa (rasa aman & disiplin), bagi bengkel (peningkatan produktivitas & kepercayaan konsumen), serta lingkungan (mencegah pencemaran oli/kimia).</p>
        `
      },
      {
        heading: 'BAB 2. DASAR HUKUM K3 DI INDONESIA',
        content: `
          <ul>
            <li>UU No. 1 Tahun 1970 tentang Keselamatan Kerja.</li>
            <li>UU No. 13 Tahun 2003 tentang Ketenagakerjaan.</li>
            <li>PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3).</li>
            <li>Peraturan Menteri Ketenagakerjaan terkait bahaya tempat kerja spesifik.</li>
          </ul>
        `
      },
      {
        heading: 'BAB 3. IDENTIFIKASI BAHAYA DI BENGKEL OTOMOTIF',
        content: `
          <h4>3.1 Bahaya Mekanis</h4>
          <p>Berasal dari bagian berputar/tajam (Kipas radiator, drive belt, pulley, gerinda, bor, dongkrak/lift). <em>Risiko:</em> Terjepit, terpotong, tertimpa. <em>Pencegahan:</em> Pasang pelindung, matikan mesin saat pengerjaan.</p>

          <h4>3.2 Bahaya Listrik</h4>
          <p>Berasal dari korsleting aki, kabel terkelupas, sistem pengapian, hingga baterai EV/Hibrida. <em>Risiko:</em> Sengatan listrik, kebakaran, luka bakar.</p>

          <h4>3.3 Bahaya Kimia</h4>
          <p>Bensin, solar, oli, minyak rem, radiator coolant, cairan pembersih, elektrolit aki. <em>Risiko:</em> Iritasi kulit/mata, gangguan pernapasan, keracunan, kebakaran.</p>

          <h4>3.4 Bahaya Fisik</h4>
          <p>Suhu mesin/knalpot panas, kebisingan, getaran, gas buang (CO), dan pencahayaan buruk.</p>

          <h4>3.5 Bahaya Ergonomi</h4>
          <p>Posisi mengangkat beban membungkuk, berulang-ulang, atau jongkok terlalu lama. <em>Pencegahan:</em> Tekuk lutut saat mengangkat komponen berat.</p>

          <h4>3.6 Kebakaran & Ledakan</h4>
          <p>Akibat uap bahan bakar, percikan api listrik, pengelasan, atau rokok. Selalu sediakan APAR & amankan jalur evakuasi.</p>
        `
      },
      {
        heading: 'BAB 4. ALAT PELINDUNG DIRI (APD)',
        content: `
          <ol>
            <li><strong>Wearpack (Pakaian Kerja):</strong> Melindungi tubuh dari kotoran/percikan; harus pas dan tidak menjuntai.</li>
            <li><strong>Kacamata Keselamatan:</strong> Melindungi mata dari debu, serpihan gerinda, atau cairan kimia.</li>
            <li><strong>Sarung Tangan Kerja:</strong> Sesuaikan jenisnya (mekanis, tahan kimia, atau tahan panas). Jauhi bagian berputar.</li>
            <li><strong>Sepatu Keselamatan (Safety Shoes):</strong> Melindungi dari kejatuhan benda berat/tajam dan terpeleset. Dilarang pakai sandal.</li>
            <li><strong>Pelindung Pendengaran & Pernapasan:</strong> Earplug/earmuff untuk kebisingan; respirator/masker sesuai kontaminan.</li>
          </ol>
        `
      },
      {
        heading: 'BAB 5 - 7. PROSEDUR K3 SEBELUM, SAAT, DAN SETELAH BEKERJA',
        content: `
          <h4>Sebelum Bekerja:</h4>
          <p>Periksa lantai (harus bebas licin), ketersediaan APAR & P3K, aktifkan rem parkir/ganjal roda kendaraan, dan cek keutuhan alat bantu angkat.</p>
          <h4>Saat Bekerja:</h4>
          <p>Dilarang bercanda, jangan jalankan mesin di ruang tertutup tanpa sistem ekstraksi gas buang, bersihkan tumpahan oli segera.</p>
          <h4>Setelah Bekerja:</h4>
          <p>Pastikan komponen terpasang aman, kembalikan tools ke tempatnya, pisahkan limbah otomotif, lepaskan APD, dan cuci tangan.</p>
        `
      },
      {
        heading: 'BAB 8 - 14. K3 SPESIFIK TOOLS, MESIN, ELEKTRIKAL, REM & PENGANGKATAN',
        content: `
          <ul>
            <li><strong>Dongkrak & Stand:</strong> Jangan pernah bekerja di bawah kendaraan yang HANYA ditopang oleh dongkrak! Selalu gunakan <em>Jack Stand</em> (penyangga) resmi.</li>
            <li><strong>Sistem Pendingin Panas:</strong> Dilarang keras membuka tutup radiator saat mesin masih panas dan bertekanan.</li>
            <li><strong>Kendaraan Hibrida/EV:</strong> Hanya diakses oleh teknisi bersertifikat. Hindari menyentuh kabel berwarna <strong>ORANGE</strong> (tegangan tinggi).</li>
            <li><strong>Pengelasan / Pekerjaan Panas:</strong> Bebaskan area dari bahan mudah terbakar dan sediakan APAR terdekat.</li>
          </ul>
        `
      },
      {
        heading: 'BAB 15 - 18. LINGKUNGAN, DARURAT, APAR & HIERARKI RISIKO',
        content: `
          <p><strong>Pengelolaan Limbah:</strong> Pisahkan oli bekas, filter, dan aki bekas. Dilarang membuang limbah kimia ke tanah/saluran air.</p>
          <p><strong>Penanganan Darurat:</strong> Luka bakar (siram air mengalir ~20 menit), percikan kimia mata (bilas air bersih 15-20 menit), sengatan listrik (matikan sumber energi utama dulu sebelum menyentuh korban).</p>
          <p><strong>Teknik APAR (PASS):</strong> Tarik pin (Pull), Arahkan nosel (Aim), Tekan tuas (Squeeze), Sapukan ke pangkal api (Sweep).</p>
          <p><strong>5 Hierarki Pengendalian Risiko:</strong> 1. Eliminasi → 2. Substitusi → 3. Pengendalian Teknis → 4. Pengendalian Administratif → 5. APD.</p>
        `
      }
    ],
    task: `
      <div style="margin-bottom: 16px;">
        <strong style="color: var(--lime); font-size: 15px;">BAB 21. LATIHAN SOAL PILIHAN GANDA:</strong>
        <div class="quiz-option">1. Kepanjangan K3 adalah... <br><b>A. Keselamatan dan Kesehatan Kerja</b></div>
        <div class="quiz-option">2. APD untuk melindungi mata dari serpihan gerinda adalah... <br><b>C. Kacamata keselamatan</b></div>
        <div class="quiz-option">3. Bekerja di bawah kendaraan yang hanya ditopang dongkrak adalah... <br><b>C. Tidak aman (Wajib pakai Jack Stand)</b></div>
        <div class="quiz-option">4. Kabel bertegangan tinggi pada kendaraan listrik berwarna... <br><b>B. Orange</b></div>
      </div>
      <div>
        <strong style="color: var(--lime); font-size: 15px;">TUGAS PRAKTIK OBSERVASIONAL:</strong>
        <p style="margin: 4px 0 0; font-size: 13px;">Lakukan pengamatan di bengkel, catat kondisi area kerja, potensi bahaya mekanis/kimia, ketersediaan APD, serta buatkan rekomendasi pengendalian risikonya.</p>
      </div>
    `
  },

  mesin: {
    title: 'Mesin Kendaraan',
    tag: 'MODUL 02 • SISTEM MESIN',
    sections: [
      {
        heading: 'PRINSIP KERJA MESIN 4-TAK',
        content: `
          <p>Piston bergerak naik-turun di dalam silinder dan meneruskan gaya hasil pembakaran ke poros engkol (crankshaft).</p>
          <ul>
            <li><strong>Langkah Hisap:</strong> Katup masuk terbuka, piston bergerak turun menyedot campuran udara-bahan bakar.</li>
            <li><strong>Langkah Kompresi:</strong> Kedua katup tertutup, piston naik memampatkan campuran gas.</li>
            <li><strong>Langkah Usaha:</strong> Busi memercikkan bunga api, terjadi pembakaran menekan piston turun.</li>
            <li><strong>Langkah Buang:</strong> Katup buang terbuka, piston naik mendorong gas sisa pembakaran keluar.</li>
          </ul>
        `
      }
    ],
    task: 'Urutkan empat langkah kerja mesin 4-tak beserta kondisi katup masuk dan buang pada tiap langkahnya.'
  },

  tenaga: {
    title: 'Sistem Pemindah Tenaga',
    tag: 'MODUL 03 • DRIVETRAIN',
    sections: [
      {
        heading: 'KOMPONEN PEMINDAH TENAGA',
        content: `
          <p>Memindahkan tenaga putar mesin menuju roda penggerak kendaraan secara efisien.</p>
          <ul>
            <li><strong>Kopling (Clutch):</strong> Menghubungkan dan memutus aliran tenaga secara halus saat perpindahan gigi.</li>
            <li><strong>Transmisi:</strong> Mengubah rasio perbandingan gigi untuk menyesuaikan torsi dan kecepatan kendaraan.</li>
            <li><strong>Poros Propeller & Gardan:</strong> Meneruskan putaran ke diferensial untuk membagi kecepatan putar roda kiri-kanan saat berbelok.</li>
          </ul>
        `
      }
    ],
    task: 'Jelaskan alasan teknis mengapa kendaraan membutuhkan variasi perbandingan rasio gigi transmisi.'
  },

  listrik: {
    title: 'Kelistrikan Mobil',
    tag: 'MODUL 04 • ELEKTRIKAL',
    sections: [
      {
        heading: 'SISTEM KELISTRIKAN UTAMA',
        content: `
          <p>Menyuplai daya awal untuk starting, pengapian, dan aksesoris elektronik kendaraan.</p>
          <ul>
            <li><strong>Aki (Baterai):</strong> Menyimpan energi kimia yang diubah menjadi arus listrik DC.</li>
            <li><strong>Motor Starter:</strong> Memutar poros engkol pertama kali untuk menghidupkan mesin.</li>
            <li><strong>Alternator:</strong> Menyuplai listrik dan menguji/mengisi ulang aki saat mesin beroperasi.</li>
          </ul>
        `
      }
    ],
    task: 'Tuliskan prosedur yang benar sebelum melakukan pengukuran resistansi hambatan menggunakan multimeter.'
  },

  bahanbakar: {
    title: 'Sistem Bahan Bakar dan EFI',
    tag: 'MODUL 05 • ENGINE MANAGEMENT',
    sections: [
      {
        heading: 'SISTEM EFI (ELECTRONIC FUEL INJECTION)',
        content: `
          <p>Mengatur volume penyemprotan bahan bakar secara akurat berdasarkan sinyal sensor real-time.</p>
          <p>ECU (Engine Control Unit) mengolah data dari sensor suhu (ECT), posisi throttle (TPS), dan aliran udara (MAF) untuk mengontrol injektor.</p>
        `
      }
    ],
    task: 'Sebutkan fungsi dari sensor suhu mesin (ECT) dan dampaknya jika sensor tersebut rusak.'
  },

  tools: {
    title: 'Tools dan Alat Ukur',
    tag: 'MODUL 06 • PERALATAN BENGKEL',
    sections: [
      {
        heading: 'ALAT UKUR PRESISI BENGKEL',
        content: `
          <ul>
            <li><strong>Jangka Sorong (Vernier Caliper):</strong> Mengukur diameter luar, dalam, serta kedalaman hingga ketelitian 0.02/0.05 mm.</li>
            <li><strong>Mikrometer (Micrometer):</strong> Mengukur komponen presisi tinggi seperti jurnal poros engkol hingga ketelitian 0.01 mm.</li>
            <li><strong>Kunci Momen:</strong> Mengencangkan baut silinder kop sesuai nilai spesifikasi torsi pabrikan.</li>
          </ul>
        `
      }
    ],
    task: 'Tentukan alat ukur yang paling tepat untuk mengukur ketebalan pasak dan diameter jurnal poros engkol.'
  },

  chassis: {
    title: 'Rem, Kemudi dan Suspensi',
    tag: 'MODUL 07 • CHASSIS',
    sections: [
      {
        heading: 'SISTEM CHASSIS & KESELAMATAN',
        content: `
          <p>Menjaga stabilitas, kendali arah, dan penghentian laju kendaraan secara aman.</p>
          <p>Sistem rem hidrolik memanfaatkan Hukum Pascal untuk meneruskan tekanan fluida minyak rem ke kaliper dan sepatu rem.</p>
        `
      }
    ],
    task: 'Jelaskan dampak keselamatan jika terjadi kebocoran angin/udara atau minyak rem pada sistem hidrolik.'
  },

  diagnosis: {
    title: 'Diagnosis Kerusakan',
    tag: 'MODUL 08 • TROUBLESHOOTING',
    sections: [
      {
        heading: 'PROSEDUR DIAGNOSIS SISTEMATIS',
        content: `
          <ol>
            <li>Konfirmasi gejala keluhan dari pemilik kendaraan.</li>
            <li>Lakukan inspeksi visual menyeluruh (kebocoran, kabel lepas).</li>
            <li>Lakukan pengukuran parameter teknis dan analisis kode DTC scanner OBD-II.</li>
            <li>Perbaiki dan uji coba ulang kendaraan.</li>
          </ol>
        `
      }
    ],
    task: 'Tuliskan bagan urutan langkah pemeriksaan dasar saat mesin mengalami indikasi mogok/sulit dihidupkan.'
  }
};

// JALUR BELAJAR BERTAHAP & FILTER MATERI
let currentLevel = 'pemula';

const learningLevels = {
  pemula: 'Mulai dari dasar otomotif, K3 bengkel, fungsi komponen, dan keselamatan kerja sebelum praktik.',
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

// PENCARIAN MATERI
document.getElementById('materiSearch').addEventListener('input', () => {
  filterTopics();
});

// MEMBUKA HALAMAN DETAIL MATERI KHUSUS
document.querySelectorAll('[data-topic]').forEach(button => {
  button.addEventListener('click', () => {
    const topicKey = button.dataset.topic;
    const lesson = lessons[topicKey];

    if (!lesson) return;

    document.getElementById('lessonTag').textContent = lesson.tag;
    document.getElementById('lessonTitle').textContent = lesson.title;

    const bodyContainer = document.getElementById('lessonBody');
    bodyContainer.replaceChildren();

    if (lesson.sections) {
      lesson.sections.forEach(sec => {
        const secHeading = document.createElement('h3');
        secHeading.textContent = sec.heading;
        
        const secDiv = document.createElement('div');
        secDiv.innerHTML = sec.content;

        bodyContainer.append(secHeading, secDiv);
      });
    }

    const taskContainer = document.getElementById('lessonTask');
    taskContainer.replaceChildren();

    const taskTitle = document.createElement('strong');
    taskTitle.textContent = 'Aktivitas & Evaluasi Belajar:';
    
    const taskDesc = document.createElement('div');
    taskDesc.innerHTML = lesson.task;

    taskContainer.append(taskTitle, taskDesc);

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
