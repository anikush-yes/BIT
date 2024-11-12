// let C = [
//     {
//         id: 1,
//         img: 'kede.jpg',
//         title: 'Kėdė',
//         price: 50,
//         quantity: 4,


//     },
//     {
//         id: 2,
//         img: 'stalas.jpg',
//         title: 'Stalas',
//         price: 100,
//         quantity: 7,
//     },

//     {
//         id: 3,
//         img: 'komoda.jpg',
//         title: 'Komoda',
//         price: 250,
//         quantity: 7,
//     },

//     {
//         id: 4,
//         img: 'spinta.jpg',
//         title: 'Spinta',
//         price: 350,
//         quantity: 7,
//     },

// ];

let C = [];
 
const cartIcon = document.querySelector('[data-cart-icon]');
const cartList = document.querySelector('[data-cart-list]');
 
cartIcon.addEventListener('click', _ => {
    if (cartList.dataset.open === 'close') {
        cartList.dataset.open = 'open';
        cartList.style.maxHeight = cartList.scrollHeight + 'px';
    } else {
        cartList.dataset.open = 'close';
        cartList.style.maxHeight = '0';
    }
});

const showMessage = _ => {
    const message = document.querySelector('[data-show]');
    message.dataset.show = true;
    setTimeout(_ => {
        message.dataset.show = false;
    }, 2000);
}
 
const productsAction = _ => {
 
    const products = document.querySelectorAll('[data-product]');
 
 
    products.forEach(product => {
        const button = product.querySelector('button');
        const img = product.querySelector('img').src;
        const input = product.querySelector('input');
 
        button.addEventListener('click', _ => {
            const id = parseInt(button.dataset.id);
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            const quantity = parseInt(input.value);
 
            C.push(
                {   id,
                    img,
                    title: name,
                    price,
                    quantity
                });
 
                cartRender();
                addEvents();
                showMessage();
                const cartList = document.querySelector('[data-cart-list]');
                cartList.dataset.open = 'close';
                cartList.style.maxHeight = '0';
               
 
        });
    });
 
 
 
}
 
 
const cartRender = _ => {
    let cartHtml = '';
    C.forEach(item => {
        const { id, img, title, price, quantity } = item;
        const cartItemHtml = `
                        <li>
                            <img src="${img}" alt="${title}">
                            <div class="info">
                                <h3>${title}</h3>
                                <p>${price.toFixed(2)} €</p>
                                <p>Quantity: ${quantity}</p>
                            </div>
                            <button data-id=${id}>X</button>
                        </li>
                        `;
        cartHtml += cartItemHtml;
    });
    if (!cartHtml) {
        cartHtml = '<li data-empty>Krepšelis tuščias</li>';
    }
    document.querySelector('[data-cart-list] ul').innerHTML = cartHtml;
}
 
const addEvents = _ => {
    document.querySelectorAll('[data-cart-list] ul li:not([data-empty])')
        .forEach(li => {
            const button = li.querySelector('button');
            button.addEventListener('click', _ => {
                const id = button.dataset.id;
                C = C.filter(item => item.id !== parseInt(id));
                cartRender();
                addEvents();
               
               
            });
        });
}
 
cartRender();
addEvents();
productsAction();
