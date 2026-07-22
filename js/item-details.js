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
        title: "Webサイトデザイン",
        tag: "Figma",
        description: "ユーザビリティを追求したインタラクティブなWebサービスのUIデザイン。直感的な操作フローを意識して設計しました。",
        year: "2025年",
        duration: "1ヶ月",
        imgSrc: "images/Frame 3 2.png"
    },
    {
        title: "3Dキャラクター",
        tag: "VRoid Studio",
        description: "VRoid Studioを使用して制作したオリジナル3Dキャラクター。表情や衣装のディテールにこだわり、個性を引き出しました。",
        year: "2025年",
        duration: "3週間",
        imgSrc: "images/Frame 3 3.png"
    },
    {
        title: "アイコンデザイン",
        tag: "Photoshop",
        description: "Photoshopを用いたアイコンデザインの制作事例。シンプルで視認性の高いデザインを心がけ、ブランドイメージに合わせたアイコンセットを作成しました。",
        year: "2025年",
        duration: "1ヶ月半",
        imgSrc: "images/Frame 3 4.png"
    },
    {
        title: "ナイスキャッチ",
        tag: "Photoshop",
        description: "Photoshopを使用して制作した「ナイスキャッチ」のデザイン作品。スポーツの瞬間を捉えたダイナミックなビジュアル表現を意識しました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 5.png"
    },
    {
        title: "Web広告バナー",
        tag: "Photoshop",
        description: "Photoshopを使用して制作したWeb広告バナーのデザイン事例。視覚的に訴求力のあるデザインで、クリック率向上を目指しました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 6.png"
    },
    {
        title: "リアル尋問室",
        tag: "Unity",
        description: "Unityを使用して制作した「リアル尋問室」のデザイン作品。インタラクティブな体験を提供するためのシステム設計と実装を行いました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 7.png"
    },
    {
        title: "酒場での一幕",
        tag: "Blender",
        description: "Blenderを使用して制作した「酒場での一幕」の3Dモデリング作品。リアルな環境と質感を表現しました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 8.png"
    },
    {
        title: "アプリケーションデザイン",
        tag: "illustrator",
        description: "illustratorを使用して制作したアプリケーションデザインの事例。ユーザーインターフェースの使いやすさと視覚的な魅力を両立させたデザインを心がけました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/Frame 3 9.png"
    },
    {
        title: "歩行モーション",
        tag: "Photoshop",
        description: "Photoshopを使用して制作した「歩行モーション」のデザイン作品。自然な動きを表現しました。",
        year: "2024年",
        duration: "1週間",
        imgSrc: "images/walk.gif"
    },
    {
        title: "360度動画",
        tag: "Unity",
        description: "Unityを使用して制作した360度動画の事例。没入感のある映像体験を提供するためのシーン設計とレンダリングを行いました。",
        year: "2024年",
        duration: "1週間",
        url: "https://youtu.be/olhtqszlPKo",
        imgSrc: "images/mq3.jpg"
    }
];

// DOM要素の取得
const mediaContainer = document.getElementById('media-container');
const mainTitle = document.getElementById('main-title');
const mainTag = document.getElementById('main-tag');
const mainDescription = document.getElementById('main-description');
const mainYear = document.getElementById('main-year');
const mainDuration = document.getElementById('main-duration');
const thumbnailContainer = document.getElementById('thumbnail-container');
const portfolioContainer = document.getElementById('portfolio-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const isDetailPage = mediaContainer && mainTitle && mainTag && mainDescription && mainYear && mainDuration && thumbnailContainer;
const listContainer = thumbnailContainer || portfolioContainer;

function getYouTubeEmbedUrl(url) {
    if (!url) return '';

    const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
    const videoId = watchMatch ? watchMatch[1] : shortMatch ? shortMatch[1] : null;

    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

// メインディスプレイを更新する関数
function updateMainDisplay(index) {
    const data = worksData[index];
    const isYouTube = Boolean(data.url && /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(data.url));

    mediaContainer.innerHTML = '';

    if (isYouTube) {
        const iframe = document.createElement('iframe');
        iframe.src = getYouTubeEmbedUrl(data.url);
        iframe.title = `${data.title} 動画`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
    } else {
        const img = document.createElement('img');
        img.id = 'main-image';
        img.src = data.imgSrc;
        img.alt = data.title;
        mediaContainer.appendChild(img);
    }

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
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (isDetailPage) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : worksData.length - 1;
            updateMainDisplay(currentIndex);
            scrollThumbnailIntoView();
        } else if (listContainer) {
            scrollList(listContainer, -1);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (isDetailPage) {
            currentIndex = (currentIndex < worksData.length - 1) ? currentIndex + 1 : 0;
            updateMainDisplay(currentIndex);
            scrollThumbnailIntoView();
        } else if (listContainer) {
            scrollList(listContainer, 1);
        }
    });
}

// 横スクロールを実行する汎用関数
function scrollList(container, direction) {
    const distance = container.clientWidth * 0.8;
    container.scrollBy({
        left: distance * direction,
        behavior: 'smooth'
    });
}

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
if (isDetailPage) {
    initThumbnails();
    updateMainDisplay(currentIndex);
}