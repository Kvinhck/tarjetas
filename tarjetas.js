function crearTarjetas(){
    let desde=document.getElementById("txtDesde");
    let hasta=document.getElementById("txtHasta");
    let salto=document.getElementById("txtSalto");
    let saltoStr=salto.value;
    let desdeStr=desde.value;   
    let hastaStr=hasta.value;
    let numDesde=parseInt(desdeStr);
    let numHasta=parseInt(hastaStr);
    let numSalto=parseInt(saltoStr);
    let contenido="";
    let divTarjetas=document.getElementById("divTarjetas");

    for (let i=numDesde;i<=numHasta;i+=numSalto){
        contenido=contenido+"<div class='item'>"+i+"</div>";
        divTarjetas.innerHTML=contenido;
    }
}