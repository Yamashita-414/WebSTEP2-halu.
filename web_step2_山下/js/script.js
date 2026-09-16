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