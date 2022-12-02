const slides = document.querySelector(".slider").children;
const indicatorImgs = document.querySelector(".indicator").children;

for (let i = 0; i < indicatorImgs.length; i++) {
  indicatorImgs[i].addEventListener("mouseover", function () {
    for (let j = 0; j < indicatorImgs.length; j++) {
      indicatorImgs[j].classList.remove("active");
    }

    indicatorImgs[i].classList.add("active");

    const id = indicatorImgs[i].getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}

const first=document.querySelector("#first");
const second=document.querySelector('#second');
const third=document.querySelector('#third');
const fourth=document.querySelector('#fourth');
const five=document.querySelector('#fifth');
const six=document.querySelector('#sixth');



first.onclick = function() {window.location.href =  "/Cricket/index.html"
 };  
second.onclick = function() {window.location.href ='/Football/index.html'
 };  
third.onclick = function() {window.location.href = '/Basketball/index.html'
 };  
fourth.onclick = function() {window.location.href =  '/volleyBall/index.html'
 };  
five.onclick = function() {window.location.href = '/TT/index.html'
 };  
six.onclick = function() {window.location.href =  '/Badmintion/index.html'
 };  

 