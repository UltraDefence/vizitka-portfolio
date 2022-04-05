let opened = false;
let current = 0;
let timePr = setInterval(() => {proverka()}, 1);
let link1 = "[link]";

function open1(value){
    opened = !opened;
    current = value;
    if(opened == true){
        document.getElementById('preview').style.display = 'block';
        document.getElementById('body').style.overflowY = "hidden";
    }
    else{
        document.getElementById('preview').style.display = 'none';
        document.getElementById('body').style.overflowY = "visible";
    }
}
function left(){
    current--;
    fastAn();
}
function rightT(){
    current++;
    fastAn();
}
function C$A$S$E(){
    switch(current){
        case 1: document.getElementById('previewimg').setAttribute("src","../img/1.jpg");
        break;
        case 2: document.getElementById('previewimg').setAttribute("src","../img/2.jpg");
        break;
        case 3: document.getElementById('previewimg').setAttribute("src","../img/3.jpg");
        break;
        case 4: document.getElementById('previewimg').setAttribute("src","../img/4.jpg");
        break;
        case 5: document.getElementById('previewimg').setAttribute("src","../img/5.jpg");
        break;
    }
}
function proverka(){
    C$A$S$E();
    if(current <= 0){
        current = 5;
    }
    if(current >= 6){
        current = 1;
    }
}
function fastAn(){
    document.getElementById("previewimg").style.display = 'none';
    document.getElementById("previewimg").style.display = 'block';
}
function redirect$(link){
    document.getElementById('body').style.overflowY = "hidden";
    document.getElementById("redirect").style.display = "flex";
    document.getElementById("txt").innerHTML = "Осуществлять ли переход на ссылку " + link + "?";
    link1 = link;

}
function Y(){document.location.href = link1;}
function N(){document.getElementById("redirect").style.display = "none";document.getElementById('body').style.overflowY = "visible";}
