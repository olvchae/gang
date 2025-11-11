// 봉투 클릭 시 열기
const letterContainer = document.getElementById("letter-container");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const notificationBox = document.getElementById("notification-box"); // Get the notification box

// Notification box click to reveal envelope
notificationBox.addEventListener("click", () => {
  notificationBox.style.opacity = "0";
  notificationBox.style.visibility = "hidden";
  letterContainer.classList.add("active"); // Show the letter container
});

envelope.addEventListener("click", () => {
  if (!letterContainer.classList.contains("open")) {
    letterContainer.classList.add("open");
  }
});

// 편지 클릭 시 닫기
letter.addEventListener("click", () => {
  if (letterContainer.classList.contains("open")) {
    letterContainer.classList.remove("open");
  }
});

// 네잎클로버 생성
const cloverArea = document.querySelector(".clover-area");
const cloverEmoji = "🍀";

function createClover() {
  const clover = document.createElement("span");
  clover.textContent = cloverEmoji;
  clover.classList.add("clover");
  
  // 랜덤 위치, 크기, 속도
  const size = Math.random() * 20 + 20;
  const left = Math.random() * window.innerWidth;
  const duration = Math.random() * 5 + 5;
  
  clover.style.left = `${left}px`;
  clover.style.fontSize = `${size}px`;
  clover.style.animationDuration = `${duration}s`;
  
  cloverArea.appendChild(clover);
  
  // 애니메이션 끝나면 제거
  setTimeout(() => clover.remove(), duration * 1000);
}

// 주기적으로 네잎클로버 생성
setInterval(createClover, 800);