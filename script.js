document.addEventListener("DOMContentLoaded", function () {

    // MENU RESPONSIVE (TOGGLE NAVBAR)
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });


    // ANIMASI SMOOTH SCROLL (Langkah 5 & 7)
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Tutup menu mobile setelah klik link
            navMenu.classList.remove("active");

            // Scroll ke section tujuan dengan halus 
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Penyesuaian tinggi navbar
                behavior: "smooth"
            });
        });
    });


    // VALIDASI FORM & POP-UP ALERT (Langkah 8 & 9)
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman

        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        // Validasi Nama
        if (name.value.trim() === "") {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("nameError").style.display = "none";
        }

        // Validasi Email Sederhana
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        // Validasi Pesan
        if (message.value.trim() === "") {
            document.getElementById("messageError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("messageError").style.display = "none";
        }

        // Jika semua valid, tampilkan alert sukses (Langkah 9)
        if (isValid) {
            alert("Pesan Anda Berhasil Dikirim");
            contactForm.reset(); // Reset form setelah terkirim
        }
    });


    // GALERI LIGHTBOX MODAL (Langkah 10)
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const closeModal = document.querySelector(".close-modal");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            const img = this.querySelector("img");
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalCaption.innerHTML = img.alt;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Menutup modal jika klik di luar gambar
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });


    // FITUR SCROLL TO TOP (Langkah 11)
    const scrollTopBtn = document.getElementById("scrollToTop");

    window.onscroll = function () {
        // Munculkan tombol jika menggulir ke bawah lebih dari 300px
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});