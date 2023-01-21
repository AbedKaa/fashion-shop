function viewproducts()
	{
		let cardsData = [];
		let card_data;
			
		if(localStorage.getItem('cardsData') != null)
			products_data = JSON.parse(localStorage.getItem('cardsData'));
			
		const queryURL = window.location.search;    
        const result = new  URLSearchParams(queryURL);    
           
        const cardid  = result.get("cardid");    
		
		if(cardid != null && cardid != undefined)
		{
			for(let card of cards_data)
				if(card[0] == cardid)
					card_data = card;
			
			document.querySelector(' productsid').textContent = cardid;
			document.querySelector('#title').textContent = card_data[1];
			document.querySelector('#description').textContent = card_data[2];
			document.querySelector('#starsrating').textContent = card_data[3];
			document.querySelector('#image').textContent = card_data[4];
			document.querySelector('#price').textContent = card_data[5];
		}
	}
function readurl(image)
{
	document.getElementById("image").style.display= "block";
	if (image.files && image.files[0]){
		var reader = new filereader();

		reader.onload = function (e) {
			document.getelementbyid('image').src = e.target.result;
		}
		reader.readasdataurl(image.files[0]);
	}
}
let cards_data = [];
		
function loadProducts()
{
	if(localStorage.getItem('cardsData') != null)
		cards_data = JSON.parse(localStorage.getItem('cardsData'));
	else
		cards_data = [];

	const cardList = document.querySelector('#card-list');
	
	let cards_HTML = '';
	
	for(let card_data of cards_data)
	{
		
		
		cards_HTML += 	`<div class="card" data-id="${card_data[0]}">
							<h1><a href="viewCard.html?cardid=${card_data[0]}">${card_data[1]}</a></h1>
							<p>${card_data[2]}</p>
							
							<div class="stars-rating">`;
		
							for(let i=1; i<=card_data[3]; i++)
							{
								cards_HTML += '		<ion-icon name="star"></ion-icon>';
							}
							
							
							cards_HTML += 	`		
							</div>
							
						</div>`;
						}
	
	cardList.innerHTML = cards_HTML;
readurl();
}

src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"

const showAlert = (msg) => {
let alertBox = document.querySelector('.alert-box');
let alertMsg = document.querySelector('.alert-msg');
alertMsg.innerHTML = msg;
alertBox.classList.add('show');
setTimeout(() => {
	alertBox.classList.remove('show');
}, 3000);
} 

