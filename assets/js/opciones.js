function toggleOpciones(id) {
    var opciones = document.getElementById(id);
    if (opciones.style.display === "none" || opciones.style.display === "") {
        opciones.style.display = "block";
    } else {
        opciones.style.display = "none";
    }
}
