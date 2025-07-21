function main() {
  alert('¡Bienvenido usuario! Esta es nuestra calculadora.');

  let opcion = prompt(`¿Qué opción desea elegir?
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividir
    0. Salir`);

  // Convertimos la opción a número para usar en el switch
  opcion = Number(opcion);

  // Si elige salir
  if (opcion === 0) {
    alert('¡Gracias por usar la calculadora!');
    return;
  }

  // Pedimos los números solo si no eligió salir
  const a = Number(prompt('Ingrese el primer número:'));
  const b = Number(prompt('Ingrese el segundo número:'));

  let resultado;

  switch (opcion) {
    case 1:
      resultado = sumar(a, b);
      break;
    case 2:
      resultado = restar(a, b);
      break;
    case 3:
      resultado = multiplicar(a, b);
      break;
    case 4:
      resultado = dividir(a, b);
      break;
    default:
      alert('Opción no válida.');
      return;
  }

  alert(`El resultado es: ${resultado}`);
}
