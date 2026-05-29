const messages = [
  "You are cute. Like dangerously cute.",
  "I was going to get you the moon, but it looked jealous of you.",
  "Your smile should honestly be illegal.",
  "I love annoying you and caring for you every day.",
  "Final surprise: You are my favorite person, my peace, and my happiness ❤️"
];

let index = 0;

const popup = document.getElementById("popup");
const messageEl = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

startBtn.addEventListener("click", () => {
  popup.style.display = "block";
  messageEl.innerText = messages[index];
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= messages.length) {
    index = 0; // loop or end
    alert("Happy Birthday! 🎉");
  }
  messageEl.innerText = messages[index];
});
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animation = "float 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
@keyframes float {
  0% { transform: translateY(100vh); opacity:1; }
  100% { transform: translateY(-50px); opacity:0; }
}
