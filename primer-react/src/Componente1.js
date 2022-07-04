import React, { useState } from "react";
import './componente1.css';

function Componente1(props){

let creacion=2009

const [precio, setPrecio]=useState(1000)

function incrementarPrecio(){
    setPrecio(precio+100)
}



return (
    <div>
        <h1>La peli es: {props.pelicula}</h1>

        <p>La trabajadora y ambiciosa, Tiana sueña con abrir el restaurante más fino de Nueva Orleans. 
            Su sueño se desvía un poco cuando conoce al príncipe Naveen, quien ha sido transformado en 
            un anfibio por el Dr. Facilier. Confundiéndola con una princesa y esperando romper el hechizo, 
            Naveen le da un beso a la pobre Tiana, transformándola en una rana. La pareja vive una gran 
            aventura por los pantanos para buscar la ayuda de una poderosa sacerdotisa vudú.</p>

        <p>Lanzamiento:{creacion}</p>

        <p>Precio: {precio}</p>
        <button onClick={incrementarPrecio}> Incrementar precio</button>
        

        <img className="imagen" alt="" src="https://64.media.tumblr.com/14f194a0d50f124149e04ace9ddb034a/53b151646c262934-f1/s500x750/54d5d563fe5d38cb6b0f4bc1402fa9c603b9308f.jpg"/>
        
        
    </div>
)
}
export default Componente1