h1 = document.querySelector("h1");

function changeColor(color , delay){
    return new Promise((resolve , reject) => {
    setTimeout(() => {
        h1.style.color = color;
        resolve();
    }, delay);
}  );
}

changeColor("red" , 1000)
.then(() => {
    return changeColor("blue" , 1000);
}).then(() => {
    return changeColor("green" , 1000);
}).then(() => {
    return changeColor("yellow" , 1000);
}).then(() => {
    return changeColor("purple" , 1000);
}).then(() => {
    return changeColor("pink" , 1000);
}).then(() => {
    return changeColor("orange" , 1000);
}).catch(() => {
    console.log("error in changing color");
});

// function saveDb(data , success , failure){
//     let dbserver = Math.floor(Math.random() * 10);
//     if(dbserver > 5){
//         success();
//     }else{
//         failure();
//     }   
// }

// saveDb("user data" , () => {
//     console.log("data saved successfully"); 
//     saveDb("strong data" , () => {
//         console.log("strong connection saved successfully"); 
//     saveDb("very strong connection" ,() => {
//         console.log("very strong connection saved successfully");
//     }, () => {
//         console.log("very week connection failed to save data");
//     });
// }, () => {
//     console.log(" week connection failed to save strong data");
// });
// }, () => {
//     console.log("failed to save data");
// });

function saveTODb(data){
    return new Promise ((resolve , reject) => {
    let internetspeed = Math.floor(Math.random() * 10 + 1);
    if(internetspeed > 5){
        resolve("data saved successfully");
    }else{
        reject("failed to save data");
    }   
});
}

saveTODb("user data").then((result) => { 
    console.log("DATA1 SAVED");
    console.log("resilt of first promise" , result);
    return saveTODb("strong data")
}).then((result) => {
    console.log("DATA2 SAVED");
    console.log("result of second promise" , result);
    return saveTODb("very strong data")
}).then((result) => {
    console.log("DATA3 SAVED");
    console.log("result of third promise" , result);     
}).catch((error) => {
    console.log("promise rejected - failed to save data");
    console.log("error" , error);
});


