const slajdovi=document.querySelectorAll('.slajd');
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
const auto=true;
const intervalTime=5000;
let slideInterval;

const nextSlide =() => {
    const trenutni=document.querySelector('.trenutni');

    //remove current class
    trenutni.classList.remove('trenutni');
    //check for next slide
    if(trenutni.nextElementSibling){
        //add current to next sibling
        trenutni.nextElementSibling.classList.add('trenutni');
    }else{
        //add current to start
        slajdovi[0].classList.add('trenutni');
    }
    setTimeout(() => trenutni.classList.remove('trenutni'));
} 

const prevSlide =() => {
    const trenutni=document.querySelector('.trenutni');

    //remove current class
    trenutni.classList.remove('trenutni');
    //check for next slide
    if(trenutni.previousElementSibling){
        //add current to next sibling
        trenutni.previousElementSibling.classList.add('trenutni');
    }else{
        //add current to start
        slajdovi[slajdovi.length-1].classList.add('trenutni');
    }
    setTimeout(() => trenutni.classList.remove('trenutni'));
} 

next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});
prev.addEventListener('click', e=> {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});

//auto slide
if(auto){
    slideInterval = setInterval(nextSlide,intervalTime);
}
