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

// DATA MATERI PEMBELAJARAN (SIAP DIISI MATERI BARU)
const lessons = {
  dasar: {
    title: 'Judul Modul Baru 01',
    tag: 'MODUL 01',
    sections: [
      {
        heading: 'JUDUL BAB ATAU SUB-MATERI BARU',
        content: `
          <p>Tuliskan paragraf materi baru di sini.</p>
          
          <!-- Contoh menambahkan foto jika ada -->
          <div class="materi-image-box">
            <img src="images/foto-materi.jpg" alt="Deskripsi Foto" class="responsive-img">
            <p class="img-caption">Keterangan foto/gambar</p>
          </div>

          <ul>
            <li>Poin penjelasan 1</li>
            <li>Poin penjelasan 2</li>
          </ul>
        `
      }
    ],
    task: `
      <div>
        <strong style="color: var(--lime); font-size: 15px;">Aktivitas / Soal Baru:</strong>
        <p style="margin: 4px 0 0; font-size: 13px;">Tuliskan tugas atau latihan soal baru di sini.</p>
      </div>
    `
  },

  mesin: {
    title: 'Judul Modul Baru 02',
    tag: 'MODUL 02',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  tenaga: {
    title: 'Judul Modul Baru 03',
    tag: 'MODUL 03',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  listrik: {
    title: 'Judul Modul Baru 04',
    tag: 'MODUL 04',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  bahanbakar: {
    title: 'Judul Modul Baru 05',
    tag: 'MODUL 05',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  tools: {
    title: 'Judul Modul Baru 06',
    tag: 'MODUL 06',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  chassis: {
    title: 'Judul Modul Baru 07',
    tag: 'MODUL 07',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  },

  diagnosis: {
    title: 'Judul Modul Baru 08',
    tag: 'MODUL 08',
    sections: [
      {
        heading: 'JUDUL SUB-MATERI',
        content: '<p>Tuliskan isi materi baru di sini...</p>'
      }
    ],
    task: 'Tuliskan tugas/aktivitas di sini...'
  }
};

// JALUR BELAJAR BERTAHAP & FILTER MATERI
let currentLevel = 'pemula';

const learningLevels = {
  pemula: 'Deskripsi singkat untuk level pemula.',
  menengah: 'Deskripsi singkat untuk level menengah.',
  lanjut: 'Deskripsi singkat untuk level lanjutan.'
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
      
