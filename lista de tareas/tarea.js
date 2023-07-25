function ingresar() {
    let tarea = document.getElementById("tarea").value
    const hijo = document.createElement('div')
    hijo.classList.add('hijo')

    let task = document.createElement('p')
    task.textContent = tarea;
    task.classList.add('task')
    document.getElementsByClassName('task').textContent = " ";

    hijo.appendChild(task)
    const padre = document.querySelector('#padre')
    padre.appendChild(hijo)

    let completar = document.createElement('i')
    completar.classList.add('bi', 'bi-check')
    completar.addEventListener('click', completar_tarea)

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-backspace-fill')
    eliminar.addEventListener('click', eliminar_tarea)

    let editar = document.createElement('i')
    editar.classList.add('bi', 'bi-pencil-square')
    editar.addEventListener('click' , editar_tarea)

    const icons = document.createElement('div')
    icons.classList.add('iconos')
    icons.append(completar, editar, eliminar)
    hijo.appendChild(icons)
}

function completar_tarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completo')
}

function eliminar_tarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove()
}

function editar_tarea(e) {
    let tarea = e.target.parentNode.parentNode;
    let textotarea = tarea.querySelector('p');
    textotarea.contentEditable = true;
    textotarea.focus();
    textotarea.addEventListener('blur', () => {
        textotarea.contentEditable = false;
    })
}

let print = document.createElement('i')
print.classList.add('bi' , 'bi-printer-fill')
print.addEventListener('click' , imprimir)
imprese.appendChild(print)

function imprimir() {

    window.print()
    
}