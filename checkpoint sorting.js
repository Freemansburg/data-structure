function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let j = i;
  
      while (j > 0 && arr[j] < arr[j - 1]) {
        // Swap arr[j] and arr[j-1]
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
  
        j--;
      }
    }
  
    return arr;
  }
  
  const outcomes = [1.17, 2.39, 2.24, 1.00, 2.95, 1.69, 1.23];
  const sortedOutcomes = insertionSort(outcomes);
  console.log(sortedOutcomes);
  