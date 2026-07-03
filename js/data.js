/* ============================================================
   CENTRAL DATA — projects & experience
   Edit this file to update content across the whole site.
   ============================================================ */

const SITE_DATA = {

  projects: [
    {
      id: "ecommerce",
      index: "PRJ.01",
      image: "images/ecommerceweb.jpg",
      skills: ["HTML", "CSS", "PHP", "Laragon", "API"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Website E-Commerce", en: "E-Commerce Website" },
      summary: {
        id: "Toko online modern dengan filter produk, keranjang belanja, dan sistem pembayaran.",
        en: "Modern online store with product filtering, cart, and payment system."
      },
      overview: {
        id: "Website e-commerce ini dibangun untuk mensimulasikan pengalaman belanja online yang lengkap, mulai dari katalog produk, filter berdasarkan kategori dan harga, hingga proses checkout. Backend menggunakan PHP dengan database MySQL melalui Laragon sebagai environment lokal.",
        en: "This e-commerce site was built to simulate a full online shopping experience — from a product catalog and category/price filtering to checkout. The backend uses PHP with a MySQL database, run locally through Laragon."
      },
      role: {
        id: "Full-stack — merancang UI, struktur database, dan alur checkout.",
        en: "Full-stack — designed the UI, database structure, and checkout flow."
      },
      challenges: {
        id: [
          "Mengelola state keranjang belanja tanpa framework JS modern.",
          "Menyusun struktur database relasional untuk produk, kategori, dan transaksi.",
          "Mengintegrasikan API pembayaran sederhana."
        ],
        en: [
          "Managing cart state without a modern JS framework.",
          "Designing a relational database structure for products, categories, and transactions.",
          "Integrating a simple payment API."
        ]
      },
      gallery: ["images/ecommerceweb.jpg"]
    },
    {
      id: "portfolio",
      index: "PRJ.02",
      image: "images/webportfolio.jpg",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Website Portofolio", en: "Portfolio Website" },
      summary: {
        id: "Portofolio pribadi untuk menampilkan hasil desain dan proyek koding.",
        en: "Personal portfolio to showcase design and coding projects."
      },
      overview: {
        id: "Website portofolio yang dibangun untuk merangkum pengalaman, proyek, dan skill secara ringkas dan profesional. Fokus pada tampilan yang bersih, responsif, dan mudah dinavigasi.",
        en: "A portfolio site built to summarize experience, projects, and skills in a clean, professional way — with a focus on responsiveness and easy navigation."
      },
      role: {
        id: "Solo — desain UI, layout responsif, dan animasi interaksi.",
        en: "Solo — UI design, responsive layout, and interaction animation."
      },
      challenges: {
        id: [
          "Menyusun grid layout yang konsisten di berbagai ukuran layar.",
          "Membuat animasi scroll-reveal yang ringan dan halus."
        ],
        en: [
          "Building a consistent grid layout across screen sizes.",
          "Creating a lightweight, smooth scroll-reveal animation."
        ]
      },
      gallery: ["images/webportfolio.jpg"]
    },
    {
      id: "workprogram",
      index: "PRJ.03",
      image: "images/webaas.jpg",
      skills: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://himsika.unsika.ac.id/en/aashimsika/",
      repoUrl: "",
      title: { id: "Website Program Kerja Organisasi", en: "Organization Work Program Website" },
      summary: {
        id: "Website untuk menampilkan program kerja organisasi secara real-time.",
        en: "Website for tracking and presenting a student organization's work programs in real time." 
      },
      overview: {
        id: "Dibangun untuk himpunan mahasiswa (HIMSIKA) guna mendokumentasikan dan menampilkan seluruh program kerja divisi secara terstruktur dan mudah diakses publik.",
        en: "Built for the HIMSIKA student association to document and present each division's work programs in a structured, publicly accessible way."
      },
      role: {
        id: "Frontend developer dalam tim organisasi kampus.",
        en: "Frontend developer within a campus organization team."
      },
      challenges: {
        id: [
          "Menyesuaikan struktur konten dengan kebutuhan banyak divisi.",
          "Memastikan tampilan tetap rapi meski konten terus bertambah."
        ],
        en: [
          "Adapting the content structure to serve many divisions.",
          "Keeping the layout tidy as content kept growing."
        ]
      },
      gallery: ["images/webaas.jpg"]
    },
    {
      id: "agrisure",
      index: "PRJ.04",
      image: "images/agrisure.jpg",
      skills: ["Figma"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Prototipe Agrisure — Tim", en: "Agrisure Prototype — Team" },
      summary: {
        id: "Landing page asuransi pertanian dengan fitur berbasis IoT.",
        en: "Agricultural insurance landing page with IoT features."
      },
      overview: {
        id: "Proyek desain tim untuk konsep produk asuransi pertanian yang memanfaatkan data sensor IoT untuk menilai risiko gagal panen secara otomatis.",
        en: "A team design project for an agricultural insurance product concept that uses IoT sensor data to automatically assess crop-failure risk."
      },
      role: {
        id: "UI/UX designer — wireframe, mockup, dan prototyping di Figma.",
        en: "UI/UX designer — wireframing, mockups, and prototyping in Figma."
      },
      challenges: {
        id: [
          "Menerjemahkan data teknis IoT menjadi visual yang mudah dipahami petani.",
          "Menjaga konsistensi desain antar anggota tim."
        ],
        en: [
          "Translating technical IoT data into visuals farmers can easily understand.",
          "Keeping the design consistent across team members."
        ]
      },
      gallery: ["images/agrisure.jpg"]
    },
    {
      id: "keepzone",
      index: "PRJ.05",
      image: "images/keepzone.jpg",
      skills: ["HTML", "CSS", "Figma"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Keep Zone Business — Tim", en: "Keep Zone Business — Team" },
      summary: {
        id: "Platform online untuk membantu pelanggan mengelola barang dagangan.",
        en: "An online platform with tools that help customers manage their merchandise."
      },
      overview: {
        id: "Platform yang dirancang untuk membantu pemilik bisnis kecil mengelola stok dan katalog barang dagangan mereka secara digital.",
        en: "A platform designed to help small business owners manage their stock and merchandise catalog digitally."
      },
      role: {
        id: "Frontend developer & desainer UI dalam tim kecil.",
        en: "Frontend developer & UI designer within a small team."
      },
      challenges: {
        id: [
          "Merancang alur manajemen barang yang sederhana untuk pengguna non-teknis.",
          "Menyesuaikan desain Figma menjadi kode HTML/CSS yang presisi."
        ],
        en: [
          "Designing a simple merchandise-management flow for non-technical users.",
          "Translating the Figma design into precise HTML/CSS."
        ]
      },
      gallery: ["images/keepzone.jpg"]
    },
    {
      id: "absensi",
      index: "PRJ.06",
      image: "images/absensiweb.jpg",
      skills: ["HTML", "CSS", "JS", "PHP"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Website Absensi", en: "Attendance Website" },
      summary: {
        id: "Website untuk mengisi daftar hadir yang terhubung ke database phpMyAdmin.",
        en: "Web-based attendance form connected to a phpMyAdmin database."
      },
      overview: {
        id: "Sistem absensi berbasis web sederhana yang mencatat kehadiran pengguna dan menyimpannya langsung ke database melalui phpMyAdmin.",
        en: "A simple web-based attendance system that records user check-ins and stores them directly in a database via phpMyAdmin."
      },
      role: {
        id: "Full-stack — form input, validasi, dan koneksi database.",
        en: "Full-stack — input form, validation, and database connection."
      },
      challenges: {
        id: [
          "Mencegah entri absensi ganda dalam satu hari.",
          "Menyusun query database yang efisien untuk laporan kehadiran."
        ],
        en: [
          "Preventing duplicate attendance entries on the same day.",
          "Writing efficient database queries for attendance reports."
        ]
      },
      gallery: ["images/absensiweb.jpg"]
    },
    {
      id: "registration",
      index: "PRJ.07",
      image: "images/regis.jpg",
      skills: ["HTML", "CSS", "JS"],
      demoUrl: "",
      repoUrl: "",
      title: { id: "Website Form Registrasi", en: "Registration Form Website" },
      summary: {
        id: "Form registrasi perusahaan sederhana dengan data yang bisa terhubung ke spreadsheet atau Microsoft Teams.",
        en: "Simple company registration form with data linked to a spreadsheet or Microsoft Teams."
      },
      overview: {
        id: "Formulir registrasi berbasis web yang dirancang agar mudah diintegrasikan dengan Google Sheets atau Microsoft Teams untuk pencatatan otomatis.",
        en: "A web-based registration form designed to integrate easily with Google Sheets or Microsoft Teams for automatic record-keeping."
      },
      role: {
        id: "Frontend developer — validasi form dan integrasi data.",
        en: "Frontend developer — form validation and data integration."
      },
      challenges: {
        id: [
          "Validasi input di sisi klien sebelum data dikirim.",
          "Menghubungkan form ke layanan spreadsheet eksternal."
        ],
        en: [
          "Client-side input validation before submission.",
          "Connecting the form to an external spreadsheet service."
        ]
      },
      gallery: ["images/regis.jpg"]
    }
  ],

  education: [
    {
      year: "2020 — 2023",
      logo: "fa-solid fa-school",
      title: { id: "SMA — IPA", en: "Senior High School — Science" },
      institution: { id: "SMA Negeri, Bekasi", en: "State Senior High School, Bekasi" },
      desc: { id: "Fokus pada matematika & fisika, dasar berpikir logis dan analitis.", en: "Focused on math & physics — the foundation for logical, analytical thinking." }
    },
    {
      year: "2023 — Sekarang",
      logo: "fa-solid fa-graduation-cap",
      title: { id: "S1 Sistem Informasi", en: "B.Sc. Information Systems" },
      institution: { id: "Universitas Singaperbangsa Karawang", en: "Universitas Singaperbangsa Karawang" },
      desc: { id: "Semester 4 — pemrograman web, basis data, dan analisis sistem.", en: "Semester 4 — web programming, databases, and systems analysis." }
    },
    {
      year: "2024",
      logo: "fa-solid fa-people-group",
      title: { id: "Organisasi Kemahasiswaan", en: "Student Organization" },
      institution: { id: "HIMSIKA — Himpunan Mahasiswa Sistem Informasi", en: "HIMSIKA — Information Systems Student Association" },
      desc: { id: "Aktif di HIMSIKA, terlibat dalam proyek tim lintas divisi.", en: "Active in HIMSIKA, involved in cross-division team projects." }
    },
    {
      year: "2024 — Sekarang",
      logo: "fa-solid fa-laptop-code",
      title: { id: "Belajar Mandiri", en: "Self-Directed Learning" },
      institution: { id: "Proyek & studi independen", en: "Independent projects & study" },
      desc: { id: "Memperdalam UI/UX, JavaScript modern, dan praktik pengembangan web melalui proyek nyata.", en: "Deepening UI/UX, modern JavaScript, and web development practice through real projects." }
    }
  ],

  skills: {
    languages: [
      { name: "HTML", percentage: 90, note: { id: "Struktur halaman semantik & aksesibel, terbiasa dengan markup modern.", en: "Semantic, accessible page structure — comfortable with modern markup." } },
      { name: "CSS", percentage: 85, note: { id: "Flexbox, grid, animasi, dan responsive design jadi kebiasaan sehari-hari.", en: "Flexbox, grid, animation and responsive design are daily habits." } },
      { name: "JavaScript", percentage: 75, note: { id: "DOM manipulation, event handling, dan integrasi API dasar.", en: "DOM manipulation, event handling, and basic API integration." } },
      { name: "PHP", percentage: 65, note: { id: "Backend sederhana, koneksi database, dan validasi form.", en: "Simple backends, database connections, and form validation." } },
      { name: "Java", percentage: 55, note: { id: "Dasar OOP dari perkuliahan, digunakan untuk tugas struktur data.", en: "OOP fundamentals from coursework, used for data-structure assignments." } },
      { name: "C", percentage: 50, note: { id: "Fondasi algoritma & pemrograman prosedural dari semester awal.", en: "Algorithm foundations & procedural programming from early semesters." } }
    ],
    tools: [
      { name: "Figma", percentage: 80, note: { id: "Wireframe, mockup, dan prototyping untuk proyek tim.", en: "Wireframing, mockups, and prototyping for team projects." } },
      { name: "Git & GitHub", percentage: 70, note: { id: "Version control dasar, branching, dan kolaborasi repo.", en: "Basic version control, branching, and repo collaboration." } },
      { name: "Laragon", percentage: 75, note: { id: "Local development environment untuk proyek PHP & MySQL.", en: "Local development environment for PHP & MySQL projects." } },
      { name: "MySQL", percentage: 68, note: { id: "Desain skema relasional dan query dasar hingga menengah.", en: "Relational schema design and basic-to-intermediate queries." } },
      { name: "phpMyAdmin", percentage: 70, note: { id: "Administrasi database untuk proyek berbasis PHP.", en: "Database administration for PHP-based projects." } },
      { name: "Bootstrap", percentage: 72, note: { id: "Membangun layout responsif dengan cepat menggunakan komponen siap pakai.", en: "Building responsive layouts quickly with ready-made components." } }
    ],
    services: [
      { name: "Web Development", percentage: 85, note: { id: "Fokus utama — membangun website dari konsep hingga deploy.", en: "Main focus — building websites from concept to deployment." } },
      { name: "UI/UX Design", percentage: 65, note: { id: "Merancang alur pengguna dan antarmuka yang intuitif.", en: "Designing user flows and intuitive interfaces." } },
      { name: "IT Consulting", percentage: 50, note: { id: "Memberi masukan teknis untuk proyek skala kecil-menengah.", en: "Providing technical input for small-to-mid scale projects." } },
      { name: "Digital Marketing", percentage: 40, note: { id: "Pemahaman dasar strategi konten dan kampanye digital.", en: "Basic understanding of content strategy and digital campaigns." } }
    ]
  },

  experience: [
    {
      id: "exp1",
      period: { id: "2024 — Sekarang", en: "2024 — Present" },
      title: { id: "Frontend Developer Freelance", en: "Freelance Frontend Developer" },
      org: { id: "Mandiri / Klien Lepas", en: "Independent / Freelance Clients" },
      percentage: 85,
      percentLabel: { id: "Penguasaan pengembangan frontend", en: "Frontend development proficiency" },
      description: {
        id: "Mengerjakan berbagai proyek website untuk klien lepas dan organisasi, mulai dari landing page hingga sistem sederhana berbasis PHP.",
        en: "Worked on various websites for freelance clients and organizations, from landing pages to simple PHP-based systems."
      },
      details: {
        id: [
          "Membangun 7+ website dengan HTML, CSS, JavaScript, dan PHP.",
          "Bekerja sama dengan tim desain untuk menerjemahkan mockup Figma menjadi kode.",
          "Mengelola database sederhana menggunakan phpMyAdmin/MySQL."
        ],
        en: [
          "Built 7+ websites with HTML, CSS, JavaScript, and PHP.",
          "Collaborated with design teams to translate Figma mockups into code.",
          "Managed simple databases using phpMyAdmin/MySQL."
        ]
      }
    },
    {
      id: "exp2",
      period: { id: "2023 — Sekarang", en: "2023 — Present" },
      title: { id: "Mahasiswa Sistem Informasi", en: "Information Systems Student" },
      org: { id: "Universitas Singaperbangsa Karawang", en: "Universitas Singaperbangsa Karawang" },
      percentage: 70,
      percentLabel: { id: "Progres studi (semester 4 dari 8)", en: "Study progress (semester 4 of 8)" },
      description: {
        id: "Menempuh pendidikan Sistem Informasi dengan fokus pada pengembangan web, basis data, dan analisis sistem.",
        en: "Pursuing a degree in Information Systems, focused on web development, databases, and systems analysis."
      },
      details: {
        id: [
          "Mempelajari pemrograman web, basis data, dan rekayasa perangkat lunak.",
          "Aktif dalam organisasi kemahasiswaan (HIMSIKA).",
          "Terlibat dalam proyek tim lintas divisi."
        ],
        en: [
          "Studying web programming, databases, and software engineering.",
          "Active in the student association (HIMSIKA).",
          "Involved in cross-division team projects."
        ]
      }
    },
    {
      id: "exp3",
      period: { id: "2024", en: "2024" },
      title: { id: "UI/UX Contributor — Agrisure", en: "UI/UX Contributor — Agrisure" },
      org: { id: "Proyek Tim", en: "Team Project" },
      percentage: 60,
      percentLabel: { id: "Kontribusi desain UI/UX", en: "UI/UX design contribution" },
      description: {
        id: "Berkontribusi dalam desain antarmuka untuk prototipe produk asuransi pertanian berbasis IoT.",
        en: "Contributed to interface design for an IoT-based agricultural insurance product prototype."
      },
      details: {
        id: [
          "Merancang wireframe dan mockup di Figma.",
          "Melakukan riset singkat kebutuhan pengguna (petani).",
          "Menyusun alur pengguna (user flow) untuk fitur klaim."
        ],
        en: [
          "Designed wireframes and mockups in Figma.",
          "Conducted brief user research (farmers).",
          "Mapped out the user flow for the claims feature."
        ]
      }
    },
    {
      id: "exp4",
      period: { id: "2022 — Sekarang", en: "2022 — Present" },
      title: { id: "Trader Mandiri", en: "Independent Trader" },
      org: { id: "Personal", en: "Personal" },
      percentage: 55,
      percentLabel: { id: "Disiplin & manajemen risiko", en: "Discipline & risk management" },
      description: {
        id: "Melakukan trading di pasar finansial secara mandiri — melatih pola pikir analitis, disiplin, dan pengambilan keputusan yang terstruktur.",
        en: "Trades financial markets independently — building analytical thinking, discipline, and structured decision-making."
      },
      details: {
        id: [
          "Menerapkan manajemen risiko pada setiap posisi.",
          "Menganalisis data dan tren pasar secara rutin.",
          "Mentransfer kedisiplinan ini ke cara kerja dalam pengembangan software."
        ],
        en: [
          "Applies risk management to every position.",
          "Regularly analyzes market data and trends.",
          "Carries this discipline into how software gets built."
        ]
      }
    }
  ]
};