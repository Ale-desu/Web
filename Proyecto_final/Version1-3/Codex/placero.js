var cont=0;
var img = document.getElementById("head");
var cambioHead=["../Imagenes/B.png","https://upload.wikimedia.org/wikipedia/commons/5/51/Aragon_Jonhy_corel.jpg","../Imagenes/YT.png","../Imagenes/Insta.png"]
function mov(plus=1){
  cont=cont+plus;
  if (cont==4){
    cont=0;
  }
  if (cont<=-1){
    cont=3;
  }
  img.src= cambioHead[cont]
}
