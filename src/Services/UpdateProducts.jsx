import React from "react";

async function UpdateProducts(id, name, price, image) {
    try {
        const productData = { 
            name, 
            price, 
            image 
        };
        const response = await fetch(`http://localhost:3003/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error('Error updating product');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

export default UpdateProducts;
