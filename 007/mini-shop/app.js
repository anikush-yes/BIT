let C = [
    {
        id: 1,
        img: 'kede.jpg',
        title: 'Kėdė',
        price: 50,
        quantity: 4,


    },
    {
        id: 2,
        img: 'stalas.jpg',
        title: 'Stalas',
        price: 100,
        quantity: 7,
    },

    {
        id: 3,
        img: 'komoda.jpg',
        title: 'Komoda',
        price: 100,
        quantity: 7,
    },

    {
        id: 4,
        img: 'spinta.jpg',
        title: 'Spinta',
        price: 350,
        quantity: 7,
    },

];



//anonimine array funkcija:

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
    document.querySelector('#mini-cart ul').innerHTML = cartHtml;
}

const addEvents = _ => {
    document.querySelectorAll('#mini-cart ul li')
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



