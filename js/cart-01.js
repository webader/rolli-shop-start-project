// Добавление товара в корзину

// мы должны нажать на кнопку доьбавить и рол должен появится в корзине

// Логика 

// 1. Отслеживаем клик по всему окну
// 2. Проверяем произошел ли клик по кнопке - Добавить в карзину
// 3. После кнопки по которой произошел клик мы найдем карточку товара по которой был клик
// 4. Далее мы соберем всю информацию
//     - Название картинки
//     - количество штук
//     - название рола
//     - его громовка
//     - его цена
// 5. Далее мы создадим шаблон как будет отображатся товар в корзине
// 6. Заполняем его данными
// 7. отобразим в корзине товар в корзине

const cartWrapper = document.querySelector('.cart-wrapper') // для отображение товара в корзине, находим обертку товара

// Отслеживаем клик на странице
window.addEventListener('click', function(event) {
   
    //Отслеживаем что клик был совершен на кнопке - "Добавить в корзину"
    if(event.target.hasAttribute('data-cart')){ // у баттона проверяем есть ли атрибут data-cart
        //console.log('Click buton')

        // Находим карточку с товаром в котром был совершен клик
        const card = event.target.closest('.card')
        //console.log(card)

        // Собираем данные с этого товара и записываем их в единый объект productInfo

        const productInfo = {
            id: card.dataset.id, // Вернет то что прописано в верстке айди товара
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

       // console.log(productInfo)// проверяем отображение обекта в консоле

       // Собранные данные подставим для товара в корзине 
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
                            </div>`;
        // Отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML) //позволяет вставлять внутрь код разметки елемента

        
    }
    
})


