
let allTotalPrice = 0;
function productCurd(card){
    const productTitle = card.childNodes[3].childNodes[3].innerText;
    const addProductTitle = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
    const count = addProductTitle.childElementCount;
    const p = document.createElement('p');
    p.innerHTML=` ${count+1} ${productTitle} `;
    addProductTitle.appendChild(p)
    const productPrice = card.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPriceNumber = parseFloat(productPrice)
    const totalPrice = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[5].childNodes[1].childNodes[0];
    allTotalPrice = allTotalPrice + productPriceNumber;
    totalPrice.innerText= allTotalPrice.toFixed(2);
    const totalDiscount = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[7].childNodes[1].childNodes[0];
    const discount = totalDiscount.innerText = (allTotalPrice*0.2).toFixed(2) ;
    const payableTotalAmount = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[9].childNodes[1].childNodes[0];
    payableTotalAmount.innerText = (allTotalPrice - discount).toFixed(2);
    console.log( payableTotalAmount)
}