const userInput = document.getElementById("userInput")
const allItems = document.getElementById("allItems")
pencil.addEventListener("click",function(){
    allItems.innerHTML = " ";
})
userInput.addEventListener("keydown",function(event){
    if (event.key == "Enter") {
        additems()
    }
})
count = 1
function additems() {
    let No = count ++
    const para = document.createElement("p");
    para.innerHTML = No+"." +" " + userInput.value 
    para.addEventListener("click", function(){
        para.style.setProperty("text-decoration","line-through") 
    })
    allItems.insertAdjacentElement("beforeend",para);
}



