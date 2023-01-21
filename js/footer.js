const createfooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-cont">
            <img src="images/web-logo.jpg " class="logo" alt="">
            <div class="footer-ul-cont">
                <ul class="cat">
                    <li class="cat-title">MEN</li>
                    <li><a href="men.html" class="footer-link">Shirts</a></li>
                    <li><a href="men.html" class="footer-link">Shoes</a></li>
                    <li><a href="men.html" class="footer-link">Casuals</a></li>
                    <li><a href="men.html" class="footer-link">Formals</a></li>
                    <li><a href="men.html" class="footer-link">Sports</a></li>
                    <li><a href="men.html" class="footer-link">Watch</a></li>
                </ul>
                <ul class="cat">
                    <li class="cat-title">WOMEN</li>
                    <li><a href="women.html" class="footer-link">Shirts</a></li>
                    <li><a href="women.html" class="footer-link">Jeans</a></li>
                    <li><a href="women.html" class="footer-link">Shoes</a></li>
                    <li><a href="women.html" class="footer-link">Casuals</a></li>
                    <li><a href="women.html" class="footer-link">Sports</a></li>
                    <li><a href="women.html" class="footer-link">Watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore voluptatum rem cum autem, repellendus velit eveniet possimus consectetur cumque eum quisquam impedit obcaecati. 
            Molestias quis non sit reiciendis cupiditate error repudiandae fugiat doloremque? Aliquam nostrum atque quo inventore maiores. 
            Voluptatibus, aspernatur! Laborum cumque eaque illo similique sint consequatur quae, accusamus inventore aperiam. 
            Laboriosam ipsa adipisci eligendi consequuntur iste sapiente nulla quaerat voluptates officia quisquam nobis soluta 
            cupiditate dolores dignissimos vero tempora eos nisi magnam fugiat exercitationem itaque, 
            doloribus nam! Sint ad aliquam quibusdam exercitationem! Quo deserunt eos debitis et? 
            Inventore ratione non maiores cum consectetur distinctio at a vero magni?</p>
            <p class="info">Support emails - 202010976@ua.edu.lb,
                202010454@ua.edu.lb, 202010674@ua.edu.lb
            </p>
            <p class="info">telephone - +9613824082, +96171107196 , +96176436789</p>
            <div class="footer-social">
                <div>
                    <a href="#" class="social_link">terms & services</a>
                    <a href="#" class="social_link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social_link">instagram</a>
                    <a href="#" class="social_link">facebook</a>
                    <a href="#" class="social_link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Lunar Clothes - Best Apparels Online Store</p>
    
    `;

}
createfooter();