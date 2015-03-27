function pulsar(){
    var CabeceraPagina;
    CabeceraPagina=document.getElementById("CabeceraPagina");
    CabeceraPagina.addEventListener('click',alertaClick);
    function alertaClick(){
        alert("EL contenido es"+CabeceraPagina.innerHTML);
    }
}
addEventListener('load',pulsar);