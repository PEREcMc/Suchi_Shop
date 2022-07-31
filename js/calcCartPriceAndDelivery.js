function calcCartPriceAndDelivery() {

    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]'); // количество товаров
        const priceEl = item.querySelector('.price__currency'); // стоимость товара

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;
    })
    // отображаем общую стоимость в корзине
    totalPriceEl.innerText = priceTotal;

    // отображаем или скрываем доставку
    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }
    // указываем доставку в зависимости от pricetotal
    if (priceTotal >= 800) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '150 ₽';
    }

}