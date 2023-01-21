// cart
let cart = document.getElementById('cart-id');
let CloseCart = document.querySelector('#close-cart');
//Open cart
if(cart != null) {
cart.onclick = () => {
    cart.className = "cart";
};
}
function openCart() {
  var openbtn = document.getElementsByClassName("open-cart");
  var removeCartItemButtons =  document.getElementsByClassName('cart-remove')
  cart.className = "cart active";
  for ( var i = 0; i < openbtn.length; i++) {
      openbtn[i].addEventListener("click", function() {
        this.parentElement.style.display = 'cart';
      });
  }
  for ( var i = 0 ; i < removeCartItemButtons.length ; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  var quantityInputs =  document.getElementsByClassName('cart-quantity')
  for(var i = 0 ; i < quantityInputs.length ; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
    // hello me 
 var addCard = document.getElementsByClassName('add-cart');
  for ( var i = 0 ; i < addCard.length ; i++){
      var button = addCard[i];
      button.addEventListener("click", addCartClicked);
  }

  document
  .getElementsByClassName('btn-buy')[0]
  .addEventListener('click', buyButtonClicked);
}

function buyButtonClicked(){
  alert('Your Order is placed')
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild)
  }
  updateCartTotal();
}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1 ;
    }
    updateCartTotal()
}

function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductCart(title, price, productImg);
    updateCartTotal();
}

function addProductCart(title, price, productImg){
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-content')[0]
  var cartBoxContent = `
  <img src="${productImg}" class="cart-img" alt="">
  <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input class="cart-quantity" type="number" value="1" >
  </div>
  <!-- remove cart -->
  <i class='bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);
} 

function updateCartTotal(){
    var cartContainer = document.getElementsByClassName('cart-content')[0];
    var cartBoxes =  cartContainer.getElementsByClassName('cart-box');
    var total = 0;
    for(var i = 0 ; i  < cartBoxes.length ; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price *quantity;
    }
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
