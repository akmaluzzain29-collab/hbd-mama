const heartButton =
    document.getElementById("heartButton");

const opening =
    document.getElementById("opening");

const message =
    document.getElementById("message");

const messageBox =
    document.querySelector(".message-box");

const messageTexts =
    document.querySelectorAll(".message-text p");

const music =
    document.getElementById("backsound");

const photoCards =
    document.querySelectorAll(".photo-card");

const galleryTitle =
    document.querySelector(".gallery-title");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


let sudahDibuka = false;


/* HEART ANIMATION */

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


/* CLICK HEART */

heartButton.addEventListener(
    "click",
    function () {

        if (sudahDibuka) {
            return;
        }

        sudahDibuka = true;


        /* MUSIC */

        music.volume = 0;

        music.play()
            .then(() => {

                anime({
                    targets: music,

                    volume: 0.8,

                    duration: 2500,

                    easing: "easeInOutQuad"
                });

            })
            .catch(error => {

                console.log(
                    "Musik tidak bisa dimainkan:",
                    error
                );

            });


        /* HEART */

        anime({
            targets: heartButton,

            scale: 3,

            opacity: 0,

            duration: 700,

            easing: "easeInBack",

            complete: function () {

                heartButton.style.display =
                    "none";

            }
        });


        /* OPENING TEXT */

        anime({
            targets:
                ".opening-small, .opening h1, .click-text",

            opacity: 0,

            translateY: -30,

            duration: 500,

            easing: "easeInOutQuad"
        });


        /* FALLING HEARTS */

        buatLove();


        /* HIDE OPENING */

        anime({
            targets: opening,

            opacity: 0,

            duration: 1800,

            delay: 600,

            easing: "easeInOutQuad",

            complete: function () {

                opening.style.display =
                    "none";

            }
        });


        /* SCROLL */

        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth"
            });

        }, 900);


        /* MESSAGE */

        setTimeout(() => {

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

                delay: anime.stagger(
                    500,
                    {
                        start: 900
                    }
                ),

                easing: "easeOutExpo"
            });


            /* GALLERY */

            setTimeout(() => {

                anime({
                    targets: galleryTitle,

                    opacity: [0, 1],

                    translateY: [40, 0],

                    duration: 1000,

                    easing: "easeOutExpo"
                });


                anime({
                    targets: photoCards,

                    opacity: [0, 1],

                    translateY: [50, 0],

                    scale: [0.95, 1],

                    duration: 1000,

                    delay: anime.stagger(180),

                    easing: "easeOutExpo"
                });

            }, 2800);

        }, 1400);

    }
);


/* FALLING HEARTS */

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
            (
                12 +
                Math.random() * 25
            ) + "px";


        container.appendChild(
            heart
        );


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


/* PHOTO CLICK */

photoCards.forEach(
    card => {

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

                    easing:
                        "easeOutQuad"

                });


                anime({

                    targets: lightboxImage,

                    scale: [0.8, 1],

                    opacity: [0, 1],

                    duration: 600,

                    easing:
                        "easeOutExpo"

                });

            }
        );

    }
);


/* CLOSE PHOTO */

closeLightbox.addEventListener(
    "click",
    tutupFoto
);


lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

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


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            tutupFoto();

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

const galleryTitle =
    document.querySelector(
        ".gallery-title"
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


/* ========================= */
/* ANIMASI HATI */
/* ========================= */

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

    easing:
        "easeInOutSine",

    loop: true

});


/* ========================= */
/* KLIK HATI */
/* ========================= */

heartButton.addEventListener(
    "click",
    function () {

        if (sudahDibuka) {
            return;
        }

        sudahDibuka = true;


        /* ========================= */
        /* MUSIK */
        /* ========================= */

        music.volume = 0;

        music.play()
            .then(() => {

                anime({

                    targets: music,

                    volume: 0.8,

                    duration: 2500,

                    easing:
                        "easeInOutQuad"

                });

            })
            .catch(error => {

                console.log(
                    "Musik tidak bisa dimainkan:",
                    error
                );

            });


        /* ========================= */
        /* HATI MEMBESAR */
        /* ========================= */

        anime({

            targets:
                heartButton,

            scale: 3,

            opacity: 0,

            duration: 700,

            easing:
                "easeInBack",

            complete: function () {

                heartButton.style.display =
                    "none";

            }

        });


        /* ========================= */
        /* TEKS OPENING HILANG */
        /* ========================= */

        anime({

            targets:
                ".opening-small, .opening h1, .click-text",

            opacity: 0,

            translateY: -30,

            duration: 500,

            easing:
                "easeInOutQuad"

        });


        /* ========================= */
        /* LOVE JATUH */
        /* ========================= */

        buatLove();


        /* ========================= */
        /* OPENING HILANG */
        /* ========================= */

        anime({

            targets:
                opening,

            opacity: 0,

            duration: 1800,

            delay: 600,

            easing:
                "easeInOutQuad",

            complete: function () {

                opening.style.display =
                    "none";

            }

        });


        /* ========================= */
        /* SCROLL KE PESAN */
        /* ========================= */

        setTimeout(() => {

            message.scrollIntoView({
                behavior:
                    "smooth"
            });

        }, 900);


        /* ========================= */
        /* PESAN MUNCUL */
        /* ========================= */

        setTimeout(() => {

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


            /* ========================= */
            /* GALERI MUNCUL */
            /* ========================= */

            setTimeout(() => {

                anime({

                    targets:
                        galleryTitle,

                    opacity: [0, 1],

                    translateY: [40, 0],

                    duration: 1000,

                    easing:
                        "easeOutExpo"

                });


                anime({

                    targets:
                        photoCards,

                    opacity: [0, 1],

                    translateY: [50, 0],

                    scale: [0.95, 1],

                    duration: 1000,

                    delay:
                        anime.stagger(180),

                    easing:
                        "easeOutExpo"

                });

            }, 2800);

        }, 1400);

    }
);


/* ========================= */
/* LOVE BERGUGURAN */
/* ========================= */

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
            Math.random() *
            100 +
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
                720 -
                360,

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


/* ========================= */
/* FOTO DIKLIK */
/* ========================= */

photoCards.forEach(
    card => {

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

            }
        );

    }
);


/* ========================= */
/* TUTUP FOTO */
/* ========================= */

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

            }

    });

}


/* ========================= */
/* ESC */
/* ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
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

let sudahDibuka = false;


/* ========================= */
/* ANIMASI HATI AWAL */
/* ========================= */

anime({
    targets: "#heartButton",

    scale: [
        { value: 1, duration: 900 },
        { value: 1.12, duration: 900 }
    ],

    easing: "easeInOutSine",

    loop: true
});


/* ========================= */
/* KLIK HATI */
/* ========================= */

heartButton.addEventListener("click", function () {

    if (sudahDibuka) {
        return;
    }

    sudahDibuka = true;


    /* ========================= */
    /* MUSIK MULAI */
    /* ========================= */

    music.volume = 0;

    music.play()
        .then(() => {

            anime({
                targets: music,

                volume: 0.8,

                duration: 2500,

                easing: "easeInOutQuad"
            });

        })
        .catch(error => {

            console.log("Musik tidak bisa dimainkan:", error);

        });


    /* ========================= */
    /* HATI MEMBESAR */
    /* ========================= */

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


    /* ========================= */
    /* TEKS PEMBUKA HILANG */
    /* ========================= */

    anime({
        targets: ".opening-small, .opening h1, .click-text",

        opacity: 0,

        translateY: -30,

        duration: 500,

        easing: "easeInOutQuad"
    });


    /* ========================= */
    /* LOVE BERGUGURAN */
    /* ========================= */

    buatLove();


    /* ========================= */
    /* OPENING FADE */
    /* ========================= */

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


    /* ========================= */
    /* SCROLL KE PESAN */
    /* ========================= */

    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);


    /* ========================= */
    /* PESAN MUNCUL */
    /* ========================= */

    setTimeout(() => {

        anime({
            targets: messageBox,

            opacity: 1,

            translateY: 0,

            scale: 1,

            duration: 1400,

            easing: "easeOutExpo"
        });


        anime({
            targets: ".message-box .small-text",

            opacity: [0, 1],

            translateY: [20, 0],

            duration: 700,

            delay: 300,

            easing: "easeOutExpo"
        });


        anime({
            targets: ".message-box h2",

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


/* ========================= */
/* LOVE BERGUGURAN */
/* ========================= */

function buatLove() {

    const container =
        document.getElementById("hearts-container");


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("falling-heart");


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
                    Math.random() * jenisLove.length
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
                4000 + Math.random() * 4000,

            delay:
                Math.random() * 1800,

            easing: "easeInOutQuad",

            complete: function () {

                heart.remove();

            }

        });

    }

}
