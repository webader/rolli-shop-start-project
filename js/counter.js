// Настройка управления счетчика товаром
// 1. находим кнопку минус
// 2. находим кнопку плюс
// 3. отследить событие клик на этих кнопках
// 4. найди отображение счетчика 
// 5. увеличить или уменьшить его

/* делали работу кнопок плюс и кнопок минус меняя результат только в 1 продукте
// 1. находим элементы на странице для первой карточки товара

const btnMinus = document.querySelector('[data-action="minus"]') // находим кнопку минус по дата-актион поэтому используем []
const btnPlus = document.querySelector('[data-action="plus"]') // находим кнопку плюс (первый с верху)

const counter = document.querySelector('[data-counter]') // находим отображение счетчика чтоб его потом менять


// Отслеживаем событие клика кнопки минус 
btnMinus.addEventListener('click', function(){
    //console.log('Minus click') проверяем есть ли событие клик по кнопке минус
    if(parseInt(counter.innerText) > 1){ // parseInt(counter.innerText) переводит строку со значением "1" в число 1
        // if Проверяем чтоб в поле значение было больше 1, если боль
        counter.innerText = --counter.innerText// Удаление данных в поле счетчика метод innerText
    // counter.innerText  равен "1" нам нужно уменьшить это значение на 1 поэтому пишем впереди -- (декремент)
    }
    
})
// Отслеживаем событие клика кнопки плюс
btnPlus.addEventListener('click', function(){
    //console.log('Plus click') //проверяем есть ли событие клик по кнопке плюс
    counter.innerText = ++counter.innerText // Добавление данных в поле счетчика метод innerText
    // counter.innerText  равен "1" нам нужно увеличивать это значение на 1 поэтому пишем впереди ++ (инкремент)
})

*/

// Переписывем логику под все карточки продуктов, будем отслеживать клик по всему документу, если он произошел по кнопке минус то тогда будем уменьшать счетчик карточки где нажали кнопку минус

// Добавляем прослушку на весь докмент

// рабочий вариант, но мы меняем код еще раз чтоб было короче
// window.addEventListener('click', function(event){ // event возвращает название обекта по которому мы кликаем
//    // console.log('Window click') // click window
//    // console.log(event.target) // event.target возвращает название куда мы кликнули
   
//    //Проверяем является ли элемент кнопкой плюс
//    // console.log(event.target.dataset.action)
    
//     if(event.target.dataset.action === 'plus'){ // обращаемся к дата атрибуту action
//     // кликая на минус кнопку получаем минус в консоле кликаем на плюс - плюс
//     //    console.log('Plus')

//         const counterWrapper = event.target.closest('.counter-wrapper') //событие находит ближайшего родителя (оббертку где находится счетчик) вот этот див .counter-wrapper
//     //    console.log(counterWrapper)
//         // Здесь находим див самого счетчика
//         const counter = counterWrapper.querySelector('[data-counter]') //нашли селектор с атрибутом data-counter, єто отображение нашего счетчика
//     //    console.log(counter)

//         counter.innerText = ++counter.innerText // Добавление данных в поле счетчика метод innerText
//     }

//     //Проверяем является ли элемент кнопкой минус
//     if(event.target.dataset.action === 'minus'){ // обращаемся к дата атрибуту action
//         // кликая на минус кнопку получаем минус в консоле кликаем на плюс - плюс
//     //    console.log('Minus')
//         const counterWrapper = event.target.closest('.counter-wrapper') //событие находит ближайшего родителя вот этот див .counter-wrapper
//     //    console.log(counterWrapper)

//         const counter = counterWrapper.querySelector('[data-counter]') //нашли селектор с атрибутом data-counter, єто отображение нашего счетчика
//     //    console.log(counter)

//         counter.innerText = --counter.innerText
//     }

//     // Сейчас будем отслеживать на какой из карт мы нажали кнопку, логика такая - мы находим клик поднимаемся наверх прочитываем название карточки и спускаемся к элементу с счетчиком в этой карте
    

// Прослушка на всем окне
window.addEventListener('click', function(event){ // event возвращает название обекта по которому мы кликаем
    // объявляем переменнную для счетчика
    let counter //обявляем но не задаем значение чтоб задать значение внутри функции
    
    //проверяем клик строго по кнопкам Плюс или Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        const counterWrapper = event.target.closest('.counter-wrapper') //событие находит ближайшего родителя вот этот див .counter-wrapper
        counter = counterWrapper.querySelector('[data-counter]') //нашли селектор с атрибутом data-counter, єто отображение нашего счетчика


    }


    
   
//    //Проверяем является ли элемент кнопкой плюс
    if(event.target.dataset.action === 'plus'){ // обращаемся к дата атрибуту action
        counter.innerText = ++counter.innerText // Добавление данных в поле счетчика метод innerText
    }

     //Проверяем является ли элемент кнопкой минус
    if(event.target.dataset.action === 'minus'){ // обращаемся к дата атрибуту action
                
        if(parseInt(counter.innerText) > 1){ // проверяем чтоб счетчик біл больше 1
            counter.innerText = --counter.innerText
        // Проверка на товар в корзине
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Удаляем товар из карзины
            event.target.closest('.cart-item').remove()

            // Отображение статуса корзины Пустая/Полная
            toggleCartStatus()

            // Пересчет общей стоимости товаров в корзине
            calcCartPrice();
        }

        
    }

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPrice();

    }

})