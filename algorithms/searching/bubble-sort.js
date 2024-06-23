function bubbleSort(arr) {
    let n = arr.length;
  
    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
      // Inner loop for each comparison
      //The inner loop runs through the array up to n-1-i elements (for (let j = 0; j < n - 1 - i; j++)), where i is the current pass number. 
      // This ensures that we don't compare already sorted elements at the end of the array.
      for (let j = 0; j < n - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {
          // Swap if elements are in the wrong order
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage:
  let array = [5, 2, 4, 6, 1, 3];
  console.log("Unsorted array:", array);
  let sortedArray = bubbleSort(array);
  console.log("Sorted array in ascending order:", sortedArray);
  