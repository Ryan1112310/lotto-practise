// console.log(getlottoNumber(1, 49, 6, true));
//函式表達式
// const getBmi2 = (height, weight, point = 2) => (weight / (height / 100)**2).toFixed(point);
// const randInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

// users = [
//     {
//         name: 'jerry',
//         email: 'jerry@gmail.com',
//         password: '12345678',
//     },
//     {
//         name: 'Mary',
//         email: 'mary@gmail.com',
//         password: '123456',
//     },
//     {
//         name: 'kevin',
//         email: 'kevin@gmail.com',
//         password: '111111',
//     },
// ]

// users.forEach((user) => {
//     document.write(`${user["name"]}<br>${user["email"]}<br>`)    
// });

// for (let i = 0; i < users.length; i++){
//     document.write(`${users[i]["name"]}<br>`);
//     document.write(`${users[i]["email"]}<br>`);
//     document.write(`${users[i]["password"]}<br>`);
// }

const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector("div.lotto-number ul");
const startEl = document.querySelector("#start");
console.log(startEl);

const randInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

dateEl.forEach(element => element.innerText = "2024/01/19");

startEl.addEventListener("click", () => {
    lottoEl.innerHTML = " ";

    for (let i = 0; i < 6; i++){
        const numbers = getLottoNumber(1, 49, 6, true).join(",");
        lottoEl.innerHTML +=  `<li>${numbers}</li>`;
}
});

console.log(getBmi(180, 74, 3));

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



