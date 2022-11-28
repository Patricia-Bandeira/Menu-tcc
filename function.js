import React from "react";
import axios from "axios"

export async function Teste(nome, usuario, senha, email){
                 
    axios.post('https://slow-jokes-wave-152-250-50-246.loca.lt/user', {
                name: nome, 
                username: usuario, 
                email: email,
                password: senha, 
            })
        .then(response => {
        console.log(response.data)
        return response.data
        })
        .catch(error => {console.log(error)
        return error}
        )

        
}