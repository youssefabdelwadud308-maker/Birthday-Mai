/* ==========================================
   Romantic Birthday Website
   script.js - Part 1
========================================== */

// ==========================
// العناصر الأساسية
// ==========================

const intro = document.getElementById("intro");
const passwordPage = document.getElementById("passwordPage");
const website = document.getElementById("website");
const music = document.getElementById("music");

// ==========================
// شاشة البداية
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            passwordPage.style.display = "flex";

        },1500);

    },5000);

});

// ==========================
// تسجيل الدخول
// ==========================

function checkPassword(){

    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    if(password === "308"){

        passwordPage.innerHTML = `

        <div class="glass">

            <h1>❤️</h1>

            <h2>جارٍ تجهيز مفاجأتك...</h2>

        </div>

        `;

        setTimeout(()=>{

            passwordPage.style.display="none";

            website.style.display="block";

            if(music){

                music.play().catch(()=>{});

            }

        },1800);

    }

    else{

        error.innerHTML="❌ الباسورد غير صحيح";

    }

}

// ==========================
// العداد الحقيقي
// ==========================

const startDate = new Date(2023,7,30,0,0,0);

function updateCounter(){

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if(days < 0){

        months--;

        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

        days += lastMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = now.getHours();
    document.getElementById("minutes").textContent = now.getMinutes();
    document.getElementById("seconds").textContent = now.getSeconds();

}

setInterval(updateCounter,1000);

updateCounter();

/* ==========================================
   السلايدر
========================================== */

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

function showImage(){

    if(!slider) return;

    slider.style.opacity = "0";

    slider.style.transform = "scale(.97)";

    setTimeout(()=>{

        slider.src = photos[currentPhoto];

        slider.style.opacity = "1";

        slider.style.transform = "scale(1)";

    },250);

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

// تغيير الصورة كل 6 ثواني
setInterval(nextImage,6000);


/* ==========================================
   النجوم (نسخة خفيفة)
========================================== */

const stars = document.getElementById("stars");

if(stars){

    for(let i=0;i<40;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100+"%";

        star.style.top = Math.random()*100+"%";

        star.style.animationDelay = Math.random()*3+"s";

        star.style.animationDuration = (2+Math.random()*2)+"s";

        stars.appendChild(star);

    }

}


/* ==========================================
   القلوب (نسخة خفيفة)
========================================== */

const hearts = document.getElementById("hearts");

function createHeart(){

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"%";

    heart.style.fontSize = (18+Math.random()*12)+"px";

    heart.style.animationDuration = (6+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

// قلب كل ثانيتين
setInterval(createHeart,2000);

/* ==========================================
   رسالة الحب
========================================== */

const loveText = document.getElementById("loveText");

if(loveText){

    const message = loveText.innerHTML;

    loveText.innerHTML = "";

    let index = 0;

    function typeMessage(){

        if(index < message.length){

            loveText.innerHTML += message.charAt(index);

            index++;

            setTimeout(typeMessage,30);

        }

    }

    setTimeout(typeMessage,1500);

}


/* ==========================================
   فتح الهدية
========================================== */

function openGift(){

    const gift = document.getElementById("giftBox");

    if(!gift) return;

    gift.style.display = "block";

    gift.animate([

        {

            opacity:0,

            transform:"translateY(30px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:700,

        fill:"forwards"

    });

}


/* ==========================================
   زر الموسيقى
========================================== */

const musicButton = document.createElement("button");

musicButton.id = "musicBtn";

musicButton.innerHTML = "🎵";

document.body.appendChild(musicButton);

musicButton.style.position = "fixed";
musicButton.style.bottom = "20px";
musicButton.style.right = "20px";
musicButton.style.width = "55px";
musicButton.style.height = "55px";
musicButton.style.border = "none";
musicButton.style.borderRadius = "50%";
musicButton.style.background = "#ff4f88";
musicButton.style.color = "#fff";
musicButton.style.fontSize = "24px";
musicButton.style.cursor = "pointer";
musicButton.style.zIndex = "99999";
musicButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

musicButton.onclick = () => {

    if(!music) return;

    if(music.paused){

        music.play();

        musicButton.innerHTML = "🔊";

    }

    else{

        music.pause();

        musicButton.innerHTML = "🎵";

    }

};


/* ==========================================
   ظهور الأقسام أثناء النزول
========================================== */

const sections = document.querySelectorAll(

".love-section,.gallery,.gift,.final"

);

function revealSections(){

    const trigger = window.innerHeight - 100;

    sections.forEach(section=>{

        if(section.getBoundingClientRect().top < trigger){

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll",revealSections);

window.addEventListener("load",()=>{

    sections.forEach(section=>{

        section.style.opacity = "0";

        section.style.transform = "translateY(50px)";

        section.style.transition = ".7s ease";

    });

    revealSections();

});


/* ==========================================
   رسالة ترحيب
========================================== */

console.log("❤️ Welcome My Princess ❤️");

/* ==========================================
   النهاية الرومانسية
========================================== */

function lastMessage(){

    const lastScreen = document.getElementById("lastScreen");

    if(!lastScreen) return;

    lastScreen.style.display = "flex";

    lastScreen.animate([

        {
            opacity:0
        },

        {
            opacity:1
        }

    ],{

        duration:1000,
        fill:"forwards"

    });

}


/* ==========================================
   تأثير بسيط عند الضغط على الأزرار
========================================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.95)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:180

        });

    });

});


/* ==========================================
   رسالة النهاية
========================================== */

setTimeout(()=>{

    console.log("❤️ Happy Birthday My Princess ❤️");

},1000);
