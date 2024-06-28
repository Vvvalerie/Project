let formaBlock=document.querySelector(".forma_block");
let buttomLopnut=document.querySelector(".lopnut");
let resultForm=document.querySelector(".result_form");
buttomLopnut.addEventListener("click",function(e){
    e.preventDefault();
    formaBlock.style.display="none";
    resultForm.style.display="block";
});