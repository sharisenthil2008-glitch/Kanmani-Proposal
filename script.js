/* =========================
   MUSIC
========================= */

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;


/* Start song from 0:00 */

function startMusic(){

    if(!music){
        return;
    }

    if(!musicStarted){

        music.currentTime = 0;

        music.play()
        .then(() => {

            musicStarted = true;

            if(musicButton){
                musicButton.innerHTML = "🎵 Pause Music";
            }

        })
        .catch(() => {

            /* Browser autoplay restriction */

        });

    }

}


/* Try autoplay when page opens */

window.addEventListener("load", () => {

    if(music){

        music.currentTime = 0;

        music.play()
        .then(() => {

            musicStarted = true;

            if(musicButton){
                musicButton.innerHTML = "🎵 Pause Music";
            }

        })
        .catch(() => {

            if(musicButton){
                musicButton.innerHTML = "🎵 Play Music";
            }

        });

    }

});


/* Toggle music */

function toggleMusic(){

    if(!music){
        return;
    }


    if(music.paused){

        if(!musicStarted){

            music.currentTime = 0;

            musicStarted = true;
        }

        music.play();

        musicButton.innerHTML = "🎵 Pause Music";

    }else{

        music.pause();

        musicButton.innerHTML = "🎵 Play Music";

    }

}


/* Start music on first user interaction */

document.addEventListener("click", () => {

    if(music && music.paused && !musicStarted){

        music.currentTime = 0;

        music.play()
        .then(() => {

            musicStarted = true;

            if(musicButton){
                musicButton.innerHTML = "🎵 Pause Music";
            }

        })
        .catch(() => {});

    }

}, {once:true});



/* =========================
   PAGE 1 → PAGE 2
========================= */

function openPage2(){

    startMusic();


    document.getElementById("page1").style.display = "none";


    const intro =
    document.getElementById("intro");


    intro.style.display = "flex";


    document.getElementById("introText").innerHTML =
    "🍜 NOODLES 🍜";


    setTimeout(() => {

        document.getElementById("introText").innerHTML =
        "For My Noodles Manda ❤️";

    },2000);


    setTimeout(() => {

        intro.style.display = "none";

        document.getElementById("page2").style.display =
        "block";

    },4000);

}



/* =========================
   PAGE 1 PHOTOS
========================= */

const photos1 = [

    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"

];


let current1 = 0;


setInterval(() => {

    const slide1 =
    document.getElementById("slide1");


    if(slide1){

        current1++;


        if(current1 >= photos1.length){

            current1 = 0;

        }


        slide1.style.opacity = "0";


        setTimeout(() => {

            slide1.src = photos1[current1];

            slide1.style.opacity = "1";

        },250);

    }

},3000);



/* =========================
   PAGE 2 PHOTOS
========================= */

const photos2 = [

    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg"

];


let current2 = 0;


setInterval(() => {

    const slide2 =
    document.getElementById("slide2");


    if(
        slide2 &&
        document.getElementById("page2").style.display === "block"
    ){

        current2++;


        if(current2 >= photos2.length){

            current2 = 0;

        }


        slide2.style.opacity = "0";


        setTimeout(() => {

            slide2.src = photos2[current2];

            slide2.style.opacity = "1";

        },250);

    }

},3000);



/* =========================
   PAGE 2 → PAGE 3
========================= */

function openPage3(){

    startMusic();


    document.getElementById("page2").style.display =
    "none";


    document.getElementById("page3").style.display =
    "block";


    const video =
    document.getElementById("proposalVideo");


    const afterVideo =
    document.getElementById("afterVideo");


    afterVideo.style.display = "none";


    if(video){

        video.currentTime = 0;

        video.play()
        .catch(() => {

            /* User can press play if browser blocks autoplay */

        });

    }

}



/* =========================
   VIDEO FINISHED
========================= */

const proposalVideo =
document.getElementById("proposalVideo");


if(proposalVideo){

    proposalVideo.addEventListener("ended", () => {

        const afterVideo =
        document.getElementById("afterVideo");


        afterVideo.style.display = "block";


        afterVideo.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

}



/* =========================
   YES BUTTON
========================= */

function showYes(){

    startMusic();


    document.getElementById("page3").style.display =
    "none";


    document.getElementById("finalPage").style.display =
    "block";


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================
   NO BUTTON
========================= */

function showNo(){

    const cryingEffect =
    document.getElementById("cryingEffect");


    if(cryingEffect){

        cryingEffect.style.display = "flex";

    }


    /* Extra crying effect */

    document.body.style.overflow = "hidden";

}



/* =========================
   FRIENDSHIP TIMER
========================= */

/*
   July 1, 2013
*/

const startDate =
new Date("July 1, 2013 00:00:00");


function updateTimer(){

    const now =
    new Date();


    const diff =
    now - startDate;


    if(diff < 0){
        return;
    }


    const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );


    const hours =
    Math.floor(
        (diff /
        (1000 * 60 * 60)) % 24
    );


    const minutes =
    Math.floor(
        (diff /
        (1000 * 60)) % 60
    );


    const seconds =
    Math.floor(
        (diff / 1000) % 60
    );


    const timer =
    document.getElementById("timer");


    if(timer){

        timer.innerHTML =

        days + " Days ❤️ " +

        hours + " Hours ❤️ " +

        minutes + " Minutes ❤️ " +

        seconds + " Seconds ❤️";

    }

}


updateTimer();


setInterval(updateTimer,1000);
