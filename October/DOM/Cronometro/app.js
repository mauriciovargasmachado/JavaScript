const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReinicio = document.getElementById('boton-reiniciar');

let[horas,minutos,segundos]=[0,0,0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro(){
    segundos++;

    if(segundos/60 ===1){
        segundos =0;
        minutos++;

        if(minutos/60 ===1){
            minutos = 0;
            horas++;
        }
    }

    const segundosFormato = asignarFormato(segundos);
    const minutosFormato =  asignarFormato(minutos);
    const horasFormato =    asignarFormato(horas);

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`; 

}

function asignarFormato(unidadTiempo){
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
}


botonInicioPausa.addEventListener('click',function(){
   if(estadoCronometro === 'pausado'){
    intervaloDeTiempo = window.setInterval(actualizarCronometro,1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-circle"></i>'
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'activado';

   }else{
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado'


   } 
});

botonReinicio.addEventListener('click',function(){
    window.clearInterval(intervaloDeTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerText = "00:00:00";
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');

    estadoCronometro = 'pausado'


    }

)