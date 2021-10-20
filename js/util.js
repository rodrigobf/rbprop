function validarFormulario(){
    var nombre = document.getElementById("nombre");
    var telefono = document.getElementById("telefono");
    var mail = document.getElementById("mail");
    var error = document.getElementById("error");    

    console.log("enviando form");

    var mensajeError;

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push("ingresa nombre");
    }


    if(telefono.value === null || telefono.value === ' '){
        mensajeError.push("ingresa apellido");
    }

    error.innerHTML = mensajeError.join(', ');
    return false;
}

