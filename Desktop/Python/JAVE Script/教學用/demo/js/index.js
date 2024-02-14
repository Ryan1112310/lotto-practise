const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector("div.lotto-number");
const startEl = document.querySelector("#start");
console.log(startEl);

const randInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

startEl.addEventListener("click", () => {
    // 清空元素內容
    lottoEl.innerHTML = "";
    dateEl[1].innerHTML=getTime(false);
    
    geneLottoTable();
    // geneLottoLi();

const lottoLi = document.querySelectorAll(".lotto-number ul li");
for (let i = 0 ; i < lottoLi.length; i++ ){
    if (i % 2 == 0){
        lottoLi[i].style.color = "orange";
        lottoLi[i].style.backgrondColor = "black";
    }
}
});

function geneLottoTable(){
    let tempStr="<table><tbody>";
    //<table> <thead><tr><th></th></tr></thead> <tbody><tr><td></td></tr></tbodt></table>
    for (let i = 0; i < 6; i++){
        tempStr+="<tr>";
        const numbers = getLottoNumber(1, 49, 6, true);
        for(let j = 0; j < numbers.length; j++){
            tempStr +=  `<td>${numbers[j]}</td>`;
        }
        tempStr += "</tr>"; 
    }

    tempStr+="</tbody></table>";
    lottoEl.innerHTML = tempStr;
}

function geneLottoLi(){
    for (let i = 0; i < 6; i++){
        const numbers = getLottoNumber(1, 49, 6, true).join(" ");
        lottoEl.innerHTML +=  `<li>${numbers}</li>`;
    }
}

let falsh = true;

function falshLotto(){
    falsh = !falsh;
    const lottoLi = document.querySelectorAll(".lotto-number ul li");
    for (let i = 0 ; i < lottoLi.length; i++ ){
        if (i % 2 == 0){
            lottoLi[i].style.color = "orange";
            if (falsh){
                lottoLi[i].style.backgrondColor = "black";
            }else{
                lottoLi[i].style.backgrondColor = "white";
            }
        }
    }
}

function getTime(fullTime = true){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = String(now.getSeconds()).padStart(2, "0");

    if(fullTime){
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }
    return `${year}/${month}/${date}`;
    }

function showTime(){
    dateEl[0].innerHTML = getTime();
    setTimeout(() => {
        showTime();
     }, 1000);
}

function getBmi(height, weight, point = 2) {
    return (weight / (height / 100) ** 2).toFixed(point);
}

function getLottoNumber(start, end, number, special = false){
    let lotto = [];
    do {
        let x = randInt(start, end);
        if (!lotto.includes(x)) {
            lotto.push(x);
        }
    }while (lotto.length < number);

    lotto.sort((a, b) => a - b);

if (special){
    lotto.push(randInt(start, end));
}
return lotto;
}



