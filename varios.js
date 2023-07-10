//VARIABLES//

// Las variables son espacios de memoria donde almacenamos datos//

//LET: es la variable que puede cambiar a lo largo del proyecto.//

//CONST: es la variable que mantiene un valor fijo o contendra una funcion. //

//EJEMPLOS//

let ejemplo = "ejemplo";
//Podemos cambiar su valor//

const pi = 3.14;
//El valor siempre sera el mismo y no se puede cambiar//

//TEMPLATE STRING//

//Se pueden usar las VARIABLES de JS dentrdo de STRINGS usando TEMPLATE STRINGS//

//Para esto usamos BACKTICKS (``). para llamar o usar la variable usamos signo pesos y llaves ${}//

//TENER EN CUENTA//
//podemos usar cualquier codigo de JS usando el ${} en un TEMPLATE STRING.//

//EJEMPLOS//

//let nombre = "Ignacio";let apellido = "Gonzalez";//

//Manera old school//

//let presentacion = "Hola, mi nombre es " + nombre + " " + apellido;//

//USANDO TEMPLATE STRINGS//
//let saludo = `Hola, me llamo ${nombre} ${apellido}`;//

//OBJETOS LITERALES//

//Los objetos literales son un conjunto de propiedades, que estan declaradas textualmente en el codigo//

//Para esto declaramos una variable la cual tendra las propiedades entre llaves y cada propiedad tendra su valor despues de los dos puntos (:) //

//TENER EN CUENTA//

//Se pueden definir funciones. Las que se van a llamar METODOS//

//EJEMPLO//

let auto = {
  marca: "Fiat",
  modelo: "Uno",
  combustible: "Nafta",
  encendido(estado) {
    if (estdo === true) {
      console.log("arranco");
    } else {
      console.log("detenido");
    }
  },
};

//Para acceder a una PROPIEDAD escribimos el nombre del objeto seguido de un punto y luego la propiedad//

auto.marca; //'Fiat'//

//Para acceder a un METODO escribimos el nombre del objeto seguido de un punto y a continuacion el metodos con parentesis. Si necesitara un parametro lo colocamos dentro de los parentesis//

auto.encendido(true); //'arranco'//

//ARRAYS//

//Coleccion de datos que se usa para guardar multiples valores en una sola variable//

//Se declara una variable y la inicializamos con corchetes, dentro de estos definimos cada ELEMENTO. para acceder a cada uno necesitamos lo llamamos con su posicion (que comienzan desde cero. Hay muchos metodos y propiedades que se pueden usar con los ARRAYS//

//EJEMPLO DE ARRAY//

let alumnos = ["Juan", "Laura", "Nicanor", "Eric"];

//EJEMPLO DE ACCESO A UN ELEMENTO DEL ARRAY //
alumnos[2]; //'Nicanor'//

//EJEMPLO DE CANTIDAD DE ELEMENTOS DE UN ARRAY//

alumnos.length; //4//

//EJEMPLO DE COMO RECORRER UN ARREGLO//
alumnos.forEach(function (alumno) {
  console.log(`Nombre:${alumno}`);
});

//CHEATSHEET de ARRAYS//

//Para conectar todos los ELEMENTOS en un STRING//

alumnos.join("-");

//Agregar ELEMENTOS al final del ARRAY//

alumnos.push("Jorge");

//Agregar ELEMENTOS al principio del ARRAY//
alumnos.unshift("Walter");

//Eliminar el ultimo ELEMENTO del ARRAY//
alumnos.pop();

//Eliminar el primer ELEMENTO del ARRAY//
alumnos.shift();

//Eliminar ELEMENTOS mediante su posicion//

let pos = 2;
alumnos.splice(pos, 1);

//Eliminar varios ELEMENTOS a partir de una posicion//

pos = 2;
alumnos.splice(pos, 3);

//Encontrar el indice de un elemento//

const indice = alumnos.indexOf("juan");
alumnos[indice];

//Encontrar un ELEMENTO//
alumnos.includes("jose");

//Reemplazar valores//
alumnos.splice(2, 1, "Alberto");

//CONCATENAR ARRAYS//
let alumnas = ["MArgarita", "Kelly", "Florinda", "Rupertina"];
let comision = alumnas.concat(alumnos);

//Ordenar de A-Z//
console.log(comision.sort());

//ARRAYS METODOS//

//Algunos metodos de los arreglos nos permiten realizar busquedas o filtros a traves de CALLBACKS

//El metodo FIND -find()- devuelve el valor del primer elemento del ARRAY que cumple la funcion de prueba proporcionada//

//EJEMPLO FIND()//

let resultadofind = alumno.find(function (alumno) {
  return alumno === "Nicanor";
});

//El metodo FILTER -filter()- crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada.//

//EJEMPLOS//

let alumnos = ["Fabrizio", "Alberto", "Juan", "Ivana", "Sol"];
let numeros = [50, 78, 35, 100, 150];

//FILTER//
let nuevaLista = alumnos.filter(function (alumno) {
  return alumno.includes("an");
});
//El console.log(nuevaLista) nos daria el siguiente resultado:'Juan', 'Ivana'//

let multiplosCinco = numeros.filter(function (numero) {
  return numero % 5 === 0;
});

//El console.log(multiploscinco) nos daria el siguiente resultado: [50, 35, 100, 150]
