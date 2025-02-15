const btnNo = document.querySelector(".no-btn");
const imgNo = document.getElementById("fadeImage");
const audioNo = document.getElementById("fadeAudio");
const btnYes = document.querySelector(".yes-btn");
const heartPage = document.querySelector(".heart-page");
const questionPage = document.querySelector('.context')
const heartImg = document.getElementById('heart-img')
const btn = document.getElementById("startStop");
const music = document.getElementById("music");


// No button
btnNo.addEventListener("click", function () {
  audioNo.play();

  imgNo.classList.remove("hidden");
  imgNo.classList.add("visible");

  setTimeout(() => {
    imgNo.classList.remove("visible");
    imgNo.classList.add("hidden");
  }, 3000);

  btnNo.classList.add("hidden");
});


// Yes button
btnYes.addEventListener("click", function (e) {
  e.preventDefault()
  questionPage.classList.add('hidden')
  heartPage.classList.remove("hidden");
  heartPage.classList.add('visible')
  music.volume = 0.5
  music.play()
});

// clicked imgs
heartImg.addEventListener('click', function(e){
e.preventDefault()

})


// heart rainfall
let btnStatus = "stopped";

let inter = null;

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "https://pngimg.com/uploads/heart/heart_PNG51335.png";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 3 + "s ";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function startStop() {
  if (btnStatus === "stopped") {
    btn.innerHTML = "STOP";
    inter = setInterval(createHeart, 100);
    btnStatus = "started";
   
  } else {
    btn.innerHTML = "START";
    clearInterval(inter);
    btnStatus = "stopped";
    
  }
}

btn.addEventListener("click", startStop);
