const list = [100, 200, 500, 400000];

const mitadList = parseInt(list.length / 2);

function esPar(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediAritmetica(list) {
  const sumaList = list.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaList / list.length;

  return promedioList;
}

let mediana;

if (esPar(list.length)) {
  const element1 = list[mitadList - 1];
  const element2 = list[mitadList];
  const promedio = calcularMediAritmetica([element1, element2]);
  mediana = promedio;
} else {
  mediana = list[mitadList];
}
//crear una function
