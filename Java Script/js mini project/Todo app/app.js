let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText =inp.value;
    ul.appendChild(item);
    console.log(inp.value);

    let dltBtn = document.createElement("button");  
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);
     inp.value = "";
});

    ul.addEventListener("click", function(event){
        if(event.target.nodeName === "BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("deleted");
        
        }
    });



    // let dltBtns = document.querySelectorAll(".delete");
    // for(dltBtn of dltBtns){
    //     dltBtn.addEventListener("click", function(){
    //         let para = this.parentElement;
    //         console.log(para);
    //         para.remove()
            
    //     });

