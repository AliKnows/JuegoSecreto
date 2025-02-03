//variables

let numeroSecret=0;
let listaNumeroSorteado = [];
let intentos = 0;
let numeroMaximo=10;

//console.log(numeroSecret);
//numeroMaximo= prompt("Indica un numero maximo de intentos:");



//funciones

function asignarTextoElemnto(elemento, texto){ //conectar el html con Js
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;

}

function verificarIntento()
{
//let numeroDelUsuario = document.querySelector('NumberUser');
  let numeroDelUsuario = parseInt(document.getElementById('NumberUser').value); 
  
  
  /*
  para validar 
  
  console.log(numeroSecret);
  console.log(typeof(numeroSecret));
  console.log(numeroDelUsuario); 
  console.log(typeof(numeroDelUsuario));
  console.log(numeroSecret === numeroDelUsuario); //TRIPLE igual para validar que se cumplan que ambas variables sean int
      */
    if(numeroSecret===numeroDelUsuario){

      asignarTextoElemnto('p',`¡Ganaste! acertaste en ${intentos} ${contarIntentos()} y el numero era ${numeroSecret}`);
      document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
      //El usuario no acerto
      if(numeroDelUsuario>numeroSecret){
        asignarTextoElemnto('p',`El numero secreto es menor`);

    }else if(numeroDelUsuario<numeroSecret){
      asignarTextoElemnto('p',`El numero secreto es mayor`);
    }

   
    intentos++;
  limpiarCajaTetxo();
  }
  return;

}

function limpiarCajaTetxo() {

   /* let valorCaja = document.querySelector(`#NumberUser`);
  valorCaja.value='';

*/

document.querySelector(`#NumberUser`).value ='';

  

  return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si los numero de la lista ya fueron sorteados
    if (listaNumeroSorteado.length == numeroMaximo) {
      asignarTextoElemnto('p','YA Salieron todos los numero posibles');
      
    }else{


        //metodo includes recorre si en la lista ya esta registrado algun dato 
      if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
      }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
      }
    }
}
function contarIntentos(){
     
  let vezoveces;
    if(intentos==1) {
        vezoveces = "vez";
     }else{
          vezoveces = "veces";
     }

     return vezoveces;
}
function condicionesIniciales() {
  
  asignarTextoElemnto('h1',"Juego Numero Secreto");
  asignarTextoElemnto('p', `Indica un numero entre a 1 y ${numeroMaximo}`);
  numeroSecret = generarNumeroSecreto();
  intentos = 1;
}

function nuevoJuego() {
  
    //eventos a realizar
    //1.Limpiar la caja
    limpiarCajaTetxo();
    //2. Indicar mensaje
    //3. reiniciar el numero secreto 
    //4. inicializar los intentos 
    condicionesIniciales();
    //5 boton desabilitado
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
  


}

condicionesIniciales();
