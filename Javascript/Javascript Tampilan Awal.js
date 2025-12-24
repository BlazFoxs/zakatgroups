// Menunggu dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Efek Navbar Berubah Saat Scroll ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Saat di-scroll ke bawah: tambah shadow & kurangi padding
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            navbar.style.padding = "1rem 5%";
        } else {
            // Saat di posisi paling atas (default)
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            navbar.style.padding = "1.5rem 5%";
        }
    });

    // --- Smooth Scroll untuk Link Navigasi ---
    // Memilih semua link yang diawali dengan tanda '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah lompatan kasar default
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Simple Interaction untuk Tombol Demo ---
    const demoButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
                // Pesan simulasi agar dosen tahu tombol ini aktif
                console.log("Navigasi ke halaman fitur diklik");
            }
        });
    });

});