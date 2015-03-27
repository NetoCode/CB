//*Practica 75*//

function pulsar () {
	var fotos;
	fotos = document.querySelectorAll(".galeria img");    
	for (var No = 0; No < fotos.length; No++) {
		fotos[No].addEventListener('click',alertaClick);        
        function alertaClick(){
            alert("Esta es una foto");
        }
	}
}

addEventListener("load",pulsar);

//*Practica 76*//

function iniciar () {
    var imagen1 = document.querySelector("#sobreContxita img"); //*La imagen del doc*//
    var fuentes = new Array(); //*Crea una matriz de fuentes*//
    fuentes[0]="imagenes/ContxitaBentz01.jpg";
    fuentes[1]="imagenes/CBdePie.jpg";
    fuentes[2]="imagenes/CBdePie1.jpg";
    
    var x = 0; //*Variables que controlen el bucle*//
    var i = fuentes.length;
    
    //*Bucle*//
    function cambiar () {
    	x++;
    	if (x = = 1) {
    		x = 0;
    	}

    	imagen1.src=fuentes[x]; //*Cambia la fuente de la imagen por el valor suministrado en bucle*// 
    	   
    }
   
    imagen1.addEventListener('click',cambiar);
    
}
window.onload = iniciar;