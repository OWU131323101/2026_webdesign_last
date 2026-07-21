document.addEventListener('DOMContentLoaded', () => {
  // 必要な要素を取得
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('portfolio-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const closeBtn = document.querySelector('.modal-close');

  // クリックしたときの処理
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      // クリックした要素の中から画像、タイトル、タグの情報を取得
      const imgSrc = item.querySelector('img').src;
      const titleText = item.querySelector('p').textContent;
      const tagText = item.querySelector('.item-tag').textContent;
      const detailsElement = item.querySelector('.item-details');
      const detailsText = detailsElement ? detailsElement.innerHTML : '詳細情報はありません。';

      // 取得した情報をモーダル内にセット
      modalImage.src = imgSrc;
      modalTitle.textContent = titleText;
      modalTag.textContent = tagText;
      document.getElementById('modal-description').innerHTML = detailsText;

      // モーダルを表示する（display: flex にして中央配置を効かせる）
      modal.style.display = 'flex';
    });
  });

  // 2. 閉じるボタン(×)をクリックしたときの処理
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // モーダルの外側（黒い背景部分）をクリックしたときも閉じる処理
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});