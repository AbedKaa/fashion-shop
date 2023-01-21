
function addCard(){
    
    const image = document.querySelector('#image');
    const title = document.querySelector('#title');
    const desc = document.querySelector('#description');
    const stars = document.querySelector('#stars-rating');
    const price = document.querySelector('#price');
    let cards_data = [];
    
    if(localStorage.getItem('cardsData') != null)
        cards_data = JSON.parse(localStorage.getItem('cardsData'));
    
    if(image.value !=''
        &&title.value != ''
        && desc.value != ''
        && stars.value != ''
        && price.value != '')
    {
        cards_data.push([cards_data.length+1,image.value ,title.value, desc.value, stars.value, price.value]);
        
        localStorage.setItem('cardsData', JSON.stringify(cards_data));
        image.value = '';
        title.value = '';
        desc.value = '';
        stars.value = '';
        price.value = '';
        location.href = 'useditem.html';
    }
    else {
    showAlert("please fill out all informaition");
    }
}
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}