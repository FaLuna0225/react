function Componente3(props){

    let creacion=2004
    return (
        <div>
            <h1>La peli es: {props.pelicula}</h1>

            <p>
                Dos desafortunados agentes del FBI se hacen pasar por dos chicas, 
                novatas en la alta sociedad para investigar una serie de secuestros.
                Pero mientras preparan su plan, descubren que irrumpir en la alta 
                sociedad es mucho más duro de lo que creían.
            </p>

            <p>Lanzamiento:{creacion}</p>

            <img src="https://st1.uvnimg.com/dims4/default/010bdc7/2147483647/thumbnail/1240x698/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fy%2Fy_donde_estan_las_rubias_pelicula_2004.jpg"/>
        </div>
    )
    }
    export default Componente3