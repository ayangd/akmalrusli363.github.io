var quote = document.getElementById('error-quotes');

var arr = [
  "Sini Sasuke hantam kau!",
  "Sini Sasuke hantam kau bersama kawanan Uchiha!",
  "Naruto, ini kan kampus BUNIS bukan sekolah Hokage!",
  "Leh.. lagi cari situs judi? Tanyakan aja sama bang Judi..",
  "Ini bukan sabung ayam!",
  "Code Reengineering is a way to <strong>make your clean code</strong>, not making you married with code!",
  "Nyari downloadan materi? Kami gak ada file :((",
  "Nyari kode nuklir? Situs ini gak punya nomor berapapun :D",
  "CARI KE BINUSMAYA SONO!!!",
  "Aku bukan dosen, mas Naufal :D",
  "Gak ada konten gaming! Cari aja di YouTube..!",
  "Eh.. mampus..! :((",
  "Press <strong>F</strong> to pay respect..",
  ":(",
  "All you had to do was follow the pricky train, CJ!",
  "Nyari kajew?",
  "small pp",
  "\"sini saya bungkus\" -- gilang.exe",
  "lalu?",
  "<img src=\"/assets/resources/coffin-dance.gif\" alt=\"coffin dance\" width=\"auto\" height=\"100\" />",
  "UUS berkata: ...?"
];

quote.innerHTML = arr[Math.floor(Math.random() * arr.length)];
