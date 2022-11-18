import React from "react";
import axios from "axios"

export async function Teste(nome, usuario, senha, email){
                 
    axios.post('https://backend-sestante.herokuapp.com/user', {
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