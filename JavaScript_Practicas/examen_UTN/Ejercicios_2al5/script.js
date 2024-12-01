/* ejericio 2. Recetario.
Un programador quiere crear un sitio donde el usuario pueda ingresar el nombre de un plato
y le muestre su receta.Este programador pudo hacer la parte visual y hasta armo un array
con las recetas y platos que brinda el sitio, el cual les dejamos a continuación: */

let recetario = [
    {
        plato: "ñoquis caseros",
        receta: "Mezclar pure de papas, harina, queso y especias. Una vez unida la mezcla armar pequeñas tiras de masa y cortarlas en dados de 3cm. Darle forma con el tenedor.",
    },
    {
        plato: "humus",
        receta: "Procesar 100gr de garbanzos, un diente de ajo, aceite de oliva y jugo de limon hasta armar una pasta homogenea. Colocar en un pote, decorar con aji molido.",
    },
    {
        plato: "papas fritas",
        receta: "Cortar las papas en forma de baston. Calentar el aceite y una vez caliente, tirar las mismas. Una vez doradas, sacar del fuego y escurrir en papel de rollo de cocina.",
    },
];

/* Les pedimos que ayuden a este programador armando la función que tome el valor que
ingreso el usuario y que al clickear el boton “receta”,le devuelva en el recuadro verde lo que
pidió el usuario.
En caso que el plato que busca el usuario no se encuentre en la lista, les
pedimos que la función devuelva en el recuadro verde la frase:
“lo sentimos, nuestro recetario no dispone de la receta de este plato por el momento” */

function mostrarReceta() {
    let receta = document.getElementById("recetario").value;
    let platoEncontrado = recetario.find(item => item.plato === receta);

    if (platoEncontrado) {
        document.getElementById("recuadroVerde").textContent = platoEncontrado.receta;
    } else {
        document.getElementById("recuadroVerde").textContent = "Lo sentimos, nuestro recetario no dispone de la receta de este plato por el momento";
    }
}

/* ejercicio 3. Sacando palabras. 
Dado el siguiente array*/

let frase=["pablito","clavo","un","clavito"];

/* Hacer un programa donde se muestre en el HTML la frase “pablito clavo un clavito”.
Agregar a este programa la posibilidad de que al ingresar una de las palabras en el
input la saque de la oración. */

function mostrarFrase() {
    for (let i = 0; i < frase.length; i++) {
        document.getElementById("parrafo").textContent += frase[i] + " ";
    }
}
mostrarFrase();

function sacarPalabra() {
    let palabra = document.getElementById("inpufrase").value;
    frase = frase.filter(item => item !== palabra);
    document.getElementById("parrafo").textContent = "";
    mostrarFrase();
}

/* ejercicio 4. Sorpresa. 
Hacer un programa donde al pasar con el mouse sobre el titulo “sorpresa” ,
cambie el fondo de color a “pink” y aparezca el payaso.
TIP: el payaso es una imagen que tenemos en la carpeta,también recordemos como
hacemos para ocultar o mostrar cosas...*/

let divSorpresa = document.getElementsByClassName("tema")[0];
let sorpresa = document.getElementsByClassName("sorpresa")[0];
let imagenPayaso = document.createElement("img");

function crearPayaso() {
    // Crear la imagen de un payaso
    imagenPayaso.src = "imagenes/payaso.webp";
    imagenPayaso.alt = "Payaso";
    imagenPayaso.style.width = "100px";
    imagenPayaso.style.display = "none";

    divSorpresa.appendChild(imagenPayaso);
}
crearPayaso();

function mostrarPayaso() {
    imagenPayaso.style.display = "block";
    divSorpresa .style.background = "pink";

    sorpresa.addEventListener("mouseout", () => {
        imagenPayaso.style.display = "none";
        divSorpresa.style.background = "none";
    });
}

/*ejercicio 5. Guerrero medieval.
Tenemos un sitio donde se arman personajes. En este tenemos definido las
tarjetas con los personajes y un boton para agregarle fuerza
Les pedimos que dado la tarjeta creada, hagan una funcion donde cada vez que
se haga click en el boton “sumar Fuerza” cambie el valor del “total puntos
adquiridos” que se encuentra debajo de la tarjeta . Es decir que si hacemos click
2 veces nos devuelva en el recuadro total 100 puntos.
Por otro lado, les pedimos hacer otra funcion pero en el boton “sacar fuerza” ;
donde al hacer click en el boton saque del total 50 puntos.
Ejemplo de como debe funcionar el programa:
Si hacemos dos veces click en sumar Fuerza */

let fuerza = 0;
let textoInicial = document.getElementById("idTotal").textContent;

function sumarFuerza() {
    fuerza += 50;
    mostrarFuerza();
}

function sacarFuerza() {
    if (fuerza >= 50) {
        fuerza -= 50; 
    }
    mostrarFuerza();
}

function mostrarFuerza() {
    document.getElementById("idTotal").textContent = `${textoInicial}${fuerza}`;
}

/* Comentario personal.
En general me gusto mucho resolver los ejercicios del 2 a 5, mi favorito fue el del payaso me hizo pensar bastante en la manera de como hacerlo.
Tome la decición de practicamente no alterar el HTML solo colocar las funciones, por esu tuve que crear el payaso mediante javascript, fue divertido.
*/
