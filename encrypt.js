function encriptar(){
    var contraseña = document.getElementsByTagName("input")[0].value;
    var contraseña_codificada = btoa(contraseña);
    document.getElementById("resultado").innerHTML = contraseña_codificada;
}

function desencriptar(){
    var contraseña = document.getElementsByTagName("input")[0].value;
    var contraseña_descodificada = atob(contraseña);
    document.getElementById("resultado").innerHTML = contraseña_descodificada;
}