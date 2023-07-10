function bubbleSort(arr) {

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }

    }
  } while (swapped)

  return arr

}

const arr = [10, -11, 6, 5, 3, -7, 4, 8];

console.log(bubbleSort(arr))
