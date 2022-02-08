function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper') // Нашли обертку в котором будут все карт айтемы
    const cartItems = document.querySelectorAll('.cart-item')
    //console.log('cartItems: ', cartItems);

    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

   
    
    // Общая стоимость товара
    let totalPrice = 0

    cartItems.forEach(function (item) {
        //console.log(item);  
        
        const  ammountEl = item.querySelector('[data-counter]') // Поиск  количества товара
        const  priceEl = item.querySelector('.price__currency') // элемент отвечающий за стоимость

        const currentPrice = parseInt(ammountEl.innerText) * parseInt(priceEl.innerText) // берем значение счетчика и переводим его в число, берем значение числа и переводим ее в число, потом переумножаем
        //console.log('currentPrice: ', currentPrice);

        totalPrice += currentPrice //  totalPrice += currentPrice
       // console.log(totalPrice);

        
    })

    // отображаем цену в корзине
    totalPriceEl.innerText = totalPrice
    
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'

    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'

    }

}