function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

console.log(calcularIMC(100, 1.86));
