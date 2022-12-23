let slideImg1 = document.querySelector(".slide-img1");
let slideImg2 = document.querySelector(".slide-img2");
let slideImg0 = document.querySelector(".slide-img0");

let num = 1;
let setIntevalFunction = setInterval(function() {
    document.getElementById("rd"+num).checked = true;
    num++;
    if (num>3) {
        num = 1;
    }


},3000);

