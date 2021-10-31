const list = [2, 3, 4, 5, 3, 1, 4, 2, 5, 7, 3, 5, 7, 3, 2, 6];

const listCount = {};

list.map(function (element) {
  if (listCount[element]) {
    listCount[element] += 1;
  } else {
    listCount[element] = 1;
  }
});

const listArray = Object.entries(listCount).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = listArray[listArray.length - 1];
