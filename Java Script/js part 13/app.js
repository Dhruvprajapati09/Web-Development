let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");
btn.addEventListener("click", async function() {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await GetCollages(country);
    console.log(colArr);

    show(colArr);
}); 

function show(colArr) {
    let list = document.getElementById("List");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function GetCollages(country) {
    try {
    let res = await axios.get(url + country);
     return res.data;
    } catch (error) {
        console.log("Error:", error);
        return [];
    }
}