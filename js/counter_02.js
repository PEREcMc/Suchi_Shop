// Прослушиваем всё окно
window.addEventListener('click', function (e) {
    
    let counter;

    // проверяем клик строго по кнопкам плюс или минус
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        // находим родителя для кнопки 
        const counterWrapper = e.target.closest('.counter-wrapper');
        // находим сам счётчик
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (e.target.dataset.action === 'minus') {
        
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

         // Проверка на товар, который находится в корзине - для удаления из неё
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText)  === 1) {
           
         // Удаляем товар из корзины
            e.target.closest('.cart-item').remove();

        // Отображение статуса корзины
            toggleCartStatus();    

        // запускаем пересчёт стоимости товаров
            calcCartPriceAndDelivery();
        }

    }

    // Проверяем клик на + или - внутри корзины
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        // запускаем пересчёт стоимости товаров
        calcCartPriceAndDelivery();
    }

})