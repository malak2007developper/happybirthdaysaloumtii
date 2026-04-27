const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const nextBtn = document.getElementById("next");

const page1 = document.getElementById("page1");
const pageGift = document.getElementById("pageGift");
const page2 = document.getElementById("page2");

const audio = document.getElementById("music");

let messages = ["NO 😅", "Are you sure? 😏", "Really?? 😭", "Nooo pliiiz 💔", "whyyyyyyy 🥺"];
let i = 0;

// 😂 NO كيتهرب
let scale = 1;

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noBtn.innerText = messages[i % messages.length];
  i++;

  // 💖 YES تكبر
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
}

// PC
noBtn.addEventListener("mouseover", moveNo);

// Téléphone
noBtn.addEventListener("touchstart", moveNo);

// ✅ YES → pageGift فقط
yesBtn.addEventListener("click", () => {
  page1.style.display = "none";
  pageGift.style.display = "block";

  audio.play();
});

// ✅ NEXT → page2
nextBtn.addEventListener("click", () => {
  pageGift.style.display = "none";
  page2.style.display = "block";
});

// 🖼️ صور
const photosContainer = document.querySelector(".photos");

const images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg", "5.jpeg","6.jpeg","7.jpeg","8.jpeg", "9.jpeg","10.jpeg","11.jpeg","12.jpeg" ,"13.jpeg","14.jpeg","15.jpeg","16.jpeg" ,"17.jpeg","18.jpeg","19.jpeg","20.jpeg","21.jpeg","22.jpeg","23.jpeg","24.jpeg", "25.jpeg","26.jpeg","27.jpeg","28.jpeg", "29.jpeg","30.jpeg", "31.jpeg","32.jpeg","33.jpeg","34.jpeg", "35.jpeg","36.jpeg","37.jpeg","38.jpeg", "39.jpeg","40.jpeg", "41.jpeg","42.jpeg","43.jpeg","44.jpeg","45.jpeg","46.jpeg","47.jpeg","48.jpeg", "49.jpeg","50.jpeg","51.jpeg","52.jpeg", "53.jpeg","54.jpeg"];

function showPhoto() {
  if (!photosContainer) return;

  const img = document.createElement("img");
  img.src = images[Math.floor(Math.random() * images.length)];

  img.style.left = Math.random() * 80 + "%";
  img.style.top = Math.random() * 80 + "%";

  photosContainer.appendChild(img);

  setTimeout(() => img.remove(), 5000);
}

setInterval(() => {
  for (let i = 0; i < 3; i++) { // عدد الصور فكل مرة
    showPhoto();
  }
}, 1200);

const video = document.getElementById("myVideo");
const music = document.getElementById("music");

let musicPaused = false;

video.addEventListener("click", () => {
  if (!musicPaused) {
    music.pause();
    musicPaused = true;
  }
});

video.addEventListener("ended", () => {
  music.play();
  musicPaused = false;
});

// 💖 قلوب
const containers = document.querySelectorAll(".hearts-container");

function createHeart() {
  containers.forEach(container => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const shapes = ["💖","🌸","💕","✨","🎂","🎉","💫","🥰","🌸","🎊","🎈"];
    heart.innerText = shapes[Math.floor(Math.random()*shapes.length)];

    const side = Math.random() < 0.5 ? "left" : "right";

    if (side === "left") {
      heart.style.left = Math.random() * 80 + "px";
    } else {
      heart.style.right = Math.random() * 80 + "px";
    }

    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  });
}

setInterval(createHeart, 300);

const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

// رجوع من gift → page1
if (back1) {
  back1.addEventListener("click", () => {
    pageGift.style.display = "none";
    page1.style.display = "block";
    audio.pause();
  });
}

// رجوع من page2 → gift
if (back2) {
  back2.addEventListener("click", () => {
    page2.style.display = "none";
    pageGift.style.display = "block";
  });
}