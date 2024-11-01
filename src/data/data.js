const products = [
    // Tablets
    {
        id: 'Tb004',
        name: 'Galaxy Tab S9',
        image: ['/img/Tab-S9.webp', '/img/Tab-S9-1.webp', '/img/Tab-S9-2.webp', '/img/Tab-S9-3.webp'],
        description: 'Tableta de 11 pulgadas con pantalla Dynamic AMOLED 2X y resistencia al agua.',
        price: 799,
        category: 'tablets',
        stock: 15,
    },
    {
        id: 'Tb005',
        name: 'Galaxy Tab A9',
        image: ['/img/Tab-A9.webp', '/img/Tab-A9-1.webp','/img/Tab-A9-2.webp','/img/Tab-A9-3.webp'],
        description: 'Tableta de 10.5 pulgadas con batería de larga duración, ideal para entretenimiento.',
        price: 249,
        category: 'tablets',
        stock: 12,
    },
    {
        id: 'Tb006',
        name: 'Galaxy Tab S9 Ultra',
        image: ['/img/Tab-S9Ultra.webp', '/img/Tab-S9Ultra-1.webp', '/img/Tab-S9Ultra-2.webp', '/img/Tab-S9Ultra-3.webp'],
        description: 'Tableta de 14.6 pulgadas con pantalla Dynamic AMOLED 2X, ideal para productividad y entretenimiento.',
        price: 1199,
        category: 'tablets',
        stock: 8,
    },

    // Notebooks
    {
        id: 'Lp004',
        name: 'Galaxy Book3 Ultra',
        image: ['/img/Book3.webp', '/img/Book3-1.webp', '/img/Book3-2.webp','/img/Book3-3.webp'],
        description: 'Notebook de 16 pulgadas con pantalla AMOLED 3K, Intel Core i7, diseño ultrafino.',
        price: 1999,
        category: 'notebooks',
        stock: 10,
    },
    {
        id: 'Lp005',
        name: 'Galaxy Book2 Pro',
        image: ['/img/book2Pro.webp', '/img/book2Pro-1.webp', '/img/book2Pro-2.webp'],
        description: 'Notebook convertible 2 en 1 con pantalla táctil Super AMOLED y S Pen incluido.',
        price: 1499,
        category: 'notebooks',
        stock: 8,
    },
    {
        id: 'Lp006',
        name: 'Galaxy Book4',
        image: ['/img/book4.webp', '/img/book4-1.webp','/img/book4-2.webp','/img/book4-3.webp'],
        description: 'Notebook de 14 pulgadas con pantalla AMOLED y potencia para tareas de alto rendimiento.',
        price: 1599,
        category: 'notebooks',
        stock: 13,
    },

    // Celulares
    {
        id: 'Ph007',
        name: 'Galaxy S22',
        image: ['/img/GalaxyS22.webp', '/img/GalaxyS22-1.webp', '/img/GalaxyS22-2.webp', '/img/GalaxyS22-3.webp'],
        description: 'Pantalla de 6.1 pulgadas, procesador Snapdragon 8 Gen 1, cámara de 50MP.',
        price: 899,
        category: 'celulares',
        stock: 22,
    },
    {
        id: 'Ph008',
        name: 'Galaxy S23',
        image: ['/img/GalaxyS23.webp', '/img/GalaxyS23-1.webp', '/img/GalaxyS23-2.webp', '/img/GalaxyS23-3.webp'],
        description: 'Pantalla de 6.1 pulgadas con cámara de 50MP y procesador Snapdragon 8 Gen 2.',
        price: 999,
        category: 'celulares',
        stock: 20,
    },
    {
        id: 'Ph009',
        name: 'Galaxy S24',
        image: ['/img/GalaxyS24.webp', '/img/GalaxyS24-1.webp', '/img/GalaxyS24-2.webp', '/img/GalaxyS24-3.webp'],
        description: 'Pantalla de 6.2 pulgadas, cámara avanzada de 200MP, potencia Snapdragon 8 Gen 3.',
        price: 1199,
        category: 'celulares',
        stock: 15,
    }
];

// Creamos funcion que devuelve los productos en forma de promesa

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        })
    })
}

export { getProducts }