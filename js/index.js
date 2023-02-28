// Hola soy juan manuel tengo 14 años en este momento y me gusta 📖🏊🎮🧑‍💻

// Puntos U / PC
let puntosUsuario = 0;
let puntosPC = 0;

// Elementos
const msjBatalla = document.getElementById('msj-batalla');
const seccionBatalla = document.getElementById('campo-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
// Botones
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

const img = [
    {
        name: "Piedra",
        url: "assets/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijera",
        url: "assets/Tijeras.PNG" 
    }
];


function iniciar(){
    seccionBatalla.style.display = 'none';
};

// Piedra
btnPiedra.addEventListener('click', function(){
    eleccionUsuario = "Piedra";
    opcionPC();
});

// Papel
btnPapel.addEventListener('click', function(){
    eleccionUsuario = "Papel";
    opcionPC();
});

// Tijeras
btnTijeras.addEventListener('click', function(){
    eleccionUsuario = "Tijera";
    opcionPC();
})


// Opciones del PC
function opcionPC(){
    // piedra -> 0
    // papel  -> 1
    // tijera -> 2
    let aleaorio = Math.floor(Math.random() * 3);
    
    // Elecion del PC
    if(aleaorio == 0){
        eleccionPC = "Piedra";
    }else if(aleaorio == 1){
        eleccionPC = "Papel";
    }else if(aleaorio == 2){
        eleccionPC = "Tijera"
    };

    batalla();

};


// Gana, Pierde o Empata
function batalla() {

    // piedra > tijera
    // tijera > papel
    // papel  > piedra
    // empate

    if(eleccionUsuario == eleccionPC){
        empate();
    }else if(
        (eleccionUsuario === "Piedra" && eleccionPC === "Tijera") ||
        (eleccionUsuario === "Tijera" && eleccionPC === "Papel") ||
        (eleccionUsuario === "Papel" && eleccionPC === "Piedra")
    ){
        ganaUsuario();
    }else if(
        (eleccionPC === "Piedra" && eleccionUsuario === "Tijera") ||
        (eleccionPC === "Tijera" && eleccionUsuario === "Papel") ||
        (eleccionPC === "Papel" && eleccionUsuario === "Piedra")
    ){
        ganaPC();
    };

    addimg();

    // Ganador del juego
    if (puntosPC === 5 || puntosUsuario === 5) {
    
        if (puntosUsuario >= 5) {
            msjBatalla.innerHTML = (`¡Ganastes el juego 🔥! - 🫥: ${puntosUsuario} | 🤖: ${puntosPC} (Por favor reiniciar pag)`/*, reiniciarJuego()*/);
        } 

        if (puntosPC >= 5){
            msjBatalla.innerHTML = (`¡🤖 Gano el juego! - 🫥: ${puntosUsuario} | 🤖: ${puntosPC} (Por favor reiniciar pag)` /*, reiniciarJuego()*/);
        }
        
    }
}

// Empate
function empate() {
    msjBatalla.innerHTML = (`¡Empate! 😱 Puntos: 🫥: ${puntosUsuario}  🤖: ${puntosPC}`);
}
// Gana Usuario + 1 Punto
function ganaUsuario() {
    puntosUsuario++;
    msjBatalla.innerHTML = (`¡Ganaste un punto! 🔥 Puntos: 🫥: ${puntosUsuario} | 🤖: ${puntosPC}`);
}
// Gana PC + 1 Punto
function ganaPC() {
    puntosPC++;
    msjBatalla.innerHTML = (`¡La computadora ganó un punto! 😭 Puntos: 🫥: ${puntosUsuario} | 🤖: ${puntosPC}`);
}

// Agregar img
function addimg(){
    for(i = 0; i < img.length; i += 1){

        if(eleccionUsuario == img[i].name){
            let imgJugador = img[i].url;
            let inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(eleccionPC == img[i].name){
            let imgPc = img[i].url;
            let inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
    };
    
    seccionBatalla.style.display = 'flex';
    
};

// function reiniciarJuego() {
//     reiniciar.classList.add("disabled");
//     puntosUsuario = 0;
//     puntosPC = 0;
// }
