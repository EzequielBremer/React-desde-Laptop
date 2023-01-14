import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "santapaz-15f86.firebaseapp.com",
  projectId: "santapaz-15f86",
  storageBucket: "santapaz-15f86.appspot.com",
  messagingSenderId: "684107909048",
  appId: "1:684107909048:web:7f8756b6640fec05c9f14d",
  measurementId: "G-QTK68KHJJW"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBDD = async () => {
    const promise = await fetch("./json/productos.json")
    const productos = await promise.json();
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            caracteristicas: prod.caracteristicas,
            precio: prod.precio,
            stock: prod.stock,
            idCategoria: prod.idCategoria,
            img: prod.img
        })

    })
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}

const deleteProducto = async (id) =>{
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createOrdenCompra = async (cliente, precioTotal, fecha) =>{
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precioTotal: precioTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra }