const createNav = () => {
    let nav = document.querySelector('.navbar');
    let name = localStorage.getItem("user");
    let nav2 = "";
    let button = "";
    if(name == null) {
        nav2 = `<p class="account-info">Click the button</p>`;
        button = `<button class="btn" id="user-btn" onclick="gotoLogin()">Log in</button>`;
    }else {
        nav2 = `<p class="account-info">log in as, ${name}</p>`;
        button = `<button class="btn" id="user-btn" onclick="logout()">Log out</button>`;
    }
    nav.innerHTML = `
    <div class="nav">
            <img src="images/web-logo.jpg" class="logo" alt="">
            <div class="nav-iteams">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-butn">search</button>
                </div>
                <a>
                    <img src="images/user-logo.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        ${nav2}
                        ${button}
                    </div>
                </a>
                <a href="#" onclick="openCart();"><img src="images/shoping-cart.jpg" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-iteam"><a href="index.html" class="link">Home</a></li>
            <li class="link-iteam"><a href="Women.html" class="link">Women</a></li>
            <li class="link-iteam"><a href="men.html" class="link">Men</a></li>
            <li class="link-iteam"><a href="kids.html" class="link">Kids</a></li>
            <li class="link-iteam"><a href="Accessories.html" class="link">Accessories</a></li>
            <li class="link-iteam"><a href="useditem.html" class="link">Used Items</a></li>
        </ul>
    
    `;
}

createNav();
function logout(){
    localStorage.removeItem("user");
}
function gotoLogin() {
    location.replace('login.html');
}
//nav pop
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})
