document.addEventListener('DOMContentLoaded', () => {
  // ページ内のすべてのスライダー要素を取得
  const containers = document.querySelectorAll('.comparison-slider');

  if (containers.length > 0) { // ★要素が存在するときだけ実行
    containers.forEach(container => {
      // コンテナ内部の要素だけをピンポイントで取得
      const slider = container.querySelector('.slider');
      const imageAfter = container.querySelector('.image-after');
      const sliderLine = container.querySelector('.slider-line');

      // スライダーの数値を元にクリップ領域を動かす関数
      const updateSlider = (value) => {
        // 画像自体は縮めず、表示するクリップ領域（右側の境界線）だけを動かす
        imageAfter.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
        // 仕切り線の位置を変更
        sliderLine.style.left = `${value}%`;
      };

      // コンテナ内の子要素がすべて揃っているかも念のためチェック
      if (slider && imageAfter && sliderLine) {
        // 該当するスライダーの操作を監視 (input と change の両方に対応)
        ['input', 'change'].forEach(eventType => {
          slider.addEventListener(eventType, (e) => {
            updateSlider(e.target.value);
          });
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('banner-modal');
  if (modal) {
    const modalClose = modal.querySelector('.modal-close');
    
    // モーダル内の書き換え対象要素たち
    const mImg = document.getElementById('modal-img');
    const mTitle = document.getElementById('modal-title');
    const mTarget = document.getElementById('modal-target');
    const mPurpose = document.getElementById('modal-purpose');
    const mPoints = document.getElementById('modal-points');

    // 全てのバナーカードに対してクリックイベントを設定
    document.querySelectorAll('.js-modal-open').forEach(card => {
      card.addEventListener('click', () => {
        // data属性からデータを取得してモーダルにセット
        mImg.src = card.dataset.img;
        mImg.alt = card.dataset.title;
        mTitle.textContent = card.dataset.title;
        mTarget.textContent = card.dataset.target;
        mPurpose.textContent = card.dataset.purpose;
        mPoints.textContent = card.dataset.points;

        // モーダルを表示
        modal.classList.add('is-active');
        modal.removeAttribute('inert'); // inertを外して操作可能にする
        document.body.style.overflow = 'hidden'; // 背景スクロール禁止
      });
    });

    // モーダルを閉じる処理（バツボタン、または背景クリック）
    const closeModal = () => {
      modal.classList.remove('is-active');
      modal.setAttribute('inert', ''); // inertを付けて完全に無効化する
      document.body.style.overflow = ''; // スクロール再開
      mImg.src = ''; // メモリ解放のため画像パスをクリア
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(); // 背景クリック時
    });
  }
});
