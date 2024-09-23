import React, { useState, useEffect } from 'react';
import GetProducts from '../Services/GetProducts'; // Importa el servicio para obtener productos
import '../Styles/Tienda.css'; // Asegúrate de tener estilos para la tienda

function Tienda() {
    // Estado para almacenar productos, errores y carrito
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    // Carga los productos al montar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    // Función para obtener productos
    const fetchProducts = async () => {
        try {
            const products = await GetProducts(); // Llama al servicio para obtener productos
            setProducts(products); // Actualiza el estado con los productos obtenidos
        } catch (err) {
            setError('Error fetching products'); // Manejo de errores
        }
    };

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart([...cart, product]); // Agrega el producto al carrito
        alert(`${product.name} ha sido agregado al carrito!`); // Mensaje de confirmación
    };

    // Función para eliminar productos del carrito
    const removeFromCart = (index) => {
        const productToRemove = cart[index];
        const confirmRemove = window.confirm(`¿Estás seguro de que deseas eliminar ${productToRemove.name} del carrito?`);
        if (confirmRemove) {
            const newCart = cart.filter((_, i) => i !== index); // Filtra el producto que se quiere eliminar
            setCart(newCart);
            alert(`${productToRemove.name} ha sido eliminado del carrito.`); // Mensaje de confirmación
        }
    };

    return (
        <div className='tiendaContainer'>
            <h2 className='tiendaTitulo'>Nuestra Tienda</h2>
            {error && <p className="error-message">{error}</p>} {/* Muestra mensaje de error si existe */}
            <div className='productosGrid'>
                {products.map((product) => (
                    <div key={product.id} className='productoCard'>
                        {product.image && (
                            <img
                                src={product.image}
                                alt={product.name}
                                className='productoImagen'
                            />
                        )}
                        <div className='productoInfo'>
                            <h3>{product.name}</h3>
                            <p>₡{product.price}</p>
                            <button className='comprarButton' onClick={() => addToCart(product)}>
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='carrito'>
                <h2>Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" /> {/* Imagen del producto */}
                                <span>{item.name} - ₡{item.price}</span>
                                <button className='eliminarButton' onClick={() => removeFromCart(index)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Tienda;
