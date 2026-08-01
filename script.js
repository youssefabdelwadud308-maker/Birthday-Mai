/* ===========================
   PASSWORD
=========================== */

const password = "308";

const loginBtn = document.getElementById("loginBtn");
const login = document.getElementById("login");
const app = document.getElementById("app");
const error = document.getElementById("error");
const music = document.getElementById("music");

loginBtn.onclick = () => {

    const value = document
        .getElementById("password")
        .value;

    if (value === password) {

        login.style.display = "none";
        app.style.display = "block";

        music.play().catch(() => {});

        startTyping();

        startCounter();

        createHearts();

    } else {

        error.style.display = "block";

    }

};


/* ===========================
   TYPING MESSAGE
=========================== */

const message =
"أنتِ مش مجرد حبيبتي... أنتِ المكان اللي قلبي بيرتاح فيه، والدعوة اللي بقولها كل يوم، والحلم اللي نفسي أعيشه باقي عمري. ربنا يديمك في حياتي ويجمعنا قريب في بيت واحد بالحلال ❤️";

const typing = document.getElementById("typing");

let index = 0;

function startTyping(){

typing.innerHTML="";

index=0;

const timer=setInterval(()=>{

typing.innerHTML+=message.charAt(index);

index++;

if(index>=message.length){

clearInterval(timer);

}

},45);

}

/* ===========================
   LOVE COUNTER
=========================== */

const startDate = new Date("2023-08-30T00:00:00");

function startCounter(){

setInterval(()=>{

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff % (1000*60*60))/(1000*60));

const seconds = Math.floor((diff % (1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);

}


/* ===========================
   IMAGE SLIDER
=========================== */

const photos = [

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg",

"images/photo6.jpg",

"images/photo7.jpg",

"images/photo8.jpg",

"images/photo9.jpg",

"images/photo10.jpg"

];

let current = 0;

const slider = document.getElementById("slider");

document.getElementById("next").onclick = ()=>{

current++;

if(current >= photos.length){

current = 0;

}

slider.src = photos[current];

};

document.getElementById("prev").onclick = ()=>{

current--;

if(current < 0){

current = photos.length-1;

}

slider.src = photos[current];

};


/* تغيير الصورة تلقائياً كل 4 ثواني */

setInterval(()=>{

current++;

if(current >= photos.length){

current = 0;

}

slider.src = photos[current];

},4000);

/* ===========================
   GIFT BUTTON
=========================== */

const giftBtn = document.getElementById("giftBtn");
const giftBox = document.getElementById("giftBox");

giftBtn.onclick = () => {

    if(giftBox.style.display === "block"){

        giftBox.style.display = "none";
        giftBtn.innerHTML = "🎁 افتحي هديتك";

    }else{

        giftBox.style.display = "block";
        giftBtn.innerHTML = "💖 بحبك يا مي";

        giftBox.scrollIntoView({
            behavior:"smooth"
        });

    }

};


/* ===========================
   BIRTHDAY CAKE
=========================== */

const cake = document.getElementById("cake");

cake.onclick = ()=>{

cake.innerHTML="🧁";

cake.classList.add("blow");

setTimeout(()=>{

alert("🎂 Happy Birthday My Princess Mai ❤️\n\nكل سنة وانتي أجمل حاجة في حياتي.\nبحبك يا مي ❤️");

},500);

};


/* ===========================
   FLOATING HEARTS
=========================== */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},500);

}

/* ===========================
   FINAL EFFECTS
=========================== */

window.onload = () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition = "1.2s";

document.body.style.opacity = "1";

},100);

};


/* تشغيل الأغنية عند أول لمسة لو المتصفح منع التشغيل */

document.body.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});


/* رسالة ترحيب بعد تسجيل الدخول */

function welcomeMessage(){

const box=document.createElement("div");

box.innerHTML="💖 Welcome My Princess Mai 💖";

box.style.position="fixed";

box.style.top="30px";

box.style.left="50%";

box.style.transform="translateX(-50%)";

box.style.background="#ff4f93";

box.style.color="white";

box.style.padding="15px 30px";

box.style.borderRadius="20px";

box.style.fontSize="20px";

box.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

box.style.zIndex="9999";

box.style.animation="fade 1s";

document.body.appendChild(box);

setTimeout(()=>{

box.remove();

},3000);

}


/* تعديل حدث الدخول */

loginBtn.onclick = () => {

const value=document.getElementById("password").value;

if(value===password){

login.style.display="none";

app.style.display="block";

music.play().catch(()=>{});

welcomeMessage();

startTyping();

startCounter();

createHearts();

}else{

error.style.display="block";

}

};


/* رسالة صغيرة عند فتح الهدية */

giftBtn.addEventListener("click",()=>{

if(giftBox.style.display==="block"){

setTimeout(()=>{

alert("❤️ بحبك يا مي... وكل سنة وانتي طيبة يا أجمل هدية في حياتي 🎂");

},300);

}

});


console.log("Happy Birthday Mai ❤️");
