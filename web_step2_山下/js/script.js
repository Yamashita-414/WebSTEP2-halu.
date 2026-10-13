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

    console.log('aiueo');

    //横スクロールする親トラックを取得
    const track = document.querySelector('.p-product__track');

    // アクティブな商品（3枚目）を取得
    const activeUnit = document.querySelector('.p-product__unit.is-active');

    if (track && activeUnit) {
        // （offsetLeft(3枚目要素の左端の位置)）- (トラック幅/2) + (要素幅/2) を計算して中央位置を決定
        const scrollPosition = activeUnit.offsetLeft - (track.clientWidth / 2) + (activeUnit.clientWidth / 2);
        
        // ページ全体のスクロールは動かさず、トラックの横スクロール位置だけをセット
        track.scrollLeft = scrollPosition;
    }

    // console.log(activeUnit);

});

    // 2. コンソールに出力して確認！
    // console.log(images);
    // });



