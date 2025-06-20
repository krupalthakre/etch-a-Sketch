
const grid=document.querySelector("#mgrid")

for(let i=0;i<16;i++){
    let temp=document.createElement("div")
    temp.classList.add("horz");
    
    for(let j=0;j<16;j++){
        let box=document.createElement("div")
        box.classList.add("box");
        temp.appendChild(box);
    }
    grid.appendChild(temp);
   
}
let hover=document.querySelectorAll(".box")
hover.forEach(square=>{
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor="red"
    })
})
hover.forEach(square=>{
    square.addEventListener("mouseout",()=>{
        square.style.backgroundColor="white"
    })
})
