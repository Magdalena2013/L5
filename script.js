let btn = document.getElementById("btn");
function changeTxt(btn){
    btn.innerHTML = "Oooops";
    btn.style.color = "red";
}

document.getElementById("btn")
.addEventListener("click", changeTxt)

