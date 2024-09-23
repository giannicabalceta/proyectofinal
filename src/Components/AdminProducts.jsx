import React, { useState, useEffect } from 'react';
import GetProducts from '../Services/GetProducts';
import PostProducts from '../Services/PostProducts';
import UpdateProducts from '../Services/UpdateProducts';
import DeleteProduct from '../Services/DeleteProducts';
import Swal from 'sweetalert2'; // Importa SweetAlert
import '../Styles/AdminProducts.css';

function AdminProducts() {
    // Estado para almacenar productos, datos del formulario, ID del producto en edición y errores
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ name: '', price: '', image: '' });
    const [editingProductId, setEditingProductId] = useState(null);
    const [error, setError] = useState(null);

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

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Actualiza el estado del formulario
    };

    // Maneja el cambio de imagen
    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const reader = new FileReader(); // Lee el archivo seleccionado
            reader.readAsDataURL(files[0]); // Convierte la imagen a base64
            reader.onload = () => {
                setFormData({ ...formData, image: reader.result }); // Actualiza el estado con la imagen en base64
            };
        }
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        try {
            if (editingProductId) {
                // Si se está editando un producto
                await UpdateProducts(editingProductId, formData.name, formData.price, formData.image);
                Swal.fire('Producto actualizado!', '', 'success'); // Mensaje de éxito con SweetAlert
            } else {
                // Si se está agregando un nuevo producto
                await PostProducts(formData.name, formData.price, formData.image);
                Swal.fire('Producto agregado!', '', 'success'); // Mensaje de éxito con SweetAlert
            }
            fetchProducts(); // Recarga la lista de productos
            resetForm(); // Resetea el formulario
        } catch (err) {
            setError('Error saving product'); // Manejo de errores
            Swal.fire('Error!', 'Error al guardar el producto', 'error'); // Mensaje de error con SweetAlert
        }
    };

    // Resetea el formulario y los estados
    const resetForm = () => {
        setFormData({ name: '', price: '', image: '' });
        setEditingProductId(null);
        setError(null);
    };

    // Maneja la edición de un producto
    const handleEdit = (product) => {
        setFormData({ name: product.name, price: product.price, image: product.image });
        setEditingProductId(product.id); // Establece el ID del producto a editar
    };

    // Maneja la eliminación de un producto
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        });

        if (result.isConfirmed) {
            try {
                await DeleteProduct(id); // Llama al servicio para eliminar el producto
                fetchProducts(); // Recarga la lista de productos
                Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success'); // Mensaje de éxito
            } catch (err) {
                setError('Error deleting product'); // Manejo de errores
                Swal.fire('Error!', 'Error al eliminar el producto', 'error'); // Mensaje de error
            }
        }
    };

    return (
        <div className='containerProductos'>
            <h2 className='adminProductostitulo'>Administrar Productos</h2>
            {error && <p className="error-message">{error}</p>} {/* Muestra mensaje de error si existe */}
            <form onSubmit={handleSubmit} className='formProductos'>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del producto"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Precio"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
                <button className='btnSubmit' type="submit">
                    {editingProductId ? 'Actualizar Producto' : 'Agregar Producto'}
                </button>
            </form>

            <h3 className='tituloListProductos'>Lista de Productos</h3>
            <ul className='listaProductos'>
                {products.map((product) => (
                    <li key={product.id} className='productoItem'>
                        {product.image && <img src={product.image} alt={product.name} className='productoImagen' />} {/* Muestra la imagen si existe */}
                        <div>
                            {product.name} - ₡{product.price}
                        </div>
                        <button onClick={() => handleEdit(product)}>Editar</button>
                        <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminProducts;
