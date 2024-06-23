function selectionSort(arr) {
    // Iterate over the entire array
    for (let i = 0; i < arr.length - 1; i++) {
      // Assume the minimum is the first element of the unsorted part
      let minIndex = i;
      
      // Find the minimum element in the remaining unsorted part
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // Update minIndex if a smaller element is found
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage:
  let array = [64, 25, 12, 22, 11];
  console.log("Unsorted array:", array);
  let sortedArray = selectionSort(array);
  console.log("Sorted array:", sortedArray);
  