function binarySearch(arr, l, r, x) {
  if (l > r) return -1;

  const m = Math.floor((l + r) / 2);

  if (arr[m] === x) return m;

  if (arr[m] < x) {
    return binarySearch(arr, m + 1, r, x)
  } else {
    return binarySearch(arr, l, m - 1, x)
  }
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

console.log(binarySearch(arr, 0, arr.length - 1, 100))