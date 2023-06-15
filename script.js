// Verifica si ya existe un tiempo inicial almacenado
var initialTime = localStorage.getItem("initialTime");

// Si no hay tiempo inicial almacenado, establece uno nuevo
if (!initialTime) {
  initialTime = new Date().getTime();
  localStorage.setItem("initialTime", initialTime);
}

// Establece la duración de la oferta en 6 horas (en milisegundos)
var duration = 6 * 60 * 60 * 1000;

// Calcula el tiempo límite sumando el tiempo inicial y la duración
var deadline = parseInt(initialTime) + duration;

// Actualiza el contador cada segundo
var x = setInterval(function() {
  // Obtiene la fecha y hora actual
  var now = new Date().getTime();

  // Calcula la distancia entre la fecha y hora actual y el tiempo límite
  var distance = deadline - now;

  // Calcula las horas, minutos y segundos restantes
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Formatea los minutos y segundos para que siempre tengan dos dígitos
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  // Muestra el tiempo restante en los elementos span correspondientes
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si el tiempo límite se ha alcanzado, muestra un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Oferta expirada";
  }
}, 1000);


