function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rigthArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rigthArr));

}

function merge(leftArr, rigthArr) {
  const sortedArr = [];

  while (leftArr.length && rigthArr.length) {
    if (leftArr[0] <= rigthArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rigthArr.shift())
    }
  }

  return [...sortedArr, ...leftArr, ...rigthArr]
}



const arr = [10, -11, 6, 5, 3, -7, 4, 8]

const arraySorted = mergeSort(arr);
console.log(arraySorted) //[-11, -7, 3, 4, 5, 6, 8, 10]
