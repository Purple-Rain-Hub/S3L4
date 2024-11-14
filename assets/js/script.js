const tombolone = document.getElementById("tombolone");
const btnEstrai = document.getElementById("estrai");
const newSpan = document.getElementById("div1");


document.addEventListener("load", init());


function init() {
    creazioneCelle();
}
btnEstrai.addEventListener("click", numeriRandom);

function creazioneCelle() {
    for (let i = 0; i < 90; i++) {
        const celle = document.createElement("div");
        celle.innerText = i + 1;
        celle.setAttribute("id", `${ i }`);
        tombolone.appendChild(celle);
    };
}


function numeriRandom() {
    const num = Math.floor(Math.random() * 90) + 1;
    let num2 = document.getElementById(`${ num }`);
    if (num2.classList.contains("highlight")) {
        numeriRandom();
    }
    else{
        newSpan.innerText = `Il numero estratto è ${ num + 1 }`;
        num2.classList.add("highlight");
    }


}