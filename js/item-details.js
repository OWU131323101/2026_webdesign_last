// 作品データの定義（実際の画像パスやデータに合わせて調整してください）
const worksData = [
    {
        title: "子供部屋",
        tag: "Blender",
        description: "Blenderを使用して作成した子供部屋の3Dモデリング作品です。温かみのある空間と小物や質感を丁寧に表現しました。",
        year: "2025年",
        duration: "2週間",
        imgSrc: "images/Frame 3.png"
    },
    {
        title: "作品タイトル 2",
        tag: "UI/UX",
        description: "ユーザビリティを追求したインタラクティブなWebサービスのUIデザイン。直感的な操作フローを意識して設計しました。",
        year: "2025年",
        duration: "1ヶ月",
        imgSrc: "images/Frame 3 2.png"
    },
    {
        title: "作品タイトル 3",
        tag: "TouchDesigner",
        description: "センサー入力と連動してリアルタイムに映像が変化するインタラクティブアート作品。没入感のある空間演出を行いました。",
        year: "2025年",
        duration: "3週間",
        imgSrc: "images/Frame 3 3.png"
    },
    {
        title: "作品タイトル 4",
        tag: "Unity",
        description: "AR技術を活用した街歩きお買い物RPGアプリケーションのプロトタイプ制作。ゲーム要素を取り入れた新しい体験設計です。",
        year: "2025年",
        duration: "1ヶ月半",
        imgSrc: "images/Frame 3 4.png"
    },
    {
        title: "作品タイトル 5",
        tag: "Illustration",
        description: "デジタルツールを用いて描いたオリジナルイラストレーション。光と影のコントラストにこだわり、世界観を構築しました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 5.png"
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

let currentIndex = 0;

// メインディスプレイを更新する関数
function updateMainDisplay(index) {
    const data = worksData[index];
    
    mainImage.src = data.imgSrc;
    mainTitle.textContent = data.title;
    mainTag.textContent = data.tag;
    mainDescription.textContent = data.description;
    mainYear.textContent = data.year;
    mainDuration.textContent = data.duration;

    // サムネイルのactive状態を更新
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
        thumbImg.alt = data.title;

        thumbDiv.appendChild(thumbImg);

        // クリック時にメインに反映
        thumbDiv.addEventListener('click', () => {
            currentIndex = index;
            updateMainDisplay(currentIndex);
        });

        thumbnailContainer.appendChild(thumbDiv);
    });
}

// 左右のボタンでの切り替え（スライダー連動）
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : worksData.length - 1;
    updateMainDisplay(currentIndex);
    scrollThumbnailIntoView();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex < worksData.length - 1) ? currentIndex + 1 : 0;
    updateMainDisplay(currentIndex);
    scrollThumbnailIntoView();
});

// 選択されたサムネイル位置までスクロールさせる
function scrollThumbnailIntoView() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    if (thumbnails[currentIndex]) {
        thumbnails[currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

// 初期化実行
initThumbnails();
updateMainDisplay(currentIndex);