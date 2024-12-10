// ランダムテーマのリスト
const themes = [
  "子供時代のお気に入りの思い出",
  "最も恥ずかしかった瞬間",
  "秘密の趣味",
  "訪れたことのある場所",
  "好きな食べ物",
  "自慢のスキル",
  "一番の恐怖",
  "見たことのある不思議な夢",
  "これまでにもらった最高のプレゼント",
  "やりたいことリストにあるもの"
];

// HTML要素の取得
const themeElement = document.getElementById("theme");
const newThemeButton = document.getElementById("new-theme");

// テーマをランダムに表示する関数
function getRandomTheme() {
  const randomIndex = Math.floor(Math.random() * themes.length);
  themeElement.textContent = themes[randomIndex];
}

// 初回のテーマを表示
getRandomTheme();

// ボタンクリックで新しいテーマを表示
newThemeButton.addEventListener("click", getRandomTheme);
