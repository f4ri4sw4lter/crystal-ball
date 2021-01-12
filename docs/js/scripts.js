let datos = [];
var cantDatos = 0;

function agregarDato(){
    var dato = document.getElementById("dato").value;
    if(dato == ''){
        $.notify("Debe cargar una opcion", "error");
    }else{
        cantDatos ++;
        datos.push(dato);
        console.log(datos);
        document.getElementById("dato").value = '';
        document.getElementById("dato").focus();
        $.notify("Opcion cargada", "success");
    }
}

function apretarEnter(e){
    if(e.keyCode === 13 && !e.shiftKey){
        agregarDato();
    }
}

function random(){
    if(cantDatos <= 1){
        $.notify("Debe cargar almenos dos opciones", "error");
    }else{
        var rand = Math.floor(Math.random() * cantDatos);
        console.log(rand);
        document.getElementById("resultado").innerHTML = datos[rand];
        document.getElementById("dato").focus();
        reset();
    }
}

function reset(){
    cantDatos = 0;
    datos = [];
    var dato = document.getElementById("dato").value = '';
}

function playRisa() {
    let sonido = document.createElement("audio");
    sonido.src = "assets/mp3/risa.mp3";
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};