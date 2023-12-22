let burger=document.querySelector('.burger');
let nav_bar=document.querySelector('.nav-bar');
let close=document.querySelector('.close');

if(burger){
    burger.addEventListener('click',()=>{
        nav_bar.classList.add('act')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav_bar.classList.remove('act')
    })
}
