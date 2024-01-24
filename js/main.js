document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel= document.querySelectorAll('.carousel')
M.Carousel.init(elementosCarousel,{
    duration:500,
    dist:-80,
    shift:5,
    numVisible:3
})
});
