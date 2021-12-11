/*Contador*/
var cont=0;
/*se busca el elemento*/
var img = document.getElementById("head");
/*se guardan los elementos*/
var cambioHead=["../Imagenes/Evento_1.png","../Imagenes/Evento_2.png","https://i.ytimg.com/vi/y4gE38cGxKw/maxresdefault.jpg","../Imagenes/Evento_4.png"];
/*se rotan los elementos*/
function mov(plus){
  cont=cont+plus;
  if (cont==4){
    cont=0;
  }
  if (cont<=-1){
    cont=3;
  }
  img.src= cambioHead[cont]
}
