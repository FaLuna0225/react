import { useState } from "react"

function Componente2(props){

    let creacion=2010

    const [precio, setPrecio]=useState(1500)

    function incrementarPrecio(){
    setPrecio(precio+100)
}
    return (
        <div>
            <h1>La peli es: {props.pelicula}</h1>

            <p>
                Grown Ups conocida como Niños grandes en España y Son como niños en Hispanoamérica, 
                es una película cómica de 2010 dirigida por Dennis Dugan, escrita y producida por
                Adam Sandler y protagonizada por Sandler, Kevin James, Chris Rock, Rob Schneider y 
                David Spade, quienes ya antes habían trabajado con Sandler, pero no todos juntos
                en una misma película. El guion fue escrito por Sandler y Fred Wolf. La película 
                fue producida por la compañía de Sandler, Happy Madison, y distribuida por
                Columbia Pictures.
            </p>
            
            <p>Lanzamiento:{creacion}</p>

            <p>Precio: {precio}</p>
            <button onClick={incrementarPrecio}> Incrementar precio</button>

            <img  alt="" src="https://tvazteca.brightspotcdn.com/90/4d/7a080db04165a99c6b9f4bf2525b/son-como-ninos.jpg"/>
        </div>
    )
    }
    export default Componente2