let numeroSecret = 0;
let intentos= 1;




function textoElemento(elemento, texto){

let elementohtml = document.querySelector(elemento);
elementohtml.innerHTML = texto;

return;

}

function acertarNumero() {

    let numeroUser = parseInt(document.getElementById(NumberUser).value);

    if(numeroSecret === numeroUser){


    }  else{


        
    }

    
}



textoElemento('h1', "Juego del calamar");
textoElemento('p', "Hola bb");