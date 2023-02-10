const jugador = prompt("Ingrasa tu elecion ( Piedra 🪨 | Papel 📋| Tijeras ✂️ ) tienes un ❤️").toLowerCase()
opcionDePc();

function opcionDePc() {
    var aleatorio = Aleatorio();

    if (aleatorio == 0) {
        pc = "piedra";
    } else if (aleatorio == 1) {
        pc = "papel";
    } else if (aleatorio == 2) {
        pc = "tijeras";
    }

}


function batalla() {
    if ((jugador || segundaOP) == pc) {
        document.write("Empate 🫤");
    }
    
    else if ((jugador || segundaOP) == "piedra" && pc == "tijeras") {
        document.write('<div class="card"><img src="assets/Piedra.png"/></div>');
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Tijeras.png"/></div>');
        document.write("<h2>Ganaste 😎!</h2>");
    } 

    else if ((jugador || segundaOP) == "papel" && pc == "piedra") {
        document.write('<div class="card"><img src="assets/Papel.png"/></div>');
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Piedra.png"/></div>');
        document.write("<h2>Ganaste 😎!</h2>");   
    } 

    else if ((jugador || segundaOP) == "tijeras" && pc == "papel") {
        document.write('<div class="card"><img src="assets/Tijeras.png"/></div>');
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Papel.png"/></div>');
        document.write("<h2>Ganaste 😎!</h2>");
    } 

    else if ((jugador || segundaOP) == "piedra" && pc == "papel") {
        document.write('<div class="card"><img src="assets/Piedra.png"/></div>');
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Papel.png"/></div>');
        document.write(" ¡La computadora ganó el juego! 😭");
    } 

    else if ((jugador || segundaOP) == "papel" && pc == "tijeras") {
        document.write('<div class="card"><img src="assets/Papel.png"/></div>'); 
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Tijeras.png"/></div>');
        document.write(" ¡La computadora ganó el juego! 😭");
    } 

    else if ((jugador || segundaOP) == "papel" && pc == "piedra") {
        document.write('<div class="card"><img src="assets/Papel.png"/></div>');
        document.write("Eleción de la computadora");
        document.write('<div class="card"><img src="assets/Piedra.png"/></div>');
        document.write(" ¡La computadora ganó el juego! 😭");
    } 
    else {
        document.write("Escribe bien");
    }
}

batalla();

// Vidas

let vidas = 1;
while (vidas != 0) {
    if ((jugador || segundaOP) == pc) {
        document.write(`<h3> Tienes: ${vidas} ❤️</h3>`)
        let segundaOP = prompt("Empate 🔥! Juega de nuevo ( Piedra 🪨 | Papel 📋 | Tijeras ✂️ )").toLowerCase()
        opcionDePc();
        console.log(segundaOP)
        break
    } else if( (jugador || segundaOP) == "piedra" && pc == "tijeras"){
        document.write(`<h3> Tienes: ${vidas} ❤️</h3>`)
        let segundaOP = prompt("Ganaste 🔥! Juega de nuevo ( Piedra 🪨 | Papel 📋 | Tijeras ✂️ )").toLowerCase()
        opcionDePc();
        console.log(segundaOP)
        break
    } else if( (jugador || segundaOP) == "papel" && pc == "piedra"){
        document.write(`<h3> Tienes: ${vidas} ❤️</h3>`)
        let segundaOP = prompt("Ganaste 🔥! Juega de nuevo ( Piedra 🪨 | Papel 📋 | Tijeras ✂️ )").toLowerCase()
        opcionDePc();
        console.log(segundaOP)
        break
    } else if( (jugador || segundaOP) == "tijeras" && pc == "papel"){
        document.write(`<h3> Tienes: ${vidas} ❤️</h3>`)
        let segundaOP = prompt("Ganaste 🔥! Juega de nuevo ( Piedra 🪨 | Papel 📋 | Tijeras ✂️ )").toLowerCase()
        opcionDePc();
        console.log(segundaOP)
        break
    } else if( (jugador || segundaOP) == "piedra" && pc == "papel" ){
        vidas--
        document.write(`<h2> Tienes: ${vidas} ❤️</h2>`)
        break
    } else if( (jugador || segundaOP) == "papel" && pc == "tijeras" ){
        vidas--
        document.write(`<h2> Tienes: ${vidas} ❤️</h2>`)
        break
    } else if( (jugador || segundaOP) == "papel" && pc == "piedra" ){
        vidas--
        document.write(`<h2> Tienes: ${vidas} ❤️</h2>`)
        break
    }
}
    
// Aleatorio

function Aleatorio() {
    let opcion = Math.floor(Math.random() * 3);
    return opcion;
}