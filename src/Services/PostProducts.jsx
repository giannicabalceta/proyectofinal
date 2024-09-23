import React from "react";

async function PostProducts(name, price, image) {
    try {
        const productData = { 
            name, 
            price, 
            image 
        };

        const response = await fetch("http://localhost:3003/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error('Error posting product');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting product:', error);
        throw error;
    }
}

export default PostProducts;
