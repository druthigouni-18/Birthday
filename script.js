// PASSWORD CHECK
function checkPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const realPassword = "happy123"; // Change this

  if (password === realPassword) {
    window.location.href = "page2.html";
  } else {
    error.textContent = "❌ Wrong password. Try again!";
  }
}

// CREATE 20 CANDLES
window.onload = function () {
  const candlesBox = document.getElementById("candles");

  if (candlesBox) {
    for (let i = 0; i < 20; i++) {
      const candle = document.createElement("div");
      candle.className = "candle";

      const flame = document.createElement("div");
      flame.className = "flame";

      candle.appendChild(flame);
      candlesBox.appendChild(candle);
    }
  }
};

// BLOW CANDLES
function blowCandles() {
  const flames = document.querySelectorAll(".flame");

  flames.forEach((flame, i) => {
    setTimeout(() => {
      flame.style.display = "none";
    }, i * 80);
  });

  setTimeout(() => {
    const wishMsg = document.getElementById("wishMsg");
    if (wishMsg) {
      wishMsg.style.display = "block";
    }
  }, 1800);
}

// FLIP BOOK PAGES
