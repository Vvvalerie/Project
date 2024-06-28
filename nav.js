let tantraLinks=document.querySelector(".tantra_links");
let tantraLink=document.querySelector(".tantra_link");
console.log(tantraLink,tantraLinks);
tantraLink.addEventListener("mouseenter",function(){
    tantraLinks.classList.add("active");
});
tantraLink.addEventListener("mouseleave",function(){
    tantraLinks.classList.remove("active");
});
