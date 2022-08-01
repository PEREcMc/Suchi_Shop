const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (e) {
    // проверяем клик по кнопке "Добавить в корзину"
    if(e.target.hasAttribute('data-cart')) {
        // находим карточку с товаром 
        const card = e.target.closest('.card');

        // собираем данные товара из карточки в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверяем есть ли уже данный товар в карзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if(itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {  // если товара нет в корзине

                // Собиранные данные подставляем в шаблон для товара в корзине
                const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                            <div class="cart-item__top">
                                                <div class="cart-item__img">
                                                    <img src="${productInfo.imgSrc}" alt="">
                                                </div>
                                                <div class="cart-item__desc">
                                                    <div class="cart-item__title">${productInfo.title}</div>
                                                    <div class="cart-item__weight">${productInfo.itemsInBox}  ${productInfo.weight}</div>

                                                    <div class="cart-item__details">

                                                        <div class="items items--small counter-wrapper">
                                                            <div class="items__control" data-action="minus">-</div>
                                                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                            <div class="items__control" data-action="plus">+</div>
                                                        </div>

                                                        <div class="price">
                                                            <div class="price__currency">${productInfo.price}</div>
                                                        </div>

                                         </div>`;

                // отображаем товар в корзине
                cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        // сбрасываем счётчик при добавлении данного товара в корзину
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины
        toggleCartStatus();
        // Отображение общей стоимости товаров
        calcCartPriceAndDelivery();

    }
    
})
