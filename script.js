document.addEventListener("DOMContentLoaded", function () {

    const countdown = document.getElementById("countdown");
    const celebration = document.getElementById("celebration");

    const birthdayText = document.getElementById("birthdayText");

    const wordHappy = document.getElementById("wordHappy");
    const wordBirthday = document.getElementById("wordBirthday");
    const wordTo = document.getElementById("wordTo");
    const wordMama = document.getElementById("wordMama");

    const envelopeArea = document.getElementById("envelopeArea");
    const heartButton = document.getElementById("heartButton");

    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");

    const music = document.getElementById("backsound");

    const photoCards = document.querySelectorAll(".photo-card");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");


    /* =====================================================
       LOCK SCROLL
    ===================================================== */

    document.body.style.overflow = "hidden";


    /* =====================================================
       FALLING EMOJIS
    ===================================================== */

    let celebrationStarted = false;

    function createCelebration() {

        if (celebrationStarted) return;

        celebrationStarted = true;

        const emojis = [
            "🎂",
            "❤️",
            "💕",
            "💖",
            "💗",
            "🎁",
            "🎈",
            "✨",
            "🎉",
            "🥳",
            "💝"
        ];

        /*
            Bikin banyak emoji supaya hujan
            terasa terus berlangsung.
        */

        for (let i = 0; i < 45; i++) {

            const emoji = document.createElement("div");

            emoji.className = "falling-emoji";

            emoji.textContent =
                emojis[
                    Math.floor(
                        Math.random() * emojis.length
                    )
                ];

            emoji.style.left =
                Math.random() * 100 + "%";

            emoji.style.animationDuration =
                (
                    4 +
                    Math.random() * 5
                ) + "s";

            emoji.style.animationDelay =
                (
                    Math.random() * 5
                ) + "s";

            celebration.appendChild(emoji);
        }

        celebration.classList.add("active");
    }


    /* =====================================================
       BIRTHDAY WORD ANIMATION
    ===================================================== */

    function showWord(word, duration) {

        return new Promise(function (resolve) {

            word.classList.remove("hide");

            word.classList.add("show");

            setTimeout(function () {

                word.classList.remove("show");

                word.classList.add("hide");

                setTimeout(function () {

                    word.classList.remove("hide");

                    resolve();

                }, 800);

            }, duration);

        });

    }


    /* =====================================================
       BIRTHDAY SEQUENCE
    ===================================================== */

    async function startBirthdaySequence() {

        await showWord(
            wordHappy,
            1800
        );

        await showWord(
            wordBirthday,
            1800
        );

        await showWord(
            wordTo,
            1600
        );

        await showWord(
            wordMama,
            2200
        );


        /*
            Setelah Mama selesai,
            tunggu sebentar lalu tampilkan amplop.
        */

        setTimeout(function () {

            birthdayText.style.opacity = "0";

            birthdayText.style.visibility = "hidden";

            envelopeArea.classList.add("show");

        }, 1000);

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    let number = 3;

    const countdownTimer = setInterval(function () {

        countdown.classList.add("hide");

        setTimeout(function () {

            number--;

            if (number > 0) {

                countdown.textContent = number;

                countdown.classList.remove("hide");

            } else {

                clearInterval(countdownTimer);

                countdown.style.display = "none";


                /*
                    MULAI HUJAN EMOJI
                */

                createCelebration();


                birthdayText.style.opacity = "1";

                birthdayText.style.visibility = "visible";


                /*
                    MULAI:
                    Happy
                    Birthday
                    To
                    Mama
                */

                startBirthdaySequence();

            }

        }, 450);

    }, 1000);


    /* =====================================================
       HEART BUTTON
    ===================================================== */

    heartButton.addEventListener("click", function () {

        console.log(
            "❤️ LOVE BUTTON BERHASIL DIKLIK"
        );


        /*
            Tampilkan isi utama
        */

        mainContent.hidden = false;


        /*
            Hilangkan intro
        */

        intro.style.display = "none";


        /*
            Aktifkan scroll
        */

        document.body.style.overflow = "auto";


        /*
            Jalankan musik
        */

        music.volume = 0.8;

        music.play().catch(function () {

            console.log(
                "Browser memblokir autoplay."
            );

        });


        /*
            Scroll ke pesan
        */

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

    });


    /* =====================================================
       PHOTO LIGHTBOX
    ===================================================== */

    photoCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const image =
                card.querySelector("img");

            if (!image) return;

            lightboxImage.src =
                image.src;

            lightbox.classList.add("active");

        });

    });


    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

    closeLightbox.addEventListener(
        "click",
        function () {

            lightbox.classList.remove(
                "active"
            );

        }
    );


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


    /* =====================================================
       ESC KEY
    ===================================================== */

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

});document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ==================================================
           ELEMENT
        ================================================== */

        const countdown =
            document.getElementById("countdown");

        const celebration =
            document.getElementById("celebration");

        const birthdayText =
            document.getElementById("birthdayText");

        const wordHappy =
            document.getElementById("wordHappy");

        const wordBirthday =
            document.getElementById("wordBirthday");

        const wordTo =
            document.getElementById("wordTo");

        const wordMama =
            document.getElementById("wordMama");

        const envelopeArea =
            document.getElementById("envelopeArea");

        const heartButton =
            document.getElementById("heartButton");

        const intro =
            document.getElementById("intro");

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


        /* ==================================================
           AWAL
        ================================================== */

        document.body.style.overflow =
            "hidden";


        /* ==================================================
           EMOJI JATUH
        ================================================== */

        function createCelebration() {

            const emojis = [
                "🎂",
                "❤️",
                "💕",
                "💖",
                "🎂",
                "💗",
                "❤️",
                "🎂"
            ];


            for (
                let i = 0;
                i < 28;
                i++
            ) {

                const emoji =
                    document.createElement(
                        "div"
                    );


                emoji.className =
                    "falling-emoji";


                emoji.textContent =
                    emojis[
                        Math.floor(
                            Math.random()
                            * emojis.length
                        )
                    ];


                emoji.style.left =
                    Math.random() * 100 + "%";


                emoji.style.animationDuration =
                    (
                        3 +
                        Math.random() * 4
                    ) + "s";


                emoji.style.animationDelay =
                    (
                        Math.random() * 2
                    ) + "s";


                celebration.appendChild(
                    emoji
                );

            }


            celebration.classList.add(
                "active"
            );

        }


        /* ==================================================
           FUNGSI ANIMASI KATA
        ================================================== */

        function showWord(
            word,
            duration
        ) {

            return new Promise(
                function (resolve) {

                    word.classList.add(
                        "show"
                    );


                    setTimeout(
                        function () {

                            word.classList.remove(
                                "show"
                            );

                            word.classList.add(
                                "hide"
                            );


                            setTimeout(
                                function () {

                                    word.classList.remove(
                                        "hide"
                                    );

                                    resolve();

                                },
                                1000
                            );

                        },
                        duration
                    );

                }
            );

        }


        /* ==================================================
           COUNTDOWN
        ================================================== */

        let number = 3;


        const countdownTimer =
            setInterval(
                function () {


                    countdown.classList.add(
                        "hide"
                    );


                    setTimeout(
                        function () {


                            number--;


                            if (
                                number > 0
                            ) {

                                countdown.textContent =
                                    number;


                                countdown.classList.remove(
                                    "hide"
                                );

                            }

                            else {

                                clearInterval(
                                    countdownTimer
                                );


                                countdown.style.display =
                                    "none";


                                /* ==========================
                                   MULAI HUJAN EMOJI
                                ========================== */

                                createCelebration();


                                /* ==========================
                                   MULAI UCAPAN
                                ========================== */

                                birthdayText.style.opacity =
                                    "1";

                                birthdayText.style.visibility =
                                    "visible";


                                startBirthdaySequence();

                            }

                        },
                        450
                    );


                },
                1000
            );


        /* ==================================================
           URUTAN:

           HAPPY
           ↓
           BIRTHDAY
           ↓
           TO
           ↓
           MAMA
        ================================================== */

        async function startBirthdaySequence() {


            /* HAPPY */

            await showWord(
                wordHappy,
                1800
            );


            /* BIRTHDAY */

            await showWord(
                wordBirthday,
                1800
            );


            /* TO */

            await showWord(
                wordTo,
                1600
            );


            /* MAMA */

            await showWord(
                wordMama,
                2200
            );


            /* ==========================
               TUNGGU SEBENTAR
            ========================== */

            setTimeout(
                function () {


                    birthdayText.style.opacity =
                        "0";

                    birthdayText.style.visibility =
                        "hidden";


                    /* ==========================
                       MUNCULKAN AMPLOP
                    ========================== */

                    envelopeArea.classList.add(
                        "show"
                    );


                },
                900
            );

        }


        /* ==================================================
           KLIK LOVE DI AMPLOP
        ================================================== */

        heartButton.onclick =
            function () {


                console.log(
                    "LOVE DI AMPLOP DIKLIK"
                );


                /* ==========================
                   TAMPILKAN ISI
                ========================== */

                mainContent.hidden =
                    false;


                /* ==========================
                   HILANGKAN INTRO
                ========================== */

                intro.style.display =
                    "none";


                /* ==========================
                   AKTIFKAN SCROLL
                ========================== */

                document.body.style.overflow =
                    "auto";


                /* ==========================
                   MUSIK
                ========================== */

                music.volume =
                    0.8;


                music.play().catch(
                    function () {

                        console.log(
                            "Browser tidak mengizinkan autoplay."
                        );

                    }
                );


                /* ==========================
                   LANGSUNG KE PESAN
                ========================== */

                setTimeout(
                    function () {

                        const message =
                            document.querySelector(
                                ".message"
                            );


                        if (message) {

                            message.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    },
                    100
                );

            };


        /* ==================================================
           FOTO → LIGHTBOX
        ================================================== */

        photoCards.forEach(
            function (card) {


                card.onclick =
                    function () {


                        const image =
                            card.querySelector(
                                "img"
                            );


                        if (!image) {
                            return;
                        }


                        lightboxImage.src =
                            image.src;


                        lightbox.classList.add(
                            "active"
                        );

                    };

            }
        );


        /* ==================================================
           TUTUP LIGHTBOX
        ================================================== */

        closeLightbox.onclick =
            function () {

                lightbox.classList.remove(
                    "active"
                );

            };


        lightbox.onclick =
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    lightbox.classList.remove(
                        "active"
                    );

                }

            };


        /* ==================================================
           ESC
        ================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    lightbox.classList.remove(
                        "active"
                    );

                }

            }
        );


    }
);document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ==================================================
           ELEMENT
        ================================================== */

        const countdown =
            document.getElementById("countdown");

        const celebration =
            document.getElementById("celebration");

        const birthdayText =
            document.getElementById("birthdayText");

        const wordHappy =
            document.getElementById("wordHappy");

        const wordBirthday =
            document.getElementById("wordBirthday");

        const wordTo =
            document.getElementById("wordTo");

        const wordMama =
            document.getElementById("wordMama");

        const envelopeArea =
            document.getElementById("envelopeArea");

        const heartButton =
            document.getElementById("heartButton");

        const intro =
            document.getElementById("intro");

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


        /* ==================================================
           AWAL
        ================================================== */

        document.body.style.overflow =
            "hidden";


        /* ==================================================
           EMOJI JATUH
        ================================================== */

        function createCelebration() {

            const emojis = [
                "🎂",
                "❤️",
                "💕",
                "💖",
                "🎂",
                "💗",
                "❤️",
                "🎂"
            ];


            for (
                let i = 0;
                i < 28;
                i++
            ) {

                const emoji =
                    document.createElement(
                        "div"
                    );


                emoji.className =
                    "falling-emoji";


                emoji.textContent =
                    emojis[
                        Math.floor(
                            Math.random()
                            * emojis.length
                        )
                    ];


                emoji.style.left =
                    Math.random() * 100 + "%";


                emoji.style.animationDuration =
                    (
                        3 +
                        Math.random() * 4
                    ) + "s";


                emoji.style.animationDelay =
                    (
                        Math.random() * 2
                    ) + "s";


                celebration.appendChild(
                    emoji
                );

            }


            celebration.classList.add(
                "active"
            );

        }


        /* ==================================================
           FUNGSI ANIMASI KATA
        ================================================== */

        function showWord(
            word,
            duration
        ) {

            return new Promise(
                function (resolve) {

                    word.classList.add(
                        "show"
                    );


                    setTimeout(
                        function () {

                            word.classList.remove(
                                "show"
                            );

                            word.classList.add(
                                "hide"
                            );


                            setTimeout(
                                function () {

                                    word.classList.remove(
                                        "hide"
                                    );

                                    resolve();

                                },
                                1000
                            );

                        },
                        duration
                    );

                }
            );

        }


        /* ==================================================
           COUNTDOWN
        ================================================== */

        let number = 3;


        const countdownTimer =
            setInterval(
                function () {


                    countdown.classList.add(
                        "hide"
                    );


                    setTimeout(
                        function () {


                            number--;


                            if (
                                number > 0
                            ) {

                                countdown.textContent =
                                    number;


                                countdown.classList.remove(
                                    "hide"
                                );

                            }

                            else {

                                clearInterval(
                                    countdownTimer
                                );


                                countdown.style.display =
                                    "none";


                                /* ==========================
                                   MULAI HUJAN EMOJI
                                ========================== */

                                createCelebration();


                                /* ==========================
                                   MULAI UCAPAN
                                ========================== */

                                birthdayText.style.opacity =
                                    "1";

                                birthdayText.style.visibility =
                                    "visible";


                                startBirthdaySequence();

                            }

                        },
                        450
                    );


                },
                1000
            );


        /* ==================================================
           URUTAN:

           HAPPY
           ↓
           BIRTHDAY
           ↓
           TO
           ↓
           MAMA
        ================================================== */

        async function startBirthdaySequence() {


            /* HAPPY */

            await showWord(
                wordHappy,
                1800
            );


            /* BIRTHDAY */

            await showWord(
                wordBirthday,
                1800
            );


            /* TO */

            await showWord(
                wordTo,
                1600
            );


            /* MAMA */

            await showWord(
                wordMama,
                2200
            );


            /* ==========================
               TUNGGU SEBENTAR
            ========================== */

            setTimeout(
                function () {


                    birthdayText.style.opacity =
                        "0";

                    birthdayText.style.visibility =
                        "hidden";


                    /* ==========================
                       MUNCULKAN AMPLOP
                    ========================== */

                    envelopeArea.classList.add(
                        "show"
                    );


                },
                900
            );

        }


        /* ==================================================
           KLIK LOVE DI AMPLOP
        ================================================== */

        heartButton.onclick =
            function () {


                console.log(
                    "LOVE DI AMPLOP DIKLIK"
                );


                /* ==========================
                   TAMPILKAN ISI
                ========================== */

                mainContent.hidden =
                    false;


                /* ==========================
                   HILANGKAN INTRO
                ========================== */

                intro.style.display =
                    "none";


                /* ==========================
                   AKTIFKAN SCROLL
                ========================== */

                document.body.style.overflow =
                    "auto";


                /* ==========================
                   MUSIK
                ========================== */

                music.volume =
                    0.8;


                music.play().catch(
                    function () {

                        console.log(
                            "Browser tidak mengizinkan autoplay."
                        );

                    }
                );


                /* ==========================
                   LANGSUNG KE PESAN
                ========================== */

                setTimeout(
                    function () {

                        const message =
                            document.querySelector(
                                ".message"
                            );


                        if (message) {

                            message.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    },
                    100
                );

            };


        /* ==================================================
           FOTO → LIGHTBOX
        ================================================== */

        photoCards.forEach(
            function (card) {


                card.onclick =
                    function () {


                        const image =
                            card.querySelector(
                                "img"
                            );


                        if (!image) {
                            return;
                        }


                        lightboxImage.src =
                            image.src;


                        lightbox.classList.add(
                            "active"
                        );

                    };

            }
        );


        /* ==================================================
           TUTUP LIGHTBOX
        ================================================== */

        closeLightbox.onclick =
            function () {

                lightbox.classList.remove(
                    "active"
                );

            };


        lightbox.onclick =
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    lightbox.classList.remove(
                        "active"
                    );

                }

            };


        /* ==================================================
           ESC
        ================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    lightbox.classList.remove(
                        "active"
                    );

                }

            }
        );


    }
);document.addEventListener("DOMContentLoaded", function () {

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
