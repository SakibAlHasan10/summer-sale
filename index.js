
let totalPriceCount = 0;

const allTotalPrice = document.getElementById('all-total-price');
const totalPrice = document.getElementById('total-price');
const discount = document.getElementById('discount');
const applyButton = document.getElementById('apply-button');
const makePurchaseButton = document.getElementById('purchase');

function productCurd(card) {
    // card title
    const productTitle = card.childNodes[3].childNodes[3].innerText;
    // cards title
    const productTitleInContainer = card.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1];
    // cards title countTitleInContainer
    const countTitleInContainer = productTitleInContainer.childElementCount;
    // created element for cards title
    const p = document.createElement('p');
    p.innerHTML = `${countTitleInContainer + 1}.  ${productTitle} `;
    p.classList.add('font-semibold');
    // appendChild of cards title
    productTitleInContainer.appendChild(p)
    // product price
    const productPrice = card.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPriceNumber = parseFloat(productPrice)
    // const productPriceNumber =  
    totalPriceCount = totalPriceCount + productPriceNumber;
    // make purchase button visible
    if (totalPriceCount > 0) {
        makePurchaseButton.disabled = false;
        // add.innerText = totalPriceCount.toFixed(2);
    }
    allTotalPrice.innerText = totalPriceCount.toFixed(2);
    totalPrice.innerText = totalPriceCount.toFixed(2);
    element(totalPriceCount);
}

function element(totalAmount) {
    if (totalAmount >= 200) {
        applyButton.disabled = false;
        console.log(totalAmount, 'true');
    } 
}

document.getElementById('apply-button').addEventListener('click', function () {
    const coupon = document.getElementById('coupon');
    const couponText = coupon.value;
    if (couponText === 'SELL200') {
        discount.innerText = (totalPriceCount * 0.2).toFixed(2);
        totalPrice.innerText = (totalPriceCount - (totalPriceCount * 0.2)).toFixed(2);
        console.log('hello')
    }
    coupon.value = '';
});

document.getElementById('go-home').addEventListener('click', function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
})
