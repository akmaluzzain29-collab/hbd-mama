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

});const heartButton =
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


let sudahDibuka = false;


/* =================================
   TOMBOL HATI
================================= */

heartButton.addEventListener(
    "click",
    function () {

        if (sudahDibuka) {
            return;
        }

        sudahDibuka = true;


        /* =========================
           MUSIK
        ========================== */

        music.volume = 0.8;

        music.play().catch(
            function () {

                console.log(
                    "Browser menunggu izin musik."
                );

            }
        );


        /* =========================
           BUKA ISI WEBSITE
        ========================== */

        mainContent.classList.add(
            "visible"
        );


        /* =========================
           HILANGKAN OPENING
        ========================== */

        opening.classList.add(
            "opened"
        );


        /* =========================
           AKTIFKAN SCROLL
        ========================== */

        document.body.style.overflowY =
            "auto";


        /* =========================
           PINDAH KE PESAN
        ========================== */

        setTimeout(
            function () {

                document
                    .querySelector(".message")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            },
            500
        );

    }
);


/* =================================
   AWAL WEBSITE
   BENAR-BENAR TIDAK BISA SCROLL
================================= */

document.body.style.overflowY =
    "hidden";


/* =================================
   FOTO → LIGHTBOX
================================= */

photoCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const image =
                    card.querySelector("img");

                lightboxImage.src =
                    image.src;

                lightbox.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =================================
   TUTUP LIGHTBOX
================================= */

closeLightbox.addEventListener(
    "click",
    function () {

        lightbox.classList.remove(
            "active"
        );

    }
);


/* Klik area luar foto */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "active"
            );

        }

    }
);


/* =================================
   ESC
================================= */

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
);const heartButton =
    document.getElementById("heartButton");

const opening =
    document.getElementById("opening");

const message =
    document.getElementById("message");

const messageBox =
    document.querySelector(".message-box");

const messageTexts =
    document.querySelectorAll(
        ".message-text p"
    );

const music =
    document.getElementById("backsound");

const photoCards =
    document.querySelectorAll(
        ".photo-card"
    );

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );


let sudahDibuka = false;


/* =================================
   ANIMASI HATI
================================= */

if (
    typeof anime !== "undefined"
) {

    anime({

        targets:
            "#heartButton",

        scale: [
            {
                value: 1,
                duration: 900
            },
            {
                value: 1.12,
                duration: 900
            }
        ],

        easing:
            "easeInOutSine",

        loop: true

    });

}


/* =================================
   KLIK HATI
================================= */

heartButton.addEventListener(
    "click",
    bukaPesan
);


/* =================================
   BUKA PESAN
================================= */

function bukaPesan() {

    if (sudahDibuka) {
        return;
    }

    sudahDibuka = true;


    /* =========================
       MUSIK
    ========================== */

    music.volume = 0;

    const playMusic =
        music.play();


    if (playMusic) {

        playMusic
            .then(function () {

                if (
                    typeof anime !==
                    "undefined"
                ) {

                    anime({

                        targets:
                            music,

                        volume: 0.8,

                        duration: 2500,

                        easing:
                            "easeInOutQuad"

                    });

                } else {

                    music.volume = 0.8;

                }

            })
            .catch(function () {

                console.log(
                    "Musik tidak dimainkan."
                );

            });

    }


    /* =========================
       HATI HILANG
    ========================== */

    if (
        typeof anime !==
        "undefined"
    ) {

        anime({

            targets:
                heartButton,

            scale: 3,

            opacity: 0,

            duration: 700,

            easing:
                "easeInBack",

            complete:
                function () {

                    heartButton.style.display =
                        "none";

                }

        });

    } else {

        heartButton.style.display =
            "none";

    }


    /* =========================
       TEKS OPENING
    ========================== */

    if (
        typeof anime !==
        "undefined"
    ) {

        anime({

            targets:
                ".opening-small, .opening h1, .click-text",

            opacity: 0,

            translateY: -30,

            duration: 500,

            easing:
                "easeInOutQuad"

        });

    }


    /* =========================
       LOVE BERGUGURAN
    ========================== */

    buatLove();


    /* =========================
       OPENING HILANG
    ========================== */

    if (
        typeof anime !==
        "undefined"
    ) {

        anime({

            targets:
                opening,

            opacity: 0,

            duration: 1800,

            delay: 600,

            easing:
                "easeInOutQuad",

            complete:
                function () {

                    opening.style.display =
                        "none";

                }

        });

    } else {

        opening.style.display =
            "none";

    }


    /* =========================
       SCROLL KE PESAN
    ========================== */

    setTimeout(
        function () {

            message.scrollIntoView({
                behavior: "smooth"
            });

        },
        900
    );


    /* =========================
       TAMPILKAN PESAN
    ========================== */

    setTimeout(
        tampilkanPesan,
        1400
    );

}


/* =================================
   ANIMASI PESAN
================================= */

function tampilkanPesan() {

    if (
        typeof anime !==
        "undefined"
    ) {

        anime({

            targets:
                messageBox,

            opacity: 1,

            translateY: 0,

            scale: 1,

            duration: 1400,

            easing:
                "easeOutExpo"

        });


        anime({

            targets:
                ".message-box .small-text",

            opacity: [0, 1],

            translateY: [20, 0],

            duration: 700,

            delay: 300,

            easing:
                "easeOutExpo"

        });


        anime({

            targets:
                ".message-box h2",

            opacity: [0, 1],

            translateY: [25, 0],

            duration: 900,

            delay: 500,

            easing:
                "easeOutExpo"

        });


        anime({

            targets:
                messageTexts,

            opacity: [0, 1],

            translateY: [25, 0],

            duration: 900,

            delay:
                anime.stagger(
                    500,
                    {
                        start: 900
                    }
                ),

            easing:
                "easeOutExpo"

        });

    } else {

        messageBox.style.opacity =
            "1";

        messageBox.style.transform =
            "none";


        messageTexts.forEach(
            function (text) {

                text.style.opacity =
                    "1";

            }
        );

    }

}


/* =================================
   LOVE BERGUGURAN
================================= */

function buatLove() {

    const container =
        document.getElementById(
            "hearts-container"
        );


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.classList.add(
            "falling-heart"
        );


        const jenisLove = [

            "❤️",
            "💗",
            "💕",
            "💖",
            "💓"

        ];


        heart.innerHTML =
            jenisLove[
                Math.floor(
                    Math.random() *
                    jenisLove.length
                )
            ];


        heart.style.left =
            Math.random() * 100 +
            "vw";


        heart.style.fontSize =
            (
                12 +
                Math.random() * 25
            ) +
            "px";


        container.appendChild(
            heart
        );


        if (
            typeof anime !==
            "undefined"
        ) {

            anime({

                targets:
                    heart,

                translateY:
                    window.innerHeight +
                    150,

                translateX:
                    (
                        Math.random() -
                        0.5
                    ) * 300,

                rotate:
                    Math.random() *
                    720 - 360,

                opacity: [
                    0,
                    0.8,
                    0.8,
                    0
                ],

                duration:
                    4000 +
                    Math.random() *
                    4000,

                delay:
                    Math.random() *
                    1800,

                easing:
                    "easeInOutQuad",

                complete:
                    function () {

                        heart.remove();

                    }

            });

        }

    }

}


/* =================================
   FOTO DIKLIK
================================= */

photoCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const image =
                    card.querySelector(
                        "img"
                    );


                lightboxImage.src =
                    image.src;


                lightbox.style.visibility =
                    "visible";


                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                if (
                    typeof anime !==
                    "undefined"
                ) {

                    anime({

                        targets:
                            lightbox,

                        opacity: [0, 1],

                        duration: 400,

                        easing:
                            "easeOutQuad"

                    });


                    anime({

                        targets:
                            lightboxImage,

                        scale: [0.8, 1],

                        opacity: [0, 1],

                        duration: 600,

                        easing:
                            "easeOutExpo"

                    });

                } else {

                    lightbox.style.opacity =
                        "1";

                }

            }
        );

    }
);


/* =================================
   TUTUP FOTO
================================= */

closeLightbox.addEventListener(
    "click",
    tutupFoto
);


lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            lightbox
        ) {

            tutupFoto();

        }

    }
);


function tutupFoto() {

    if (
        typeof anime !==
        "undefined"
    ) {

        anime({

            targets:
                lightbox,

            opacity: 0,

            duration: 300,

            easing:
                "easeInQuad",

            complete:
                function () {

                    lightbox.style.visibility =
                        "hidden";

                    lightbox.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }

        });

    } else {

        lightbox.style.opacity =
            "0";

        lightbox.style.visibility =
            "hidden";

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* =================================
   ESC UNTUK TUTUP FOTO
================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            tutupFoto();

        }

    }
);const heartButton = document.getElementById("heartButton");
const opening = document.getElementById("opening");
const message = document.getElementById("message");
const messageBox = document.querySelector(".message-box");
const messageTexts = document.querySelectorAll(".message-text p");
const music = document.getElementById("backsound");

const photoCards = document.querySelectorAll(".photo-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

let sudahDibuka = false;


/* =========================
   HATI BERDENYUT
========================= */

anime({
    targets: "#heartButton",

    scale: [
        {
            value: 1,
            duration: 900
        },
        {
            value: 1.12,
            duration: 900
        }
    ],

    easing: "easeInOutSine",

    loop: true
});


/* =========================
   KLIK HATI
========================= */

heartButton.addEventListener("click", function () {

    if (sudahDibuka) {
        return;
    }

    sudahDibuka = true;


    /* MUSIK */

    music.volume = 0;

    music.play()
        .then(function () {

            anime({
                targets: music,
                volume: 0.8,
                duration: 2500,
                easing: "easeInOutQuad"
            });

        })
        .catch(function (error) {

            console.log(
                "Musik tidak bisa dimainkan:",
                error
            );

        });


    /* HATI MEMBESAR */

    anime({
        targets: heartButton,

        scale: 3,
        opacity: 0,

        duration: 700,

        easing: "easeInBack",

        complete: function () {

            heartButton.style.display = "none";

        }
    });


    /* TEKS OPENING */

    anime({
        targets:
            ".opening-small, .opening h1, .click-text",

        opacity: 0,

        translateY: -30,

        duration: 500,

        easing: "easeInOutQuad"
    });


    /* LOVE BERGUGURAN */

    buatLove();


    /* OPENING HILANG */

    anime({
        targets: opening,

        opacity: 0,

        duration: 1800,

        delay: 600,

        easing: "easeInOutQuad",

        complete: function () {

            opening.style.display = "none";

        }
    });


    /* SCROLL KE PESAN */

    setTimeout(function () {

        message.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);


    /* PESAN MUNCUL */

    setTimeout(function () {

        anime({
            targets: messageBox,

            opacity: 1,

            translateY: 0,

            scale: 1,

            duration: 1400,

            easing: "easeOutExpo"
        });


        anime({
            targets:
                ".message-box .small-text",

            opacity: [0, 1],

            translateY: [20, 0],

            duration: 700,

            delay: 300,

            easing: "easeOutExpo"
        });


        anime({
            targets:
                ".message-box h2",

            opacity: [0, 1],

            translateY: [25, 0],

            duration: 900,

            delay: 500,

            easing: "easeOutExpo"
        });


        anime({
            targets: messageTexts,

            opacity: [0, 1],

            translateY: [25, 0],

            duration: 900,

            delay: anime.stagger(500, {
                start: 900
            }),

            easing: "easeOutExpo"
        });


    }, 1400);

});


/* =========================
   LOVE BERGUGURAN
========================= */

function buatLove() {

    const container =
        document.getElementById("hearts-container");


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "falling-heart"
        );


        const jenisLove = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "💓"
        ];


        heart.innerHTML =
            jenisLove[
                Math.floor(
                    Math.random() *
                    jenisLove.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (12 + Math.random() * 25) + "px";


        container.appendChild(heart);


        anime({

            targets: heart,

            translateY:
                window.innerHeight + 150,

            translateX:
                (Math.random() - 0.5) * 300,

            rotate:
                Math.random() * 720 - 360,

            opacity: [
                0,
                0.8,
                0.8,
                0
            ],

            duration:
                4000 +
                Math.random() * 4000,

            delay:
                Math.random() * 1800,

            easing:
                "easeInOutQuad",

            complete: function () {

                heart.remove();

            }

        });

    }

}


/* =========================
   FOTO DIKLIK
========================= */

photoCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const image =
                card.querySelector("img");


            lightboxImage.src =
                image.src;


            lightbox.style.visibility =
                "visible";


            anime({

                targets: lightbox,

                opacity: [0, 1],

                duration: 400,

                easing: "easeOutQuad"

            });


            anime({

                targets: lightboxImage,

                scale: [0.8, 1],

                opacity: [0, 1],

                duration: 600,

                easing: "easeOutExpo"

            });

        }
    );

});


/* =========================
   TUTUP FOTO
========================= */

closeLightbox.addEventListener(
    "click",
    tutupFoto
);


lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            tutupFoto();

        }

    }
);


function tutupFoto() {

    anime({

        targets: lightbox,

        opacity: 0,

        duration: 300,

        easing: "easeInQuad",

        complete: function () {

            lightbox.style.visibility =
                "hidden";

        }

    });

}


/* =========================
   ESC
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            tutupFoto();

        }

    }
);
