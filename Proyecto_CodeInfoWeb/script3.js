let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes img');
    soltar = document.getElementById('cajasoltar');
    soltar2 = document.getElementById('cajasoltar2');
    soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
        e.preventDefault(); }, false)
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e) {
    e.preventDefault();
    
    let id = e.dataTransfer.getData('Text');
    let nuevaImagen = document.getElementById(id);
    
    if (!nuevaImagen) return;

    let cajaDestino = e.target;

    if (cajaDestino.tagName === "IMG") {
        cajaDestino = cajaDestino.parentElement;
    }

    let imagenAnterior = cajaDestino.querySelector("img");

    if (imagenAnterior) {
        let cajaOrigen = nuevaImagen.parentElement;
        // Remover la imagen anterior del destino y agregarla a la caja de origen
        cajaOrigen.innerHTML = '';
        cajaOrigen.appendChild(imagenAnterior);
        
        imagenAnterior.style.display = "block";
        imagenAnterior.draggable = true;
        imagenAnterior.addEventListener('dragstart', arrastrado, false);
    } else {
        nuevaImagen.style.display = "none";
    }

    // Limpiar el contenido de la caja destino antes de agregar la nueva imagen
    cajaDestino.innerHTML = '';

    // Clonar la imagen para moverla sin duplicar
    let nuevaImgColocada = nuevaImagen.cloneNode(true);
    nuevaImgColocada.style.display = "block";
    nuevaImgColocada.draggable = true;
    nuevaImgColocada.addEventListener('dragstart', arrastrado, false);

    // Agregar la nueva imagen a la caja destino
    cajaDestino.appendChild(nuevaImgColocada);
}

function reinicio() {
    window.location.reload();
}

iniciar()