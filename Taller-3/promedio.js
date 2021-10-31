function calcularMediAritmetica(list) {
  //   for (let i = 0; i < list.length; i++) {
  //     sumaList = sumaList + list[i];
  //   }

  const sumaList = list.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaList / list.length;

  return promedioList;
}
