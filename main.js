function restar(a, b) {
  return a - b;
}
function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre 0.";
  } else {
    return a / b;
  }
}

let opcion = prompt(`Elige una operación:
2. Restar
4. Dividir`);

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;

switch (opcion) {
  case "2":
    resultado = restar(num1, num2);
    alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
    break;
  case "4":
    resultado = dividir(num1, num2);
    alert(`Resultado: ${num1} ÷ ${num2} = ${resultado}`);
    break;
  default:
    alert("Opción no válida.");
}
