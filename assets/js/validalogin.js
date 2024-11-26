'use strict';
const btn_registro = document.querySelector('#btn-registro');
const uname = document.querySelector('#uname');
const documento = document.querySelector('#documento');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const direccion = document.querySelector('#direccion');
const password = document.querySelector('#password');
const confirma = document.querySelector('#confirma');


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frmregistro input');
    let error = false;

    for(let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == "") {
            inputs_requeridos[i].classList.add('error');
            error = true;
        }else{
            inputs_requeridos[i].classList.remove('error');
        }
    }
    
    return error;
};

let obtener_datos = () => {
    let error = validar();

    if(error){
        Swal.fire({
            'title': 'Registro Invalido',
            'text': 'Digite todos los campos correctamente',
            'icon': 'warning'
        })
    }else{
        Swal.fire({
            'title': 'Registro exitoso',
            'text': 'Se ha registrado existosamente',
            'icon': 'success' 
        });
        console.log(uname.value);
        console.log(documento.value);
        console.log(telefono.value);
        console.log(email.value);
        console.log(direccion.value);
        console.log(password.value);
        console.log(confirma.value);
    }
};

btn_registro.addEventListener("click", obtener_datos);
// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);

// let uname = id("uname"),
//     documento = id("documento"),
//     telefono = id("telefono"),
//     email = id("email"),
//     direccion = id("direccion"),
//     password = id("password"),
//     confirma = id("confirma"),
//     errorMsg = classes("error"),
//     successIcon = classes("success-icon"),
//     failureIcon = classes("failure-icon");

// frmregistro.addEventListener("submit", (e) => {
//     e.preventDefault();
//     engine(uname, 0, "Ingresa un nombre válido", /^[a-zA-Z\s]+$/);
//     engine(documento, 1, "Ingresa un documento válido", /^[0-9]{8,10}$/);
//     engine(telefono, 2, "Ingresa un teléfono válido", /^[0-9]{7,10}$/);
//     engine(email, 3, "Ingresa un email válido", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
//     engine(direccion, 4, "Ingresa una dirección válida", /^[a-zA-Z0-9\s,.'-]{3,}$/);
//     engine(password, 5, "Ingresa una contraseña válida", /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
//     engine(confirma, 6, "Las contraseñas no coinciden", new RegExp(`^${password.value}$`));
// });

// let engine = (id, serial, message, regex) => {
//     if (id.value.trim() === "" || !regex.test(id.value.trim())) {
//         errorMsg[serial].innerHTML = message;
//         id.style.border = "2px solid red";
//         id.style.borderRadius = "55px";
//         id.style.padding = "0 0.7rem";
//         id.style.width = "102%";

//         // Icons
//         failureIcon[serial].style.opacity = "1";
//         successIcon[serial].style.opacity = "0";
//     } else {
//         errorMsg[serial].innerHTML = " ";
//         id.style.border = "2px solid green";
//         id.style.borderRadius = "55px";

//         // Icons
//         failureIcon[serial].style.opacity = "0";
//         successIcon[serial].style.opacity = "1";
//     }
// }
