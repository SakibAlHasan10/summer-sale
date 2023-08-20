
let allTotalPrice = 0;

function productCurd(card) {
    const productTitle = card.childNodes[3].childNodes[3].innerText;
    const addProductTitle = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
    const count = addProductTitle.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = ` ${count + 1} ${productTitle} `;
    addProductTitle.appendChild(p)
    const productPrice = card.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPriceNumber = parseFloat(productPrice)
    const totalPrice = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[5].childNodes[1].childNodes[0];
    allTotalPrice = allTotalPrice + productPriceNumber;
    totalPrice.innerText = allTotalPrice.toFixed(2);
    const totalDiscount = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[7].childNodes[1].childNodes[0];
    const payableTotalAmount = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[9].childNodes[1].childNodes[0];
    const makePurchase = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[13].childNodes[1];
    if (productPriceNumber > 0) {
        makePurchase.style.display = "block"
    }
    const apply = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].childNodes[3];
    console.log(apply)
    buttonVisible(allTotalPrice, apply)
    // console.log(productPriceNumber, apply)
    // const discount = totalDiscount.innerText = (allTotalPrice*0.2).toFixed(2) ;
    // payableTotalAmount.innerText = (allTotalPrice - discount).toFixed(2);
    // console.log( payableTotalAmount)
}



// const apply = document.getElementById('apply-button');
// const productPrice = document.getElementById('total-price').childNodes[0].innerText;
// const priceNumber = parseFloat(productPrice);
function buttonVisible(price, button) {
    if (price >= 200) {
        button.style.display = "block";
    }

}