console.log("Ejercicios tematicos de Netflix")



  //1. Saludo de Bienvenida
  function BienvenidaNetflix() {
    alert('¡Bienvenido a Netflix!')
    
  }

//2. Recomendación de Serie
function RecomendarSerie() {
  alert("Stranger Things");
}
function RecomendarSerie2(serie) {
   alert("The Witcher");
}

//3- Zona de Funciones 
function MostrarPerfil(nombre,email){
  alert(`Perfil de Usuario: ${nombre} ${email}`);
}

//4. Activar Modo Oscuro (Netflix Night Mode)
function NetflixNightMode(valor1, valor2){ 
  document.body.style.backgroundColor = valor1;
  document.body.style.color =valor2;
}

//5. Activar Modo Claro (Netflix Day Mode)
function NetflixDayMode  (valor1, valor2){ 
  document.body.style.backgroundColor = valor1;
  document.body.style.color = valor2;
}

//6. Calcular Tiempo de Maratón
function CalcularMaraton  (episodio,duracion) {
  let tiempoTotal = episodio * duracion;
  alert(`Tiempo total: ${tiempoTotal} minutos.`);
}
//7. Dividir Episodios en Días
function DividirEpisodios(episodios, dias) {
  let episodiosPorDia = episodios / dias; // Calcula los episodios por día
  alert(`Episodios por día: ${episodiosPorDia}`);
}

//8. Crear Perfil de Usuario
function CrearPerfil() {
  console.log("Ejercicios tematicos de Netflix")
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  let emailUsuario = document.getElementById("emailUsuario").value;
  let edadUsuario = document.getElementById("edadUsuario").value;

  console.log(nombreUsuario)
  console.log(emailUsuario)
  console.log(edadUsuario)
  }