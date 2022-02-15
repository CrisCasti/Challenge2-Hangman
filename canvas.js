
    var pantalla=document.querySelector("#ahorcado");
    var pincel=pantalla.getContext("2d");
    
    function crearTableroDeJuego(){
    pincel.fillStyle="black";
    pincel.lineWidth = 5; 
    
    //base
    pincel.beginPath(); 
    pincel.moveTo(100,720);
    pincel.lineTo(340,720);
    pincel.lineTo(220,690);
    pincel.closePath();
    pincel.fill();

    //mastil    
    pincel.beginPath(); 
    pincel.moveTo(220,690);
    pincel.lineTo(220,80);
    pincel.lineTo(600,80);
    pincel.lineTo(600,130)
    pincel.stroke(); 
    }   
    
    function dibujarHorca(errores){
    pincel.fillStyle="white";
    pincel.lineWidth=10;
    //cabeza
    if (errores>=1) {
    pincel.beginPath(); 
    pincel.arc(600,180,50,0,Math.PI*2,true); 
    pincel.stroke();
    }

    //cuerpo
    if(errores>=2){
    pincel.beginPath(); 
    pincel.moveTo(600,230); 
    pincel.lineTo(600,400);  
    pincel.stroke();
    }

    //pierna derecha
    if (errores>=3){
    pincel.lineTo(500,520);  
    pincel.lineTo(600,400);    
    pincel.stroke();
    }

    //pierna izq
    if (errores>=4){
    pincel.lineTo(700,520);     
    pincel.lineTo(600,400);     
    pincel.stroke();
    }

    //mano derecha
    if (errores>=5){
    pincel.moveTo(600,320);        
    pincel.lineTo(500,220);         
    pincel.stroke();
    }

    //mano izq
    if (errores>=6){
    pincel.lineTo(600,320);            
    pincel.lineTo(700,220);             
    pincel.stroke(); 
    }
    }

    function dibujarLetraPalabra(tecla,posicion){
        pincel.font="50pt comic";
        pincel.fillStyle = "white";
        pincel.fillText(tecla, (360+posicion*80), 700);
    }

    

function dibujarGanaste(){
    pincel.font="60pt comic";
    pincel.fillStyle="white";
    pincel.fillText("¡Ganaste!",730,200);
}

function dibujarPerdiste(){
    pincel.font="60pt comic";
    pincel.fillStyle="white";
    pincel.fillText("¡Perdiste!",730,200); 
}

function dibujarPalabraSecreta(palabra){
    palabraA=palabra.join("");
    console.log(palabra);
    pincel.font="25pt comic";
    pincel.fillStyle="white";
    pincel.fillText("La palabra era: "+palabra,750,300);  
}

function dibujarletasIncorrectas(letra, errores){
    pincel.font="40pt comic";
    pincel.fillStyle = "white";
    pincel.fillText(letra, (790+errores*50), 400);
}


 crearTableroDeJuego();
