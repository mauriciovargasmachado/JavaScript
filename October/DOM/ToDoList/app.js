const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea(){
    if(input.value){

        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        input.value = "";

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        completar.addEventListener('click',completarTarea)

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar,eliminar);

        listaTareas.appendChild(tareaNueva);
    }
    else{
        alert('Please insert a new item!')
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}


boton.addEventListener('click',agregarTarea);

input.addEventListener('keydown',(e)=>{
    if(e.key ==='Enter'){
        agregarTarea();
        input.value = "";
    }
});
