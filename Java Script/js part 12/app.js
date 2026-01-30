<<<<<<< HEAD
function getNum(){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            console.log(num);
            resolve();
        } , 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    
}

let h1 = document.querySelector("h1");

function changeColor(color , delay){
    return new Promise((resolve , reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 5 + 1);
        if (num > 3){
            reject("promise rejected" );
        }
        h1.style.color = color;
        resolve();
    }, delay);
}  );
}

async function colorChangeDemo(){
    try{
    await changeColor("red" , 1000); console.log("red color applied");
    await changeColor("blue" , 1000); console.log("blue color applied");
    await changeColor("green" , 1000); console.log("green color applied");
    await changeColor("yellow" , 1000); console.log("yellow color applied");    
    await changeColor("green" , 1000); console.log("green color applied");
    await changeColor("yellow" , 1000); console.log("yellow color applied");
    await changeColor("purple" , 1000); console.log("purple color applied");
    await changeColor("pink" , 1000); console.log("pink color applied");
    await changeColor("orange" , 1000); console.log("orange color applied");
    } catch(err){
        console.log("error in changing color");
        console.log(err);
    }

    let a = 10;
    let sum = a + 20;
    console.log(sum);
}
=======
// function getNum(){
//     return new Promise((resolve ,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             console.log(num);
//             resolve();
//         } , 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
    
// }

// let h1 = document.querySelector("h1");

// function changeColor(color , delay){
//     return new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let num = Math.floor(Math.random() * 5 + 1);
//         if (num > 3){
//             reject("promise rejected" );
//         }
//         h1.style.color = color;
//         resolve();
//     }, delay);
// }  );
// }

// async function colorChangeDemo(){
//     try{
//     await changeColor("red" , 1000); console.log("red color applied");
//     await changeColor("blue" , 1000); console.log("blue color applied");
//     await changeColor("green" , 1000); console.log("green color applied");
//     await changeColor("yellow" , 1000); console.log("yellow color applied");    
//     await changeColor("green" , 1000); console.log("green color applied");
//     await changeColor("yellow" , 1000); console.log("yellow color applied");
//     await changeColor("purple" , 1000); console.log("purple color applied");
//     await changeColor("pink" , 1000); console.log("pink color applied");
//     await changeColor("orange" , 1000); console.log("orange color applied");
//     } catch(err){
//         console.log("error in changing color");
//         console.log(err);
//     }

//     let a = 10;
//     let sum = a + 20;
//     console.log(sum);
// }
>>>>>>> 970f22c6aa8b1559a4dce2153c0e305bd07efc17

let Jsonres = '{"message":"https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_6140.jpg","status":"success"}';
let validJson = JSON.parse(Jsonres);
console.log(validJson.message);
