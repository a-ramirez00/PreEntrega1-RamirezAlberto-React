// import { useState, useEffect } from 'react'
// import { doc, getDoc } from 'firebase/firestore'
// import db from '../../db/db.js'
// import ItemDetail from './ItemDetail'
// import { useParams } from 'react-router-dom'

// const ItemDetailContainer = () => {

//     const [product, setproduct] = useState({})
//     // const [loading, setLoading] = useState(true)
//     const { idProduct } = useParams()


//     const getProductById = () => {
//         const docRef = doc(db, 'products', idProduct)
//         getDoc(docRef)
//             .then((dataDb) => {
//                 const productDb = { id: dataDb.id, ...dataDb.data() }
//                 setproduct(productDb)
//             })
//     }


//     useEffect(() => {

//         getProductById()

//         // setLoading(true)


//         // getProducts()
//         //     .then((data) => {
//         //         const findProduct = data.find((product) => product.id === idProduct)
//         //         setproduct(findProduct)
//         //     }).finally(() => setLoading(false))
//     }, [idProduct])

//     return (
//         <ItemDetail product={product} />
//     )
// }

// export default ItemDetailContainer



import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();

    const getProductById = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'products', idProduct);
            const dataDb = await getDoc(docRef);
            if (dataDb.exists()) {
                const productDb = { id: dataDb.id, ...dataDb.data() };
                setProduct(productDb);
            } else {
                console.error("Product not found");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (idProduct) {
            getProductById();
        }
    }, [idProduct]);

    return (
        loading ? <p>Loading...</p> : 
        product.id ? <ItemDetail product={product} /> : <p>Product not found</p>
    );
};

export default ItemDetailContainer;
