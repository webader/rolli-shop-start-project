function toggleCartStatus() {
    //console.log('toggleCartStatus')

    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartEmptyBadge = document.querySelector('[data-cart-empty]')
    //console.log(cartWrapper.children.length)

    const orderForm = document.querySelector('#order-form')


    if (cartWrapper.children.length > 0) {
        console.log('Full')
        cartEmptyBadge.classList.add('none')
        orderForm.classList.remove('none')

    } else {
        cartEmptyBadge.classList.remove('none')
        orderForm.classList.add('none')
        console.log('Full')
               
    }
}

//1.50.49 остановился https://www.youtube.com/watch?v=pIgyoL5FjgI&list=PLL4bdWIbYcxc5nKU4MGqYKJecT9SZKS9l&index=15&t=2083s