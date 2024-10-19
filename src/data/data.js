const products = [
    {
        id: 'Tb001',
        name: 'Galaxy Tab S7',
        image: './img/Tab-S7.jpeg',
        description: 'Tableta de 11 pulgadas con pantalla de 120Hz y S Pen.',
        price: 649,
        category: 'tablets',
        stock: 13,
    },
    {
        id: 'Tb002',
        name: 'Galaxy Tab A8',
        image: './img/Tab-A8.jpeg',
        description: 'Tableta de 10.5 pulgadas económica con gran rendimiento.',
        price: 229,
        category: 'tablets',
        stock: 11,
    },
    {
        id: 'Tb003',
        name: 'Galaxy Tab S6 Lite',
        image: './img/S6-Lite.jpeg',
        description: 'Tableta de 10.4 pulgadas con S Pen incluido, ideal para tomar notas.',
        price: 349,
        category: 'tablets',
        stock: 20,
    },
    {
        id: 'Lp001',
        name: 'Galaxy Book Pro',
        image: './img/Book-pro.webp',
        description: 'Pantalla AMOLED de 13.3 pulgadas, Intel Core i5, notebook ultrafina.',
        price: 999,
        category: 'notebooks',
        stock: 17,
    },
    {
        id: 'Lp002',
        name: 'Galaxy Book Go',
        image: './img/book-Go.jpeg',
        description: 'Notebook de 14 pulgadas, Qualcomm Snapdragon 7c, batería de larga duración.',
        price: 349,
        category: 'notebooks',
        stock: 7,
    },
    {
        id: 'Lp003',
        name: 'Galaxy Book Flex2',
        image: './img/book-flex.webp',
        description: 'Pantalla QLED de 13.3 pulgadas, notebook convertible 2 en 1 con S Pen.',
        price: 1399,
        category: 'notebooks',
        stock: 14,
    },
    {
        id: 'Ph001',
        name: 'Galaxy S21',
        image: '',
        description: 'Pantalla de 6.2 pulgadas, triple cámara, rendimiento de gama alta.',
        price: 799,
        category: 'celulares',
        stock: 21,
    },
    {
        id: 'Ph002',
        name: 'Galaxy Z Fold3',
        image: '',
        description: 'Pantalla plegable de 7.6 pulgadas, potencia multitarea.',
        price: 1799,
        category: 'celulares',
        stock:25,
    },
    {
        id: 'Ph003',
        name: 'Galaxy A52',
        image: '',
        description: 'Pantalla de 6.5 pulgadas, cámara de 64MP.',
        price: 349,
        category: 'celulares',
        stock: 17,
    }
]

// Creamos funcion que devuelve los productos en forma de promesa

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        })
    })
}

export { getProducts }