let lineLeft=document.querySelector(".line_left");
let lineRight=document.querySelector(".line_right");
let slides=document.querySelector(".slides");
let slide=document.querySelector(".slide");
let allSlide=document.querySelectorAll(".slide .image_block");
let textLink = document.querySelector('.post_text1');

let linksText = ['лекция о влиянии дыхания на эмоции','семинар по определению истинного Я','практикум по медитации','мастер-класс по оригами']
console.log(slide.offsetWidth);
let move=0;
let count=0;
lineRight.addEventListener("click",function(){
    move=move+slide.offsetWidth;
    count++;
    textLink.textContent = linksText[count];
    if(count>3){
        move=0;
        count=0;
    }
    textLink.textContent = linksText[count];
    slides.style.marginLeft= - move + "px";
})
lineLeft.addEventListener("click",function(){
    move=move-slide.offsetWidth;
    count--;
    
    if(count<0){
        count=3;
        move=count*slide.offsetWidth;
    }
    textLink.textContent = linksText[count];
    slides.style.marginLeft= - move + "px";
})

allSlide.forEach(item=>{
    let slideImages=item.querySelectorAll("img");
    slideImages.forEach(image=>{
        image.addEventListener("mousemove",function(e){
            let x=(item.offsetWidth/2-e.layerX)/17;
            let y=-(item.offsetHeight/2-e.layerY)/17;
            image.addEventListener("click",function(){
                console.log(x,y); 
                console.log(item.offsetWidth/2-e.clientX);
            });
            image.style.transform=`rotateY(${x}deg) rotateX(${y}deg) scale(1.1)`;
        });
        image.addEventListener("mouseenter",function(){
            image.style.transition="none";
            image.style.transform=`rotateY(${x}deg) rotateX(${y}deg) scale(1.1)`;
        });
        image.addEventListener("mouseleave",function(){
            image.style.transition="all 1.2s ease";
            image.style.transform="rotateY(0deg) rotateX(0deg) scale(1)";
        });
    });
});