// index-page
// outdent
const bar =  document.getElementById('bar');{
    const nav = document.getElementById('navbar')
    
    if(bar){
        bar.addEventListener('click',()=>{
            nav.classList.add('active')
    })
}
}
//close
const close =  document.getElementById('close');{
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
})
}
}

// sproduct-page
// linking

var MainImg=document.getElementById("main-image");
var SmallImg=document.getElementsByClassName("small-img");

// replcement

SmallImg[0].onclick=function(){
    MainImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function(){
    MainImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function(){
    MainImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function(){
    MainImg.src=SmallImg[3].src;
}





