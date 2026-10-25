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

    //以下自動スライド
    const units = document.querySelectorAll('.p-product__unit');
    
    if (!track || units.length === 0) return;

    // 現在アクティブなユニットのインデックス（デフォルトは3番目なので index 2）
    let productCurrentIndex = 2; 

    // --- 1. 指定したインデックスへスライド・クラス付け替えを行う関数 ---
    function moveToSlide(index) {
        // 全てのユニットから is-active を外す
        units.forEach(unit => {
            unit.classList.remove('is-active');
        });

        // 該当のユニットに is-active を付与（これでCSSによりぼかしが解除＆拡大される）
        const targetUnit = units[index];
        targetUnit.classList.add('is-active');

        // トラック内での横スクロール位置を計算して中央にスライドさせる
        const scrollPosition = targetUnit.offsetLeft - (track.clientWidth / 2) + (targetUnit.clientWidth / 2);
        
        track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth' // スムーズにループ・移動させる
        });
    }

    // --- 2. 初期表示（3番目を中央にセット。初回はアニメーションなしで即座に配置） ---
    // ※初回だけパッと表示したい場合は scrollLeft を直接使うか、瞬時に移動させます
    const initialUnit = units[productCurrentIndex];
    const initialPos = initialUnit.offsetLeft - (track.clientWidth / 2) + (initialUnit.clientWidth / 2);
    track.scrollLeft = initialPos;


    // --- 3. 次のインデックスに進める関数（無限ループ対応） ---
    function nextSlide() {
        productCurrentIndex++;

        // 最後のユニット（5番目：index 4）を超えたら、最初のユニット（index 0）に戻す
        if (productCurrentIndex >= units.length) {
            productCurrentIndex = 0;
        }

        moveToSlide(productCurrentIndex);
    }


    // --- 4. 5秒間隔（5000ミリ秒）で自動スライドを実行 ---
    let slideInterval = setInterval(nextSlide, 5000);

});

    // 2. コンソールに出力して確認！
    // console.log(images);
    // });



