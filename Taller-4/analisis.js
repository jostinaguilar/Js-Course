//helpers
function esPar(n) {
  return n % 2 === 0;
}

function calcularMediAritmetica(list) {
  const sumaList = list.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaList / list.length;

  return promedioList;
}

const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salarios = salariosCol.sort(function (salarioA, salarioB) {
  return salarioA - salarioB;
});

//mediana General
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneral = medianaSalarios(salarios);

//mediana Top10
const spliceStart = (salarios.length * 90) / 100;
const spliceCount = salarios.length - spliceStart;

const salariosTop10 = salarios.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({ medianaGeneral, medianaTop10 });
