const container = document.body.querySelector(".container");
container.setAttribute("style", "display:flex; flex-direction:column; align-items: center; justify-content:center;")
let count = 1;
let counter = 1;

const row = document.createElement("div");
row.setAttribute("style", "display:flex; margin:0px;")


// This loop makes the rows
while(count <= 16){
    let square = document.createElement("div");
    square.setAttribute("style", "width: 50px; height: 50px; background-color: gray; margin:1px");
    square.classList.add("square")
    row.appendChild(square);
    count = count + 1;
}



// This loop adds rows
while(counter <= 16){
    container.appendChild(row.cloneNode(true));
    counter = counter + 1;
}

const rows = container.querySelectorAll("div")

rows.forEach(row =>{
    const squares = row.querySelectorAll(".square")
    squares.forEach(squared => {
    squared.addEventListener("mouseover", function() {
        const fir = Math.floor(Math.random()*255)
        const sec = Math.floor(Math.random()*255)
        const thi = Math.floor(Math.random()*255)
        squared.style.backgroundColor = `rgb(${fir},${sec},${thi})`;
    })
    })
})



