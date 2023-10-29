// 変数宣言

let j = 1;
let shoesData = new Array();

// フラグ
let isFirst = true;

let shoesstatus = "";

const shoesDataList = document.getElementById("shoesData");

//表示・非表示を切り替える要素を取得
let box = document.getElementById('box');

box.style.visibility = "hidden";

let str = "No,穴,しみ,かかとのすりきれ,ほつれ,しわ,傷,評価\n";
let blob = new Blob([shoesData], { type: "text/csv" }); //配列に上記の文字列(str)を設定
let link = document.createElement('a');

// 履歴表示ボタン
function historyButtonClick() {
    changeElement(box);
    // alert('履歴ボタン');
}

// 履歴出力ボタン
function downloadButtonClick() {
    link.click();
}

//履歴の表示を変更する関数
let changeElement = (el) => {

    if (el.style.visibility == 'hidden') {
        el.style.visibility = 'visible';
        // alert('表示');
    } else {
        el.style.visibility = 'hidden';
        // alert('非表示');
    }

}

// 評価ボタン
function butotnClick() {

    let checkValue = '';
    let holeValue = '';
    let stainValue = '';
    let worn_heelsValue = '';
    let frayedValue = '';
    let wrinklesValue = '';
    let scratchValue = '';

    // 傷
    for (let i = 0; i < scratchlen; i++) {
        if (scratchRadio.item(i).checked) {
            checkValue = Number(scratchRadio.item(i).value);
            scratchValue = Number(scratchRadio.item(i).value);
        }
    }

    // 穴
    for (let i = 0; i < holelen; i++) {
        if (holeRadio.item(i).checked) {
            checkValue += Number(holeRadio.item(i).value);
            holeValue = Number(holeRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // しみ
    for (let i = 0; i < stainlen; i++) {
        if (stainRadio.item(i).checked) {
            checkValue += Number(stainRadio.item(i).value);
            stainValue = Number(stainRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // かかとのすりきれ
    for (let i = 0; i < worn_heelslen; i++) {
        if (worn_heelsRadio.item(i).checked) {
            checkValue += Number(worn_heelsRadio.item(i).value);
            worn_heelsValue = Number(worn_heelsRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // ほつれ
    for (let i = 0; i < frayedlen; i++) {
        if (frayedRadio.item(i).checked) {
            checkValue += Number(frayedRadio.item(i).value);
            frayedValue = Number(frayedRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // しわ
    for (let i = 0; i < wrinkleslen; i++) {
        if (wrinklesRadio.item(i).checked) {
            checkValue += Number(wrinklesRadio.item(i).value);
            wrinklesValue = Number(wrinklesRadio.item(i).value);
        }
    }

    // shoesData.push([j, holeValue, stainValue, worn_heelsValue, frayedValue, wrinklesValue]);

    // shoesData.push({
    //     No: j,
    //     hole: holeValue,
    //     stain: stainValue,
    //     worn_heels: worn_heelsValue,
    //     frayed: frayedValue,
    //     wrinkles: wrinklesValue,
    // })

    shoesData = [{
        No: j,
        hole: holeValue,
        stain: stainValue,
        worn_heels: worn_heelsValue,
        frayed: frayedValue,
        wrinkles: wrinklesValue,
        scratch: scratchValue,
        total: checkValue,
    }]

    // テーブルを作成する
    shoesData.forEach((player) => {  // 配列の中のオブジェクトの数だけ処理を繰り返す
        const tr = document.createElement("tr");
        shoesDataList.appendChild(tr); // 表の中に「tr」（行）ができる
        // 1行の中を生成
        const objArray = Object.entries(player);  // オブジェクトを配列に

        // フラグ
        isFirst = true;
        shoesstatus = "";

        objArray.forEach((arr) => { // 繰り返す
            const td = document.createElement("td");
            td.textContent = arr[1];  // arr[1]はvalueの部分
            tr.appendChild(td);

            // isFirst = true;
            // console.log(arr[0]);

            // 穴
            // レベル1:靴の内側の穴
            // レベル2:靴の外側にある小さな穴
            // レベル3:履くのに支障をきたす穴、足裏、かかと等

            // シミ
            // レベル1:靴の内側にあるシミ
            // レベル2:靴の外側でめだたない場所にシミがある
            // レベル3:靴の外側の目で見て目立つところにシミがある

            // かかとのすりきれ
            // レベル1:靴底のでこぼこが確認できるすりきれ
            // レベル2:靴底のでこぼこの半分以下すりきれている
            // レベル3:靴の半分以上がすりきれている

            // しわ
            // レベル1:うっすらと線がある
            // レベル2:履いた時にできるしわが残っている
            // レベル3:履いた時にできる深いしわが残っている

            // ほつれ
            // レベル1:けば立っている
            // レベル2:縫い箇所に穴が空いていない程度のほつれ
            // レベル3:縫い箇所に穴が空くレベルのほつれ

            // 傷
            // レベル1:靴の内側のキズ
            // レベル2:靴の外側に目立たないキズ
            // レベル3:靴の外側に目立つキズ

            if (isFirst) {
                isFirst = false;
            } else {

                switch (true) {
                    // switch (arr[1]) {
                    case arr[1] == 0:
                        arr[1] = "レベル0";
                        break;
                    case arr[1] == 5:
                        arr[1] = "レベル1";
                        switch (arr[0]) {
                            case "stain":
                                shoesstatus = shoesstatus + "外側目立たない場所にシミあり\n";
                                break;
                            case "worn_heels":
                                shoesstatus = shoesstatus + "すりきれ半分以下あり\n";
                                break;
                            case "frayed":
                                shoesstatus = shoesstatus + "けば立っている\n";
                                break;
                            case "wrinkles":
                                shoesstatus = shoesstatus + "うっすら線あり\n";
                                break;
                            case "scratch":
                                shoesstatus = shoesstatus + "外側目立たないキズあり\n";
                                break;
                            default:
                        }
                        break;
                    case arr[1] == 10:
                        arr[1] = "レベル2";
                        switch (arr[0]) {
                            case "hole":
                                shoesstatus = shoesstatus + "内側穴あり\n";
                                arr[1] = "レベル1";
                                break;
                            case "stain":
                                shoesstatus = shoesstatus + "内側シミあり\n";
                                break;
                            case "worn_heels":
                                shoesstatus = shoesstatus + "すりきれ弱あり\n";
                                break;
                            case "frayed":
                                shoesstatus = shoesstatus + "ほつれ少\n";
                            break;
                            case "wrinkles":
                                shoesstatus = shoesstatus + "しわあり\n";
                                break;
                            case "scratch":
                                shoesstatus = shoesstatus + "内側キズあり\n";
                                break;
                            default:
                        }
                        break;
                    case arr[1] == 20:
                        arr[1] = "レベル3";
                        switch (arr[0]) {
                            case "hole":
                                shoesstatus = shoesstatus + "外側小さな穴あり\n";
                                arr[1] = "レベル2";
                                break;
                            case "stain":
                                shoesstatus = shoesstatus + "目立つシミあり\n";
                                break;
                            case "worn_heels":
                                shoesstatus = shoesstatus + "すりきれ強あり\n";
                                break;
                            case "frayed":
                                shoesstatus = shoesstatus + "ほつれ多\n";
                            break;
                            case "wrinkles":
                                shoesstatus = shoesstatus + "深いしわ\n";
                                break;
                            case "scratch":
                                shoesstatus = shoesstatus + "外側目立つキズあり\n";
                                break;
                            default:
                        }
                        break;
                    case arr[1] == 30:
                        switch (arr[0]) {
                            case "hole":
                                arr[1] = "レベル3";
                                shoesstatus = shoesstatus + "支障穴あり\n";
                                break;
                            default:
                        }
                        break;
                    // case arr[1] > 20:
                    //     arr[1] = "不可";
                    //     break;
                    default:
                }
            }

            str += arr[1] + ",";
            // if (checkValue > 15) {
            //     td.style.backgroundColor = "yellow";
            //     // td.style.color = "#FFF";
            // }
            // if (checkValue >= 20) {
            //     td.style.backgroundColor = "red";
            // }
        });
        // 最後に改行
        str = str.replace(/.$/, "\n");
    });

    j++;

    const utf = new Uint8Array([0xef, 0xbb, 0xbf]) //ここでUTF-8を指定

    blob = new Blob([utf, str], { type: "text/csv" }); //配列に上記の文字列(str)を設定
    link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "ShoesData.csv";

    console.log(shoesData);

    if (checkValue > 0) {
        alert(shoesstatus);
    } else {
        alert('異常なし');
    }

    // if (checkValue < 20) {
    //     alert(shoesstatus + '評価は販売可能です。');
    // } else {
    //     alert(shoesstatus + '評価は販売不可です。');
    // }

    // alert('評価は' + checkValue + 'です。');

    // 初期化
    shoesData = {};
    holeRadio[0].checked = true;
    stainRadio[0].checked = true;
    worn_heelsRadio[0].checked = true;
    frayedRadio[0].checked = true;
    wrinklesRadio[0].checked = true;
    scratchRadio[0].checked = true;

    console.log(checkValue);
    console.log(shoesData);
    // alert('評価は' + checkValue + 'です。');

}

// 穴
let holeRadio = document.getElementsByName('hole');
let holelen = holeRadio.length;
holeRadio[0].checked = true;

// しみ
let stainRadio = document.getElementsByName('stain');
let stainlen = stainRadio.length;
stainRadio[0].checked = true;

// かかとのすりきれ
let worn_heelsRadio = document.getElementsByName('worn_heels');
let worn_heelslen = worn_heelsRadio.length;
worn_heelsRadio[0].checked = true;

// ほつれ
let frayedRadio = document.getElementsByName('frayed');
let frayedlen = frayedRadio.length;
frayedRadio[0].checked = true;

// しわ
let wrinklesRadio = document.getElementsByName('wrinkles');
let wrinkleslen = wrinklesRadio.length;
wrinklesRadio[0].checked = true;

// 傷
let scratchRadio = document.getElementsByName('scratch');
let scratchlen = scratchRadio.length;
scratchRadio[0].checked = true;

// ボタン定義
let checkButton = document.getElementById('checkButton');
let historyButton = document.getElementById('historyButton');
let downloadButton = document.getElementById('downloadButton');

// 評価ボタン
checkButton.addEventListener('click', butotnClick);

// 履歴ボタン
historyButton.addEventListener('click', historyButtonClick);

// 履歴ダウンロードボタン
downloadButton.addEventListener('click', downloadButtonClick);