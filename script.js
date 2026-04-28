/* script.js - Logika Interaktif */

// Fungsi untuk menutup halaman selamat datang
function closeWelcome() {
    const welcome = document.getElementById('welcome-overlay');
    const main = document.getElementById('main-content');
    
    welcome.style.display = 'none'; // Sembunyikan overlay
    main.classList.remove('hidden'); // Munculkan konten utama
}

// Fungsi untuk berpindah halaman (sub-halaman)
function showPage(pageId) {
    // Cari semua elemen dengan class 'page-content'
    const pages = document.querySelectorAll('.page-content');
    
    // Sembunyikan semua halaman terlebih dahulu
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang memiliki ID sesuai tombol yang diklik
    document.getElementById(pageId).classList.add('active');
    
    // Scroll ke bagian paling atas secara otomatis
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
