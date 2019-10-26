function setNewColor(){
    var colorVal = '#' + Math.random().toString().slice(2, 8);
    document.querySelector(".display-color").style.background = colorVal;
    document.querySelector("#colorHexValue").innerText = colorVal;
    document.querySelector("#colorHexValue").style.color = colorVal;
}
setNewColor();
document.querySelector("#generateNewColor").addEventListener('click', setNewColor);