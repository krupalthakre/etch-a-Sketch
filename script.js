function create_grid() {
    let num = prompt("Enter the dimension of grid");
    const grid = document.querySelector("#mgrid")
    if(num>100)
        num=100;

    for (let i = 0; i < num; i++) {
        let temp = document.createElement("div")
        temp.classList.add("horz");

        for (let j = 0; j < num; j++) {
            let box = document.createElement("div")
            box.classList.add("box");
            temp.appendChild(box);
        }
        grid.appendChild(temp);

    }
    let hover = document.querySelectorAll(".box")
    hover.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink"
        })
    })
    hover.forEach(square => {
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "white"
        })
    })
}
const but = document.querySelector(".choice")
but.addEventListener("click",create_grid)

