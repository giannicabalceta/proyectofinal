import React from "react";

async function PostUsers(username,email,password, role) {
    try {
     
        const userData = { 
            username,
            email,
            password,
            role
        
        };

        const response = await fetch("http://localhost:3003/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostUsers;