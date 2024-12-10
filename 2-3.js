// ランダムなお題のリスト
const topics = [
    "子供の頃にハマっていたアニメは？",
    "一番好きだったゲームは？",
    "友達とよく遊んだ遊びは？",
    "学校で流行っていたものは？",
    "一番印象に残っているおもちゃは？",
    "家族でよく観ていたテレビ番組は？",
    "好きだったお菓子や駄菓子は？",
    "一番楽しかった思い出は？",
    "憧れていたキャラクターは？",
    "子供の頃に描いていた夢は？"
  ];
  
  // HTML要素を取得
  const topicElement = document.getElementById("topic");
  const nextButton = document.getElementById("next-button");
  
  // ボタンをクリックした時にお題をランダムに表示
  nextButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    topicElement.textContent = topics[randomIndex];
  });
  