import React,{useEffect, useState} from 'react'
import GetApi from '../content/api'
import './body.style.css'

const Prueba = () =>{

    
    const [user, setUser] = useState([]);

    useEffect(() =>{
        fetch(GetApi())
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
             
            })
        
    },[]);

    return (
        


        <div className="body">
            <h1>Usuarios</h1>
            <ul>
                {
                    user.map(user => 
                        <li className="listas" key={user.id}>Nombre: {user.name} -Email: {user.email}</li>
                        
                        )
                    
                }
            </ul>
        </div>

    )

    
}

export default Prueba


  