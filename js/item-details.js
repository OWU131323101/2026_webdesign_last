// 作品データの配列（ここを編集して実際の作品データを入れてください）
const worksData = [
    {
        id: 1,
        title: "子供部屋",
        tag: "Blender",
        description: "Blenderを使用して制作した3Dの子供部屋です。温かみのあるライティングにこだわりました。",
        year: "2023年",
        duration: "3ヶ月",
        imgSrc: "./images/Frame 3 2.png"
    },
    {
        id: 2,
        title: "Webサイトイメージ",
        tag: "Figma",
        description: "Figmaを使用して制作したWebサイトのイメージです。架空の乙女ゲームの世界観を基にしています。",
        year: "2024年",
        duration: "2ヶ月",
        imgSrc: "./images/Frame 3 3.png"
    },
    {
        id: 3,
        title: "3Dキャラクター",
        tag: "VRoidStudio",
        description: "3つ目の作品の説明です。テーマに沿ったキャラクターデザインと世界観の構築を行いました。",
        year: "2022年",
        duration: "1ヶ月",
        imgSrc: "./images/Frame 3 4.png"
    },
    {
        id: 4,
        title: "アイコンデザイン",
        tag: "Photoshop",
        description: "4つ目の作品の説明です。Photoshopを使用して、クリーンで洗練されたアイコンをデザインしました。",
        year: "2024年",
        duration: "2週間",
        imgSrc: "./images/Frame 3 5.png"
    },
    {
        id: 5,
        title: "ナイスキャッチ",
        tag: "Photoshop",
        description: "5つ目の作品の説明です。エフェクトを活用し、テンポの良いプロモーションビデオを作成しました。",
        year: "2025年",
        duration: "1.5ヶ月",
        imgSrc: "./images/Frame 7.png"
    }
];

// DOM要素の取得
const mainImage = document.getElementById('main-image');
const mainTitle = document.getElementById('main-title');
const mainTag = document.getElementById('main-tag');
const mainDescription = document.getElementById('main-description');
const mainYear = document.getElementById('main-year');
const mainDuration = document.getElementById('main-duration');
const thumbnailContainer = document.getElementById('thumbnail-container');

// 初期設定：0番目のデータを表示
let currentIndex = 0;

// メインディスプレイを更新する関数
function updateMainDisplay(index) {
    const data = worksData[index];
    
    // 情報を書き換え
    mainImage.src = data.imgSrc;
    mainTitle.textContent = data.title;
    mainTag.textContent = data.tag;
    mainDescription.textContent = data.description;
    mainYear.textContent = data.year;
    mainDuration.textContent = data.duration;

    // サムネイルの「active」クラスを付け替える（見た目の更新）
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// サムネイルを生成して配置する関数
function initThumbnails() {
    worksData.forEach((data, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.classList.add('thumbnail');
        if (index === 0) thumbDiv.classList.add('active');

        const thumbImg = document.createElement('img');
        thumbImg.src = data.imgSrc;
        thumbImg.alt = `サムネイル ${index + 1}`;

        thumbDiv.appendChild(thumbImg);

        // クリックイベントを追加（選択すると反映される機能）
        thumbDiv.addEventListener('click', () => {
            currentIndex = index;
            updateMainDisplay(currentIndex);
        });

        thumbnailContainer.appendChild(thumbDiv);
    });
}

// 左右の矢印ボタンの動作設定（オプション）
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : worksData.length - 1;
    updateMainDisplay(currentIndex);
    // スクロール位置を調整
    const targetThumb = document.querySelectorAll('.thumbnail')[currentIndex];
    targetThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex < worksData.length - 1) ? currentIndex + 1 : 0;
    updateMainDisplay(currentIndex);
    // スクロール位置を調整
    const targetThumb = document.querySelectorAll('.thumbnail')[currentIndex];
    targetThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
});

// 初期化の実行
initThumbnails();
updateMainDisplay(currentIndex);