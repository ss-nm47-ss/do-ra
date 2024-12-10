// 日付生成
document.getElementById('generateDate').addEventListener('click', function() {
  const year = Math.floor(Math.random() * 5) + 2019; // 2019-2023
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  document.getElementById('randomDate').textContent = `${year}年${month}月${day}日`;
});

// タイマー
document.getElementById('startTimer').addEventListener('click', function() {
  let timeLeft = 30;
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${timeLeft}秒`;
  const timer = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = `${timeLeft}秒`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "タイムアップ！";
    }
  }, 1000);
});
