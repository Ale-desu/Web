var cont=0;

function mov(plus=-1){
  cont=cont+plus;
  if (cont>=4){
    cont=0;
  }
  if (cont<=-1){
    cont=4
  }
  var img = document.getElementById("head");
  //console.log(resultado)
  img.src= "https://upload.wikimedia.org/wikipedia/commons/5/51/Aragon_Jonhy_corel.jpg";
alert(cont)
}
