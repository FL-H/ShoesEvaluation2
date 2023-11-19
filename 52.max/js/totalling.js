// 変数宣言

const total = document.getElementById('total');
// const totals = document.querySelector('h2');
const max = document.getElementById('max');
const str = document.getElementById('str');
const clickstr = document.getElementById('clickstr');
var button = document.getElementsByClassName('button2');//step1

// console.log(button);

let count = 0;
let maxs = 0;
let max_total = 0;
let str_log = "最大合計値は：";
let click_log = "あなたの合計値は：";

// document.addEventListener('click', (event) => {
//     var btns = document.querySelectorAll('.button2');
//     console.log(event.target.innerHTML);
//     total.innerHTML = Number(total.innerHTML) + Number(event.target.innerHTML);

//     for (var i = 0; i < btns.length; i++) {
//         btns[i].innerHTML = Math.floor(Math.random() * 10);
//     }
//     count++;
//     // alert(count);
//     if(count == 9){
//         for (var i = 0; i < btns.length; i++) {
//             btns[i].disabled = "disabled";
//         }
//         max.innerHTML = 11;
//     }

// })

const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    // for (let i = 0; i < btns.length; i++) {
    //     const btn = btns[i];
    // }

    // btns = document.querySelectorAll('button');
    // console.log(btns.length);
    const btn = btns[i];
    // maxs = Number(btns[i].innerHTML);
    // maxs = Number(maxs) > Number(btns[i].innerHTML) ? Number(maxs) : Number(btns[i].innerHTML);
    // console.log(maxs);
    // console.log(btns[i].innerHTML);
    const func = () => {
        // btns = document.querySelectorAll('button');
        // alert(btns[i].innerHTML);
        maxs = 0;
        total.innerHTML = Number(total.innerHTML) + Number(btns[i].innerHTML);

        // maxs = Number(btns[i].innerHTML);
        for (let j = 0; j < btns.length; j++) {
            maxs = Number(maxs) < Number(btns[j].innerHTML) && btns[j].disabled == "" ? Number(btns[j].innerHTML) : Number(maxs);
        }
        max_total = max_total + maxs;
        // console.log(maxs);
        if (count > 0) {
            str_log = str_log + "+" + maxs;
            click_log = click_log + "+" + Number(btns[i].innerHTML);
        }
        else {
            str_log = str_log + maxs;
            click_log = click_log + Number(btns[i].innerHTML);
        }
        for (let k = 0; k < btns.length; k++) {
            btns[k].innerHTML = Math.floor(Math.random() * 21);
            btns[k].disabled = "";
        }

        // for (var k = 0; k < btns.length; k++) {
        //     btns[k].innerHTML = Math.floor(Math.random() * 10);
        // }

        count++;

        str.innerHTML = str_log;
        max.innerHTML = "=" + max_total;
        clickstr.innerHTML = click_log;

        for (let k = 0; k < Math.floor(Math.random() * 20) + 10; k++) {
            btns[Math.floor(Math.random() * 20)].disabled = "disabled";
        }
        // console.log(count);
        // console.log(maxs);
        /* このコード ブロックは、変数 `count` が 10 に等しいかどうかをチェックしています。10 に等しい場合は、クラス名「button2」を持つすべてのボタンの `disabled`
        属性を「disabled」に設定して無効にします。また、ID が「max」の要素の innerHTML を 11 に設定します。 */
        if (count == 10) {
            for (var l = 0; l < btns.length; l++) {
                btns[l].disabled = "disabled";
            }
            // max.innerHTML = max_total;
            clickstr.innerHTML = click_log + "<br>=" + total.innerHTML;
        }

        // ボタン要素を作成
        let add_btn = document.createElement("button");

        // ボタンのテキストを設定
        add_btn.innerHTML = Math.floor(Math.random() * 11);
        add_btn.textContent = add_btn.innerHTML;
        add_btn.value = add_btn.innerHTML;
        add_btn.className = 'button2';

        // ボタンを追加する場所を選択
        // let target = document.getElementById("target");

        // ボタンを追加
        // target.appendChild(add_btn);

        // btns = document.querySelectorAll('button');

        // console.log(btns.length);

    }
    // console.log(btns[i].innerHTML);
    btn.addEventListener('click', func);
}

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function () {
//         // alert(this.textContent);

//         // totals.innerHTML = Number(totals.innerHTML) + Number(this.textContent);
//         // total.innerHTML = Number(total.innerHTML) + Number(this.textContent);
//         // console.log("total:" + btns.length);
//         // console.log("btns :" + this.textContent);
//         // alert(total.innerHTML);
//         // alert(btns.length);
//     }, false);


// // ボタン要素を作成
// let btn = document.createElement("button");

// // ボタンのテキストを設定
// btn.innerHTML = Math.floor(Math.random() * 11);

// // ボタンを追加する場所を選択
// let target = document.getElementById("target");

// // ボタンを追加
// target.appendChild(btn);

//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var btns = document.querySelectorAll('.button2');
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function () {
//             // alert(this.textContent);

//             // totals.innerHTML = Number(totals.innerHTML) + Number(this.textContent);
//             total.innerHTML = Number(total.innerHTML) + Number(this.textContent);
//             // alert(total.innerHTML);
//             console.log(Math.floor(Math.random() * 11));
//         }, false);
//         // ボタン要素を作成
//         let btn = document.createElement("button");

//         // ボタンのテキストを設定
//         btn.innerHTML = Math.floor(Math.random() * 11);

//         // ボタンを追加する場所を選択
//         let target = document.getElementById("target");

//         // ボタンを追加
//         target.appendChild(btn);

//     }

// }, false);





// ボタン定義
// let checkButton = document.getElementById('checkButton');
// let checkButton1 = document.getElementById('checkButton1');
// let checkButton2 = document.getElementById('checkButton2');
// let checkButton3 = document.getElementById('checkButton3');
// let checkButton4 = document.getElementById('checkButton4');



// let historyButton = document.getElementById('historyButton');
// let downloadButton = document.getElementById('downloadButton');

// 評価ボタン
// checkButton.addEventListener('click', butotnClick);
// checkButton1.addEventListener('click', butotnClick);
// checkButton2.addEventListener('click', butotnClick);
// checkButton3.addEventListener('click', butotnClick);
// checkButton4.addEventListener('click', butotnClick);





// 履歴ボタン
// historyButton.addEventListener('click', historyButtonClick);

// 履歴ダウンロードボタン
// downloadButton.addEventListener('click', downloadButtonClick);