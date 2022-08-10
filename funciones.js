// Simulador de Netflix - Buscador de Peliculas

let consulta = confirm("Desea buscar una pelicula?") ;
let consulta2 = "" ;
let busqueda = "" ;
const resultado = "" ;
const filtrado = "" ;
const peliculas = [] ;

class pelicula {
    constructor(nombre, genero) {
        this.nombre = nombre ;
        this.genero = genero ;
    }
}


if (consulta == true){
    console.log("Bienvenid@ al simulador de busqueda de peliculas!") ;
    console.log("Listado de peliculas que hay:") ;
    generadorAutomatico() ;
    console.table(peliculas);
    consulta2 = confirm("Desea empezar el simulador?") ;
    while( consulta2 === true){
        busqueda = prompt("Ingrese el nombre de la pelicula ").toLowerCase() ;
        buscar() ;
        console.log(" ----- ") ;
        filtrar() ;
        consulta2 = confirm("Desea buscar otra pelicula?") ;
    }

}


function generadorAutomatico() {
    peliculas.push(new pelicula("minions","infantil")) ;
    peliculas.push(new pelicula("mi villano favorito","infantil")) ;
    peliculas.push(new pelicula("superman","infantil")) ;
    peliculas.push(new pelicula("hombre araña","infantil")) ;
    peliculas.push(new pelicula("los simuladores","infantil")) ;
    peliculas.push(new pelicula("los simpsons","infantil")) ;
    peliculas.push(new pelicula("shrek","infantil")) ;
    peliculas.push(new pelicula("hulk","infantil")) ;
    peliculas.push(new pelicula("pixels","infantil")) ;
    peliculas.push(new pelicula("peaky blinders","infantil")) ;
}


function buscar() {
    const resultado = peliculas.filter((pelicula) => pelicula.nombre === busqueda) ;
    console.log("Resultado:") ;
    console.table(resultado) ;
}


function filtrar() {
    const filtrado = peliculas.filter(pelicula => pelicula.nombre.includes(busqueda)) ;
    console.log("Relacionados por letra:") ;
    console.table(filtrado) ;
}