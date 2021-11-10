function swap(arr, i, j) {
    // change places of array elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
  
const unsortedNums = [1, 3, 2];
  
swap(unsortedNums, 1, 2);
  
console.log(unsortedNums);
  