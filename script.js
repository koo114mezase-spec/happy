const cake = document.getElementById("cake");
const plate = document.getElementById("plate");

// ロウソク差分（2枚だけに変更）
const cakeFrames = [
    "images/cake1.png",
    "images/cake2.png"
];

let frame = 0;
let animationActive = true;
let cakeCut = false;

// パラパラアニメ
setInterval(() => {

    if (!animationActive) {
        return;
    }

    cake.src = cakeFrames[frame];

    frame++;

    if (frame >= cakeFrames.length) {
        frame = 0;
    }

}, 350);

// 超重要
// cake は pointer-events: none なので
// ダブルクリック判定は plate に付ける
plate.addEventListener("dblclick", () => {

    // 一回だけ
    if (cakeCut) {
        return;
    }

    cakeCut = true;

    // アニメ停止
    animationActive = false;

    // 切られたケーキへ変更
    cake.src = "images/cake_cut.png";

    // 皿は最初から表示済みなので変更不要

});

// 皿クリックで次ページ
plate.addEventListener("click", () => {

    // ケーキ切った後だけ移動
    if (!cakeCut) {
        return;
    }

    window.location.href = "next.html";

});