document.addEventListener("DOMContentLoaded", function () {

    const heartButton = document.getElementById("heartButton");
    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("backsound");

    const photoCards = document.querySelectorAll(".photo-card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");


    /* =========================
       AWAL WEBSITE
       TIDAK BISA SCROLL
    ========================= */

    document.body.style.overflow = "hidden";


    /* =========================
       TOMBOL HATI
    ========================= */

    heartButton.onclick = function () {

        console.log("HATI DIKLIK");


        /* Tampilkan isi website */

        mainContent.hidden = false;


        /* Hilangkan opening */

        opening.style.display = "none";


        /* Aktifkan scroll */

        document.body.style.overflow = "auto";


        /* Putar musik */

        music.volume = 0.8;

        music.play().catch(function () {
            console.log("Musik tidak dapat autoplay.");
        });


        /* Pindah ke pesan */

        setTimeout(function () {

            const message =
                document.querySelector(".message");

            if (message) {

                message.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 100);

    };


    /* =========================
       FOTO → LIGHTBOX
    ========================= */

    photoCards.forEach(function (card) {

        card.onclick = function () {

            const image =
                card.querySelector("img");

            if (!image) {
                return;
            }

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        };

    });


    /* =========================
       TUTUP LIGHTBOX
    ========================= */

    closeLightbox.onclick = function () {

        lightbox.classList.remove("active");

    };


    /* Klik area luar foto */

    lightbox.onclick = function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    };


    /* =========================
       ESC
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                lightbox.classList.remove("active");

            }

        }
    );

});
