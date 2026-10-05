document.addEventListener("DOMContentLoaded", function () {

    const heartButton =
        document.getElementById("heartButton");

    const opening =
        document.getElementById("opening");

    const mainContent =
        document.getElementById("mainContent");

    const music =
        document.getElementById("backsound");

    const photoCards =
        document.querySelectorAll(".photo-card");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeLightbox =
        document.getElementById("closeLightbox");


    /*
    ========================================
    AWAL:
    WEBSITE BENAR-BENAR TERKUNCI
    ========================================
    */

    document.body.style.overflow = "hidden";


    /*
    ========================================
    TOMBOL HATI
    ========================================
    */

    heartButton.onclick = function () {

        console.log("HATI DIKLIK");

        /*
        Tampilkan isi
        */

        mainContent.hidden = false;


        /*
        Hilangkan halaman pembuka
        */

        opening.style.display = "none";


        /*
        Aktifkan scroll
        */

        document.body.style.overflow = "auto";


        /*
        Putar musik
        */

        music.volume = 0.8;

        music.play().catch(function () {
            console.log(
                "Musik tidak dapat autoplay."
            );
        });


        /*
        Tunggu sebentar,
        lalu pindah ke pesan
        */

        setTimeout(function () {

            document
                .querySelector(".message")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }, 100);

    };


    /*
    ========================================
    FOTO
    ========================================
    */

    photoCards.forEach(function (card) {

        card.onclick = function () {

            const image =
                card.querySelector("img");

            lightboxImage.src =
                image.src;

            lightbox.classList.add(
                "active"
            );

        };

    });


    /*
    ========================================
    TUTUP FOTO
    ========================================
    */

    closeLightbox.onclick =
        function () {

            lightbox.classList.remove(
                "active"
            );

        };


    lightbox.onclick =
        function (event) {

            if (
                event.target === lightbox
            ) {

                lightbox.classList.remove(
                    "active"
                );

            }

        };


    /*
    ========================================
    ESC
    ========================================
    */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                lightbox.classList.remove(
                    "active"
                );

            }

        }
    );

});
