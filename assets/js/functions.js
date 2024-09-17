const url = 'http://localhost:3000/roles'

const urlParams =  new URLSearchParams(window.location.search);
const id = urlParams.get("id")

const listRoles = async()=>{
    const content = document.getElementById('content')
    let response = ''

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(function(data) {
        let list = data.roles //capturar el array devuelto por la api
        console.log(list)
        list.map(function(roles){ //Recorrer el array
            response += `<tr><td>${roles.idRol}</td>`+
            `<td>${roles.nombre}</td>`+
            `<td>${roles.estado}</td>`+
            `<td class="actions"><a href='/assets/views/Roles/editarRol.html?id=${roles._id}'><span class="las la-edit blue"></span></a>`+
            `<a href='.html'><span class="las la-eye white"></span</a>`+
            `<a href='#' onclick="deleteRoles('${roles._id}')"><span class="las la-ban red"></span></a>`+
            `</tr>`
            content.innerHTML = response
        }) 
    })
} 

const createRoles = async() =>{
    const rol = {
        idRol: document.getElementById('idRol').value,
        nombre: document.getElementById('nombreRol').value,
        estado: document.getElementById('estadoRol').value,
    }
    console.log(rol)

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(rol),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(json =>{
        // alert(json.msg); // Mostrar el mensaje de éxito
        window.location.href = '/assets/views/Roles/roles.html'; // Redirigir a la lista de roles
    })
}

const editRoles = async()=>{
    const urlParams = new URLSearchParams(window.location.search); 
    let id = urlParams.get('id') // Get variable id from url
    console.log(url+'/'+id)
    fetch(url+'/'+id, { // Petición 
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obteniendo la respuesta 
    .then(json => {
        document.getElementById('idRol').value = json.idRol
        document.getElementById('nombreRol').value = json.nombre
        document.getElementById('estadoRol').value = json.estado
    })
}

const updateRoles = async()=>{
    const data = {
        idRol: document.getElementById('idRol').value,
        nombre: document.getElementById('nombreRol').value,
        estado: document.getElementById('estadoRol').value
    };
    console.log(data)
    try {
        const response = await fetch(url+'/'+id, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        if(response.ok){
            const json = await response.json();
            alert(json.msg)
            window.location.href = '/assets/views/Roles/roles.html'
        }else {
            console.log("Error", response.status)
        }

    }catch(error){
        console.error('Error en la solicitud:', error)
    }
}

const deleteRoles = async(id) => {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(json => {
        alert(json.msg)
        deleteRoles()
        location.reload()
    })
}


