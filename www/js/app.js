$(document).ready(function () {
  numJugador();
});
$("#Iniciar").click(function () {
  verificador(estado);
});


$("#Borrar").click(function () {
  window.location.href = "";
});

var jugador = [];
window.estado = 1;

//seleccionar imágenes
var caballo1 = document.getElementById("caballo1");
var caballo2 = document.getElementById("caballo2");
var caballo3 = document.getElementById("caballo3");
var caballo4 = document.getElementById("caballo4");
var iniciar = document.getElementById("Iniciar");

//posiciones iniciales
var posicionCaballo1 = 0;
var posicionCaballo2 = 0;
var posicionCaballo3 = 0;
var posicionCaballo4 = 0;

//PuntajeJugador.
var recorrido1 = 0;
var recorrido2 = 0;
var recorrido3 = 0;
var recorrido4 = 0;

//Editar div.
var jugador = document.getElementById("Jugador");
var listaJugador = document.getElementById("Jugadores");
var puntaje = document.getElementById("Ganador");

function numJugador() {
  var jugadores = prompt("Ingrese numero de jugadores");

  for (i = 0; i < jugadores; i++) {

    jugador.push(prompt("Nombre de Jugador"));
    console.log(jugador);
    listaJugador.innerHTML += "<ul><a>" + jugador[i] + "</a></ul>";
  }

}

function verificador(estado) {

  if (estado == 1) {
    if (jugador[1] != null) {
      jugador.innerHTML = "Turno jugador " + ": " + jugador[1];
      window.estado++;
      prueba1();
    }
    else {
      jugador.innerHTML = "Turno jugador 2";
      window.estado++;
      prueba1();
    }
  }

  else if (estado == 2) {
    if (jugador[2] != null) {
      jugador.innerHTML = "Turno jugador " + ": " + jugador[2];
      window.estado++;
      prueba2();
    }
    else {
      jugador.innerHTML = "Turno jugador 3";
      window.estado++;
      prueba2();
    }
  }

  else if (estado == 3) {
    if (jugador[3] != null) {
      jugador.innerHTML = "Turno jugador " + ": " + jugador[3];
      window.estado++;
      prueba3();
    }
    else {
      jugador.innerHTML = "Turno jugador 4";
      window.estado++;
      prueba3();
    }
  }

  else if (estado == 4) {
    if (jugador[0] != null) {
      jugador.innerHTML = "Turno jugador " + ": " + jugador[0];
      window.estado = 1;
      prueba4();
    }
    else {
      jugador.innerHTML = "Turno jugador 1";
      window.estado = 1;
      prueba4();
    }
  }
}



function prueba1() {
  var numeroAleatorio = Math.round(Math.random() * (7 - 1) + 1);
  console.log(numeroAleatorio);

  //movimiento caballo1
  if (posicionCaballo1 <= 71 && posicionCaballo1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
    posicionCaballo1 = posicionCaballo1 + numeroAleatorio; //movimiento del valor x
    caballo1.style.left = posicionCaballo1 + "%"; //aplicar el valor obtenido al left del elemento
    recorrido1 = posicionCaballo1;
    console.log(recorrido1);
  }
  else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
    if (jugador[0] != null) {
      puntaje.innerHTML += "<li><a><a>" + jugador[0] + ": " + recorrido1 + "</a></a></li>";
      alert("Felicitaciones Ganaste" + ":" + jugador[0]);
    }
    else {
      puntaje.innerHTML += "<li><a>" + "jugador 1" + ": " + recorrido1 + "</a></li>";
      alert("Ganador jugador 1");
    }
    posicionCaballo1 = 0; //posicion inicial
    caballo1.style.left = posicionCaballo1 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
  }
}


function prueba2() {

  var numeroAleatorio = Math.round(Math.random() * (7 - 1) + 1);
  console.log(numeroAleatorio);

  if (posicionCaballo2 <= 71 && posicionCaballo2 >= 0) {
    posicionCaballo2 = posicionCaballo2 + numeroAleatorio;
    caballo2.style.left = posicionCaballo2 + "%";
    recorrido2 = posicionCaballo2;
    console.log(recorrido2);
  }
  else {
    if (jugador[1] != null) {
      alert("Felicitaciones Ganaste" + ": " + jugador[1]);
      puntaje.innerHTML += "<li><a>" + jugador[1] + ": " + recorrido2 + "</a></li>";
    }
    else {
      puntaje.innerHTML += "<li><a>" + "jugador 2" + ": " + recorrido2 + "</a></li>";
      alert("Ganador Jugador 2");
    }
    posicionCaballo2 = 0;
    caballo2.style.left = posicionCaballo2 + "%";
  }
}

function prueba3() {

  var numeroAleatorio = Math.round(Math.random() * (7 - 1) + 1);
  console.log(numeroAleatorio);

  if (posicionCaballo3 <= 71 && posicionCaballo3 >= 0) {
    posicionCaballo3 = posicionCaballo3 + numeroAleatorio;
    caballo3.style.left = posicionCaballo3 + "%";
    recorrido3 = posicionCaballo3;
    console.log(recorrido3);
  }
  else {
    if (jugador[2] != null) {
      alert("Felicitaciones Ganaste" + ": " + jugador[2]);
      puntaje.innerHTML += "<li><a>" + jugador[2] + ": " + recorrido3 + "</a></li>";
    }
    else {
      alert("Ganador jugador 3");
      puntaje.innerHTML += "<li><a>" + "jugador 3" + ": " + recorrido3 + "</a></li>";
    }
    posicionCaballo3 = 0;
    caballo3.style.left = posicionCaballo3 + "%";
  }
}

function prueba4() {

  var numeroAleatorio = Math.round(Math.random() * (7 - 1) + 1);
  console.log(numeroAleatorio);

  if (posicionCaballo4 <= 71 && posicionCaballo4 >= 0) {
    posicionCaballo4 = posicionCaballo4 + numeroAleatorio;
    caballo4.style.left = posicionCaballo4 + "%";
    recorrido4 = posicionCaballo4;
    console.log(recorrido4);
  }
  else {
    if (jugador[3] != null) {
      alert("Felicitaciones Ganaste" + ": " + jugador[3]);
      puntaje.innerHTML += "<li><a>" + jugador[3] + ": " + recorrido4 + "</a></li>";
    }
    else {
      alert("Ganador jugador 4");
      puntaje.innerHTML += "<li><a>" + "jugador 4" + ": " + recorrido4 + "</a></li>";
    }
    posicionCaballo4 = 0;
    caballo4.style.left = posicionCaballo4 + "%";
  }
}
