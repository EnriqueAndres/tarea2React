import React from 'react';
import './styles/apiInfo.styles.css'
import {Accordion,Button } from 'reactstrap';


const ApiInfo = () => {
  return (
    
    <div className="container">

            
        <Accordion>
        JSON Placeholder es una plataforma moderna que le proporciona una API REST en línea, que puede usar instantáneamente siempre que necesite datos falsos. Puede utilizar la API falsa que se ofrece para múltiples propósitos, como la creación de prototipos y las pruebas.
        </Accordion>
            
        <Button className="btn text-center"href="https://jsonplaceholder.typicode.com/">Link Api</Button>
    </div>
    
  )
}


export default ApiInfo