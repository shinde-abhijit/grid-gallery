var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');
var bodyDark = document.querySelector("#dark");

// fullscreen view 
function openImg(pic){
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}


// Close button Code
function closeImg(pic){
    fullImgBox.style.display = 'none';
}


// Dark Mode Function

function darkMode(){
    bodyDark.classList.toggle("darkMode");
}


