// 変数宣言

function butotnClick(){
    let checkValue = '';

    // 穴
    for (let i = 0; i < holelen; i++){
        if (holeRadio.item(i).checked){
            checkValue = Number(holeRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // しみ
    for (let i = 0; i < stainlen; i++){
        if (stainRadio.item(i).checked){
            checkValue += Number(stainRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // かかとのすりきれ
    for (let i = 0; i < worn_heelslen; i++){
        if (worn_heelsRadio.item(i).checked){
            checkValue += Number(worn_heelsRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // ほつれ
    for (let i = 0; i < frayedlen; i++){
        if (frayedRadio.item(i).checked){
            checkValue += Number(frayedRadio.item(i).value);
        }
    }

    // console.log(checkValue);

    // しわ
    for (let i = 0; i < wrinkleslen; i++){
        if (wrinklesRadio.item(i).checked){
            checkValue += Number(wrinklesRadio.item(i).value);
        }
    }

    console.log(checkValue);
    alert('評価は' + checkValue + 'です。');
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

let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', butotnClick);