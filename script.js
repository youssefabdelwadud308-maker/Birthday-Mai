/* ===================================
   Romantic Birthday Website
   Script.js - Part 1
===================================*/

// العناصر الأساسية
const intro = document.getElementById("intro");
const passwordPage = document.getElementById("passwordPage");
const website = document.getElementById("website");
const music = document.getElementById("music");

// ===================================
// شاشة البداية
// ===================================

window.addEventListener("load", () => {

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            passwordPage.style.display = "flex";

        },1500);

    },7000);

});

// ===================================
// الباسورد
// ===================================

function checkPassword(){

    const password=document.getElementById("password").value;

    const error=document.getElementById("error");

    if(password==="308"){

        passwordPage.innerHTML=`

        <div class="glass">

            <h1>❤️</h1>

            <h2>جارٍ تجهيز المفاجأة...</h2>

        </div>

        `;

        setTimeout(()=>{

            passwordPage.style.display="none";

            website.style.display="block";

            if(music){

                music.play().catch(()=>{});

            }

        },2000);

    }

    else{

        error.innerHTML="❌ الباسورد غير صحيح";

    }

}

// ===================================
// العداد
// ===================================

const startDate=new Date("2023-08-30T00:00:00");

function updateCounter(){

    const now=new Date();

    let diff=now-startDate;

    let totalSeconds=Math.floor(diff/1000);

    let totalMinutes=Math.floor(totalSeconds/60);

    let totalHours=Math.floor(totalMinutes/60);

    let totalDays=Math.floor(totalHours/24);

    let years=Math.floor(totalDays/365);

    let months=Math.floor((totalDays%365)/30);

    let days=(totalDays%365)%30;

    let hours=totalHours%24;

    let minutes=totalMinutes%60;

    let seconds=totalSeconds%60;

    document.getElementById("years").innerHTML=years;

    document.getElementById("months").innerHTML=months;

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCounter,1000);

updateCounter();

/* ===================================
   السلايدر
=================================== */

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg"
];

let currentPhoto = 0;

const slider = document.getElementById("slider");

function showImage() {

    if(!slider) return;

    slider.style.opacity = "0";

    slider.style.transform = "scale(.95)";

    setTimeout(() => {

        slider.src = photos[currentPhoto];

        slider.style.opacity = "1";

        slider.style.transform = "scale(1)";

    },300);

}

function nextImage(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    showImage();

}

function prevImage(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = photos.length - 1;

    }

    showImage();

}

setInterval(nextImage,5000);


/* ===================================
   النجوم
=================================== */

const stars = document.getElementById("stars");

if(stars){

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*5+"s";

        star.style.animationDuration=(1+Math.random()*3)+"s";

        stars.appendChild(star);

    }

}


/* ===================================
   القلوب
=================================== */

const heartsContainer=document.getElementById("hearts");

function createHeart(){

    if(!heartsContainer) return;

    const heart=document.createElement("div");

        heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(18+Math.random()*28)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);

/* ===================================
   رسالة الحب
=================================== */

const loveText = document.getElementById("loveText");

if(loveText){

    const originalText = loveText.innerHTML;

    loveText.innerHTML = "";

    let index = 0;

    function typeLove(){

        if(index < originalText.length){

            loveText.innerHTML += originalText.charAt(index);

            index++;

            setTimeout(typeLove,25);

        }

    }

    setTimeout(typeLove,2500);

}


/* ===================================
   الهدية
=================================== */

function openGift(){

    const gift = document.getElementById("giftBox");

    if(!gift) return;

    gift.style.display="block";

    gift.animate([

        {

            opacity:0,

            transform:"scale(.6)"

        },

        {

            opacity:1,

            transform:"scale(1)"

        }

    ],{

        duration:700,

        fill:"forwards"

    });

}


/* ===================================
   زر الموسيقى
=================================== */

const musicBtn = document.createElement("button");

musicBtn.id="musicBtn";

musicBtn.innerHTML="🎵";

document.body.appendChild(musicBtn);

musicBtn.onclick=()=>{

    if(!music) return;

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🔊";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

};

musicBtn.style.position="fixed";
musicBtn.style.bottom="20px";
musicBtn.style.right="20px";
musicBtn.style.width="60px";
musicBtn.style.height="60px";
musicBtn.style.borderRadius="50%";
musicBtn.style.border="none";
musicBtn.style.background="#ff4f88";
musicBtn.style.color="white";
musicBtn.style.fontSize="28px";
musicBtn.style.cursor="pointer";
musicBtn.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
musicBtn.style.zIndex="99999";


/* ===================================
   ظهور الأقسام أثناء النزول
=================================== */

const sections=document.querySelectorAll(

".love-section,.gallery,.gift,.cake,.final"

);

function revealSections(){

    const trigger=window.innerHeight-120;

    sections.forEach(section=>{

        if(section.getBoundingClientRect().top<trigger){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",revealSections);

window.addEventListener("load",()=>{

    sections.forEach(section=>{

        section.style.opacity="0";

        section.style.transform="translateY(80px)";

        section.style.transition=".8s";

    });

    revealSections();

});

/* ===================================
   التورتة والشموع
=================================== */

let candlesLeft = 3;

function blow(candle){

    const flame = candle.querySelector(".flame");

    if(!flame) return;

    if(flame.classList.contains("off")) return;

    flame.classList.add("off");

    candlesLeft--;

    if(candlesLeft === 0){

        launchCelebration();

    }

}


/* ===================================
   الكونفيتي
=================================== */

function launchCelebration(){

    const colors=[
        "#ff4f88",
        "#ffd166",
        "#7bdff2",
        "#b8f2e6",
        "#ffffff",
        "#ff99c8"
    ];

    for(let i=0;i<180;i++){

        const item=document.createElement("div");

        item.style.position="fixed";
        item.style.left="50%";
        item.style.top="45%";
        item.style.width="10px";
        item.style.height="10px";
        item.style.borderRadius="50%";
        item.style.background=colors[Math.floor(Math.random()*colors.length)];
        item.style.pointerEvents="none";
        item.style.zIndex="999999";

        document.body.appendChild(item);

        const x=(Math.random()-.5)*1400;
        const y=(Math.random()-.5)*1000;
        const rotate=Math.random()*1080;

        item.animate([

            {

                transform:"translate(0,0) rotate(0deg)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) rotate(${rotate}deg)`,

                opacity:0

            }

        ],{

            duration:3500,

            easing:"ease-out"

        });

        setTimeout(()=>{

            item.remove();

        },3500);

    }

    setTimeout(()=>{

        showLastScreen();

    },2500);

}


/* ===================================
   الشاشة الأخيرة
=================================== */

function showLastScreen(){

    const last=document.getElementById("lastScreen");

    if(!last) return;

    last.style.display="flex";

    last.animate([

        {

            opacity:0

        },

        {

            opacity:1

        }

    ],{

        duration:1200,

        fill:"forwards"

    });

}


/* ===================================
   نبض عنوان الموقع
=================================== */

const mainTitle=document.querySelector("header h1");

if(mainTitle){

setInterval(()=>{

mainTitle.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},2500);

}


/* ===================================
   اختصارات الكيبورد
=================================== */

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});


/* ===================================
   النهاية
=================================== */

console.log("❤️ Romantic Birthday Website Loaded ❤️");
