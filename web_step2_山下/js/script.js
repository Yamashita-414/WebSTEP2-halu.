document.addEventListener('DOMContentLoaded', () => {
    // 1. カルーセルの画像要素をすべて取得する
    const images = document.querySelectorAll('.p-kv__image');
    
    //今何枚目を表示しているかを管理する変数
    let currentIndex = 0; 

    // 画像を切り替える関数を定義する
    const showNextImage = () => {
        // 最初の画像からis-activeを消す
        images[currentIndex].classList.remove('is-active'); 

        // currentIndexの数字を＋1する
        currentIndex = (currentIndex + 1) % images.length;

        // 次の画像にis-activeを付与する
        images[currentIndex].classList.add('is-active');
    };

    // showNextImage関数を呼び出す
    // showNextImage();
    setInterval(showNextImage, 4000);

});

    // 2. コンソールに出力して確認！
    // console.log(images);
    // });

window.addEventListener('DOMContentLoaded', () => {
    // アクティブな商品（3枚目）を取得
    const activeUnit = document.querySelector('.p-product__unit.is-active');

    if (activeUnit) {
        // 3枚目の要素が真ん中に来るように一瞬でスクロールさせる
        activeUnit.scrollIntoView({
            behavior: 'instant', // ページ読み込み時に一瞬で真ん中に配置（パッと切り替わる）
            inline: 'center',    // 横方向の中央に合わせる
            block: 'nearest'     // 縦方向の余計なスクロールを防ぐ
        });
    }

    // console.log(activeUnit);
});


