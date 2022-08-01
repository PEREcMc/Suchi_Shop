const productsContainer = document.getElementById('products-container');

getProducts();

async function getProducts() {
    const response = await fetch('./js/products.json');

    const productsArray = await response.json();

    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach( (item) => {
        const productHTML = `<div class="col-md-6">
                                <div class="card mb-4" data-id="${item.id}">
                                    <img class="product-img" src="${item.imgSrc}" alt="">
                                    <div class="card-body text-center">
                                        <h4 class="item-title">${item.title}</h4>
                                        <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. / </small>
                                        <small class="price__weight">${item.weight}г.</small>
                                        </p>

                                        <div class="details-wrapper">

                                            <!-- Счётчик -->
                                            <div class="items counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter>1</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>
                                            <!-- Счётчик -->

                                            <div class="price">
                                                <div class="price__currency">${item.price} ₽</div>
                                            </div>

                                        </div>

                                        <button data-cart type="button" class="btn btn-block btn-outline-warning">Добавить в корзину</button>

                                    </div>
                                </div>
                            </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}