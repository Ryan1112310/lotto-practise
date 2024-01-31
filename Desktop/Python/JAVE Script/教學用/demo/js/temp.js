//宣告二維陣列
    //請使用prompt輸入學生個數
    //每個學生有[姓名/國文/數學/英文](const)
    // let students = [];
    // const count = prompt("請輸入學生數量:");
    // const SUBJECTS = ["國文", "英文","數學"];

    // for (let i = 0; i < count; i++) {
    //     let data = [];
    //     data.push(prompt("請輸入學生姓名"));
    //     for (let j = 0; j<SUBJECTS.length; j++) {
    //         let scores =prompt(`請輸入${SUBJECTS[j]}分數:`);
    //         if (isNaN(scores)){
    //             j--;
    //             continue;
    //         }
    //         data.push(Number(scores)); 
    //     }
    //     students.push(data);
    // }
    // console.log(students);
    // let str = "";
    // for (let i = 0;i < students.length; i++) {
    //     console.log(students[i]);
    //     let name = students[i][0];
    //     let scores = students[i].slice(1, students[i].length);
    //     console.log(scores);
    //     let total = 0;
    //     for (let j = 0; j<scores.length; j++){
    //         total += scores[j];
    //     }
    //     let avg = total / scores.length;
    //     console.log(name, total, avg.toFixed(2));
    //     str+=`<h2>${name} ${total} ${avg.toFixed(2)}</h2>`;
    // }
    // document.write(str);

//     let x = -7.7;
//    console.log(Math.abs(x));
//    console.log(Math.ceil(x));
//    console.log(Math.floor(x));
//    console.log(Math.round(x));

//    console.log(Math.random());
//    console.log(Math.random() * 10);
//    // 0~9
//    console.log(Math.floor(Math.random() * 10));
//    // 1~10
//    console.log(Math.floor(Math.random() * 10) + 1);
//    // 10~100
//    let w = 49;
//    let z = 1;
//    console.log(Math.floor(Math.random() * (w - z + 1)) + z);

//     for (let j = 0; j < 6; j++){
//         // console.log("第" + (j + 1) + "組號碼為:");
//         document.write(`<h2>第${j + 1}組號碼:</h2>`);
//         let lotto = [];
//         let str = "<h2>"
//         for (a = 0; a<6; a++){
//             let x =Math.floor(Math.random() * (w - z + 1)) + z;
//             lotto.push(x);
//             // document.write(`<h3>第${a + 1}個號碼:${x}</h3>`);
//             }
//         str += lotto.join(" ") + "</h2>";
//         document.write(str);

//         console.log(lotto);
//         console.log(lotto.length);
//         console.log(lotto.join(","));
//     }




    // const PI = 3.1415926;
    // console.log(PI);

    // let x = Number(prompt("X"));
    // let y = Number(prompt("Y")); 
    // document.write("X+Y="+(x+y));
    // alert("X+Y="+(x+y));

    // let r = prompt("請輸半徑:");
    // console.log(r,typeof(r));
    // let area = 0;
    // area = r**2+PI;

    // if (r >= 10); {
    //     let r = "5";
    //     console.log(r**2*PI);
    //     area = r**2*PI;
    // }

    // console.log(r,typeof(r));
    // document.write("<h2>半徑為"+area+"</h2>");
    // alert("半徑為"+area);