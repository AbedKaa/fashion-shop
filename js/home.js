const productContainers = [...document.querySelectorAll('.prod-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerwidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    })
})