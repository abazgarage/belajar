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

// DATA MATERI PEMBELAJARAN (MENYIAPKAN GAMBAR TEKNIK)
const lessons = {
  dasar: {
    title: 'MENYIAPKAN GAMBAR TEKNIK',
    tag: 'MODUL 01',
    sections: [
      {
        heading: 'A. Pengetahuan yang Diperlukan dalam Membaca Gambar Teknik',
        content: `
          <h3>1. Fungsi Gambar Teknik</h3>
          <p>Gambar merupakan sebuah media untuk menyatakan maksud bagi orang-orang teknik. Oleh karena itu gambar juga sering disebut sebagai bahasa teknik. Sebagai bahasa teknik, sebuah gambar dapat meneruskan keterangan-keterangan secara tepat dan objektif.</p>
          <p>Gambar teknik memiliki beberapa fungsi yaitu :</p>
          <ul>
            <li><strong>a. Penyampaian Informasi:</strong> Gambar memiliki tugas menyampaikan maksud dari perancang dengan tepat kepada pihak lain, terutama di bidang manufaktur.</li>
            <li><strong>b. Pengawetan dan Penyimpanan:</strong> Gambar merupakan sebuah data teknis yang tepat atau sering dikenal dengan blueprint atau cetak biru atau sebuah pemadatan teknologi dalam sebuah gambar.</li>
            <li><strong>c. Penuangan Gagasan dan Pengembangan:</strong> Dalam sebuah perancangan, gagasan-gagasan baru biasanya diwujudkan dalam bentuk sketsa, dan ketika melewati evaluasi yang berulang-ulang akan didapatkan sebuah gambar baru yang lebih sempurna.</li>
          </ul>

          <h3>2. Standar Industri Gambar Teknik</h3>
          <p>Standar industri gambar teknik merupakan kesepakatan bersama dengan tujuan menghindari salah pengertian dalam komunikasi teknik. Negara-negara yang sudah membuat standar antara lain :</p>
          <ul>
            <li>a. Jepang (JIS)</li>
            <li>b. Belanda (NEN)</li>
            <li>c. Jerman (DIN)</li>
            <li>d. Indonesia (SII)</li>
            <li>e. Standar International (ISO/International Standardization for Organization)</li>
          </ul>

          <h3>3. Jenis-Jenis Peralatan Gambar</h3>
          <p>Alat-alat gambar yang biasa digunakan dalam menggambar teknik antara lain:</p>
          <p><strong>a. Kertas Gambar dengan Ukurannya</strong><br>Sesuai dengan sistem ISO dan NNI, ukuran kertas gambar ditentukan dalam tabel ukuran kertas.</p>
          
          <p><strong>b. Pensil Gambar</strong><br>Pensil yang dipakai menggambar ada dua macam yaitu pensil biasa, dan pensil mekanik.</p>
          
          <div class="materi-image-box">
            <img src="images/pensil.jpg" alt="Gambar 1 Jenis-Jenis Pensil" class="responsive-img">
            <p class="img-caption">Gambar 1 Jenis-Jenis Pensil</p>
          </div>

          <p>Tingkat kekerasan pensil disesuaikan berdasarkan tabel jenis kelunakan dan kekerasan. Untuk meruncingkan pensil jenis biasa, gunakan ampelas halus (no. 220 atau no. 400), dengan cara pensil dipegang antara jari telunjuk dan ibu jari kemudian saat mengasah pensil diputar.</p>
          
          <div class="materi-image-box">
            <img src="images/meruncingkan_pensil.jpg" alt="Gambar 2 Cara Meruncingkan Pensil" class="responsive-img">
            <p class="img-caption">Gambar 2 Cara Meruncingkan Pensil</p>
          </div>

          <p>Pena gambar digunakan untuk membuat gambar asli yaitu gambar yang ditinta. Pena gambar ada 2 macam, yaitu pena dengan mata/daun dapat diatur (trekpen) dan pena dengan ketebalan tetap dengan ukuran yang bermacam-macam yang sering disebut rapido.</p>

          <p><strong>c. Jangka dan Kelengkapannya</strong><br>Jangka digunakan untuk menggambar lingkaran atau busur.</p>
          
          <div class="materi-image-box">
            <img src="images/jangka.jpg" alt="Gambar 4 Macam Jangka dan Peralatan Pendukungnya" class="responsive-img">
            <p class="img-caption">Gambar 4 Macam Jangka dan Peralatan Pendukungnya</p>
          </div>

          <ul>
            <li>(a) Jarum jangka</li>
            <li>(b) Tempat pensil</li>
            <li>(c) Jangka pembagi</li>
            <li>(d) Jangka</li>
            <li>(e) Jangka orleon/pegas</li>
            <li>(f) Penyambung</li>
            <li>(g) Tangkai peninta</li>
            <li>(h) Peninta</li>
          </ul>

          <p><strong>d. Macam-macam mistar/penggaris</strong><br>Jenis-jenis mistar antara lain:<br>1) Penggaris segitiga, terdiri dari segitiga siku sama kaki dan sebuah segitiga siku 60°<br>2) Penggaris T, terdiri dari sebuah kepala dan sebuah daun</p>
          
          <div class="materi-image-box">
            <img src="images/penggaris.jpg" alt="Gambar 5 Penggaris Segitiga dan Penggaris T" class="responsive-img">
            <p class="img-caption">Gambar 5 Penggaris Segitiga dan Penggaris T</p>
          </div>

          <p><strong>e. Macam-macam mal</strong><br>1) Mal lengkungan, dipakai untuk membuat garis-garis lengkung yang tidak dapat dibuat menggunakan jangka.<br>2) Mal bentuk, untuk membuat gambar secara cepat.</p>
          
          <div class="materi-image-box">
            <img src="images/mal_lengkung.jpg" alt="Gambar 6 Mal Lengkungan" class="responsive-img">
            <p class="img-caption">Gambar 6 Mal Lengkungan</p>
          </div>
          
          <div class="materi-image-box">
            <img src="images/mal_bentuk.jpg" alt="Gambar 7 Mal Bentuk" class="responsive-img">
            <p class="img-caption">Gambar 7 Mal Bentuk</p>
          </div>

          <p><strong>f. Alat-alat lain</strong><br>Alat lain meliputi Mistar Skala, Busur Derajat, Penghapus, Pelindung Penghapus, Pita Gambar/Selotip, Papan Gambar dan Meja Gambar, serta Mesin Gambar.</p>
          
          <div class="materi-image-box">
            <img src="images/mistar_skala.jpg" alt="Gambar 8 Mistar Skala" class="responsive-img">
            <p class="img-caption">Gambar 8 Mistar Skala</p>
          </div>
          <div class="materi-image-box">
            <img src="images/busur.jpg" alt="Gambar 9 Busur Derajat" class="responsive-img">
            <p class="img-caption">Gambar 9 Busur Derajat</p>
          </div>
          <div class="materi-image-box">
            <img src="images/pelindung_penghapus.jpg" alt="Gambar 10 Pelindung Penghapus" class="responsive-img">
            <p class="img-caption">Gambar 10 Pelindung Penghapus</p>
          </div>
          <div class="materi-image-box">
            <img src="images/meja_gambar.jpg" alt="Gambar 11 Papan Gambar dan Meja Gambar" class="responsive-img">
            <p class="img-caption">Gambar 11 Papan Gambar dan Meja Gambar</p>
          </div>
          <div class="materi-image-box">
            <img src="images/mesin_gambar.jpg" alt="Gambar 12 Mesin Gambar" class="responsive-img">
            <p class="img-caption">Gambar 12 Mesin Gambar</p>
          </div>

          <h3>4. Cara Menggunakan Peralatan Gambar</h3>
          <p>Dalam proses penggambaran dan ketersediaan alat, terdapat beberapa hal penting yaitu cara kita menggunakan alat-alat gambar tersebut.</p>
          
          <p><strong>a. Menempatkan Kertas Gambar</strong></p>
          <ul>
            <li>1) Kertas putih diletakkan dengan permukaan yang halus menghadap ke atas.</li>
            <li>2) Ukuran kertas disesuaikan dengan benda yang akan digambar.</li>
            <li>3) Kertas gambar yang diletakkan di meja gambar disesuaikan dengan jenis meja yang digunakan.</li>
            <li>4) Kertas gambar diletakkan dekat pada sisi kiri dan sisi bawah papan gambar.</li>
            <li>5) Usahakan agar tepi kertas gambar sejajar dengan penggaris.</li>
            <li>6) Kertas gambar diletakkan pada papan gambar dengan bantuan paku payung atau pita perekat.</li>
            <li>7) Usahakan agar kertas gambar betul-betul rata di atas papan gambar.</li>
          </ul>
          <div class="materi-image-box">
            <img src="images/penempatan_kertas.jpg" alt="Gambar 13 Penempatan Kertas Gambar" class="responsive-img">
            <p class="img-caption">Gambar 13 Penempatan Kertas Gambar</p>
          </div>

          <p><strong>b. Memindahkan Ukuran</strong></p>
          <ul>
            <li>1) Mistar diletakkan sejajar mungkin pada garis dimana akan diletakkan ukuran yang dikehendaki.</li>
            <li>2) Dengan menggunakan pensil yang ujungnya tajam, buatlah goresan kecil tepat di hadapan tanda yang diinginkan.</li>
            <li>3) Jika diinginkan ketelitian yang lebih tinggi, tanda dapat dibuat dengan tusukan jarum/kaki jangka pembagi.</li>
            <li>4) Jangan sekali-kali memindahkan ukuran langsung dari mistar ukur dengan jangka pembagi.</li>
          </ul>
          <div class="materi-image-box">
            <img src="images/memindahkan_ukuran.jpg" alt="Gambar 14 Cara Memindahkan Ukuran" class="responsive-img">
            <p class="img-caption">Gambar 14 Cara Memindahkan Ukuran</p>
          </div>

          <p><strong>c. Menggambar Garis Lurus</strong></p>
          <ul>
            <li>Garis lurus mendatar (horizontal) ditarik dari kiri ke kanan.</li>
            <li>Garis lurus vertikal ditarik dari bawah ke atas.</li>
            <li>Garis sembarang ditarik dari kiri ke kanan.</li>
            <li>Garis lurus dapat ditarik/digambar dengan menggunakan penggaris T atau menggunakan segitiga.</li>
            <li>Tidak hanya garis mendatar dan tegak lurus saja, tetapi dapat juga digambar garis miring sembarang.</li>
            <li>Garis-garis sejajar miring dapat digambar dengan menggunakan sepasang segitiga.</li>
          </ul>
          <div class="materi-image-box">
            <img src="images/garis_lurus.jpg" alt="Gambar 15 Menggambar Garis Lurus" class="responsive-img">
            <p class="img-caption">Gambar 15 Menggambar Garis Lurus</p>
          </div>
          <div class="materi-image-box">
            <img src="images/penggunaan_segitiga.jpg" alt="Gambar 16 Penggunaan Segitiga" class="responsive-img">
            <p class="img-caption">Gambar 16 Penggunaan Segitiga</p>
          </div>
          <div class="materi-image-box">
            <img src="images/penggunaan_segitiga_2.jpg" alt="Gambar 17 Penggunaan Segitiga" class="responsive-img">
            <p class="img-caption">Gambar 17 Penggunaan Segitiga</p>
          </div>

          <p><strong>d. Menggambar Lingkaran</strong></p>
          <ul>
            <li>Lingkaran-lingkaran kecil digambar sekaligus (satu tahap) dengan menggunakan jangka kecil.</li>
            <li>Lingkaran-lingkaran besar digambar dalam dua tahap.</li>
            <li>Pada saat menggunakan jangka, kedua kaki jangka berdiri tegak lurus pada kertas gambar.</li>
            <li>Tekanlah jangka dengan tekanan konstan untuk menghasilkan tebal garis yang sama.</li>
          </ul>
          <div class="materi-image-box">
            <img src="images/menggambar_lingkaran.jpg" alt="Gambar 18 Cara Menggambar Lingkaran" class="responsive-img">
            <p class="img-caption">Gambar 18 Cara Menggambar Lingkaran</p>
          </div>

          <h3>5. Jenis-Jenis Garis, Angka dan Huruf dalam Gambar</h3>
          <p>Dalam gambar digunakan beberapa jenis garis yang masing-masing memiliki arti dan penggunaannya sendiri. Selain garis, dalam gambar juga digunakan angka, huruf atau lambang-lambang untuk memberi ukuran-ukuran, catatan-catatan, judul dsb.</p>
          <p><strong>Bentuk Angka dan Huruf</strong><br>Ciri-ciri yang perlu pada huruf dan angka pada gambar adalah:<br>- Jelas<br>- Seragam<br>- Dapat dibuat microfilm atau direproduksi</p>
          <p>Oleh karena itu angka dan huruf harus digambar dengan cermat dan jelas, supaya tidak menimbulkan salah baca dari pembaca gambar yang lain. Penulisan huruf dan angka juga dapat memakai sablon atau mal.</p>
          
          <div class="materi-image-box">
            <img src="images/huruf_jis.jpg" alt="Gambar 19 Bentuk Huruf-Huruf JIS" class="responsive-img">
            <p class="img-caption">Gambar 19 Bentuk Huruf-Huruf JIS</p>
          </div>
        `
      },
      {
        heading: 'B. Keterampilan yang diperlukan dalam Menyiapkan Gambar Teknik',
        content: `
          <ul>
            <li>Memilih peralatan gambar</li>
            <li>Menggunakan peralatan gambar</li>
            <li>Mengidentifikasikan produk/sistem/komponen</li>
            <li>Menyajikan produk/sistem/komponen</li>
          </ul>
        `
      },
      {
        heading: 'C. Sikap Kerja yang diperlukan dalam Menyiapkan Gambar Teknik',
        content: `
          <ul>
            <li>Harus cermat, teliti, rapi dan taat asas dalam memilih peralatan gambar</li>
            <li>Harus cermat, teliti, rapi dan taat asas dalam menggunakan peralatan gambar.</li>
            <li>Harus cermat, rapi dan taat asas dalam mengidentifikasikan produk/sistem/komponen</li>
            <li>Harus cermat, rapi dan taat asas dalam menyajikan produk/sistem/komponen</li>
          </ul>
        `
      }
    ],
    task: `
      <div>
        <strong style="color: var(--lime); font-size: 15px;">Aktivitas / Soal Latihan:</strong>
        <p style="margin: 4px 0 0; font-size: 13px;">Sebutkan 3 fungsi utama gambar teknik dan jelaskan perbedaan penggunaan pensil jenis B dan H!</p>
      </div>
    `
  },

  mesin: {
    title: 'MEMBACA GAMBAR TEKNIK,
    tag: 'MODUL 02',
    sections: [
      {
        heading: 'A. Pengetahuan yang di perrlukan dalam membaca gambar teknik',
        content: `
        <h3> 1. Identifikasi produk/sistem/komponen,</h3>
        <p>Untuk menampilkan gambar-gambar tiga dimensi pada sebuah bidang dua dimens, dapat dilakukan dengan cara proyeksi pandangan sesuai dengan aturan menggambar.</p>
      <p>Beberapa macam cara proyeksi antara lain sebagai berikut : </p>
  const materiProyeksiEropa = {
    judul: "Proyeksi Eropa dalam Gambar Teknik",

    pengertian: `
        Proyeksi Eropa adalah metode menggambar benda tiga dimensi
        ke dalam bidang dua dimensi menggunakan proyeksi ortogonal.
        Proyeksi Eropa juga dikenal sebagai First Angle Projection
        atau proyeksi sudut pertama.
    `,

    tujuan: [
        "Menampilkan bentuk benda secara dua dimensi.",
        "Menunjukkan ukuran dan bentuk benda dengan jelas.",
        "Mempermudah proses pembuatan atau manufaktur benda.",
        "Memudahkan pembacaan gambar teknik.",
        "Menampilkan beberapa pandangan benda secara sistematis."
    ],

    prinsip: [
        "Benda berada di antara pengamat dan bidang proyeksi.",
        "Pandangan atas berada di bawah pandangan depan.",
        "Pandangan kanan berada di sebelah kiri pandangan depan.",
        "Pandangan kiri berada di sebelah kanan pandangan depan."
    ],

    susunanPandangan: `
        <div class="proyeksi">
            <div class="pandangan kosong"></div>
            <div class="pandangan depan">PANDANGAN<br>DEPAN</div>
            <div class="pandangan kosong"></div>

            <div class="pandangan kanan">PANDANGAN<br>KANAN</div>
            <div class="pandangan atas">PANDANGAN<br>ATAS</div>
            <div class="pandangan kiri">PANDANGAN<br>KIRI</div>
        </div>
    `,

    garis: [
        {
            nama: "Garis kontinu tebal",
            fungsi: "Menunjukkan bagian benda yang terlihat."
        },
        {
            nama: "Garis putus-putus",
            fungsi: "Menunjukkan bagian benda yang tidak terlihat."
        },
        {
            nama: "Garis sumbu",
            fungsi: "Menunjukkan pusat atau sumbu benda."
        },
        {
            nama: "Garis ukuran",
            fungsi: "Menunjukkan ukuran benda."
        }
    ],

    langkah: [
        "Amati bentuk benda.",
        "Tentukan pandangan depan.",
        "Gambar pandangan depan.",
        "Buat pandangan atas di bawah pandangan depan.",
        "Buat pandangan samping sesuai aturan proyeksi Eropa.",
        "Tambahkan garis tersembunyi.",
        "Tambahkan garis sumbu.",
        "Tambahkan ukuran benda."
    ],

    kelebihan: [
        "Sistematis dan mudah digunakan.",
        "Menggambarkan benda secara akurat.",
        "Memudahkan proses produksi.",
        "Menampilkan benda dari beberapa arah.",
        "Cocok untuk gambar kerja teknik."
    ],

    kesimpulan: `
        Proyeksi Eropa adalah First Angle Projection atau proyeksi sudut
        pertama. Ciri utamanya adalah posisi pandangan berada berlawanan
        dengan arah pandang.
    `
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
