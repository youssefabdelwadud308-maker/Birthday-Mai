// =========================
// الباسورد
// =========================

function checkPassword() {

    const pass = document.getElementById("password").value;

    if (pass === "308") {

        document.getElementById("passwordScreen").style.display = "none";

        document.getElementById("mainContent").style.display = "block";

        document.getElementById("bgMusic").play();

    } else {

        document.getElementById("error").innerHTML = "❌ الباسورد غلط";

    }

}

// =========================
// العداد
// =========================

const startDate = new Date("2023-08-30T00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);

    let minutes = Math.floor(seconds / 60);

    let hours = Math.floor(minutes / 60);

    let days = Math.floor(hours / 24);

    let years = Math.floor(days / 365);

    let months = Math.floor((days % 365) / 30);

    days = (days % 365) % 30;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

// =========================
// السلايدر
// =========================

const images = [

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

let currentImage = 0;

function showImage(){

document.getElementById("sliderImage").src=images[currentImage];

}

function nextImage(){

currentImage++;

if(currentImage>=images.length){

currentImage=0;

}

showImage();

}

function prevImage(){

currentImage--;

if(currentImage<0){

currentImage=images.length-1;

}

showImage();

}

setInterval(nextImage,4000);

// =========================
// زر الهدية
// =========================

function openGift() {

    const gift = document.getElementById("giftBox");

    if (gift.style.display === "block") {

        gift.style.display = "none";

    } else {

        gift.style.display = "block";

        gift.scrollIntoView({
            behavior: "smooth"
        });

    }

}

// =========================
// القلوب المتحركة
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 400);

// =========================
// تشغيل الأغنية
// =========================

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {

    music.play().catch(() => {});

}, { once: true });

// =========================
// تشغيل أول صورة
// =========================

showImage();
