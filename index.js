
let allTotalPrice = 0;

function productCurd(card) {
    // card title
    const productTitle = card.childNodes[3].childNodes[3].innerText;
    // cards title
    const addProductTitle = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
    // cards title count
    const count = addProductTitle.childElementCount;
    // created element for cards title
    const p = document.createElement('p');
    p.innerHTML = ` ${count + 1}.  ${productTitle} `;
    // appendChild of cards title
    addProductTitle.appendChild(p)
    // product price
    const productPrice = card.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPriceNumber = parseFloat(productPrice)
    // cards total price
    const totalPrice = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[5].childNodes[1].childNodes[0];
    allTotalPrice = allTotalPrice + productPriceNumber;
    totalPrice.innerText = allTotalPrice.toFixed(2);
    // total price after discount
    const payableTotalAmount = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[9].childNodes[1];
    // make purchase button
    const makePurchase = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[13].childNodes[1];
    if (productPriceNumber > 0) {
        makePurchase.style.display = "block";
    };
    // coupon apply button
    const apply = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].childNodes[3];
    // disable apply button block
    buttonVisible(allTotalPrice, apply, payableTotalAmount);
}

    // apply button block
function buttonVisible(price, button, add) {
    if (price >= 200) {
        button.style.display = "block";
        add.innerText= allTotalPrice.toFixed(2);
    }else{
        add.innerText= allTotalPrice.toFixed(2);
    };
};

document.getElementById('apply-button').addEventListener('click', function(){
    const coupon = document.getElementById('coupon');
    const couponText = coupon.value;
    const totalPrice = document.getElementById('total-price').childNodes[1];
    const discount = document.getElementById('discount');
    if(couponText === 'SELL200'){
        discount.innerText= (allTotalPrice*0.2).toFixed(2) ;
        totalPrice.innerText = (allTotalPrice- (allTotalPrice*0.2)).toFixed(2) ;
        console.log('hello')
    }
    coupon.value = '';
});

document.getElementById('go-home').addEventListener('click', function(){
    window.location.href= "http://127.0.0.1:5500/index.html";
})
