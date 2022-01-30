y = document.body.getElementsByTagName('*'); 
function z() { for (i=0; i < y.length; i++) { y[i].style.fontSize = Math.random()*50+"px";
 y[i].style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16); } } setInterval(z,500);