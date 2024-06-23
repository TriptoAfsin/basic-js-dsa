function insertionSort(arr) {
    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // The element to be inserted
      let j = i - 1; //pev element
  
      // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; // Shift element to the right
        j = j - 1;
      }
  
      // Insert the current element into its correct position
      arr[j + 1] = current;
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage:
  let array = [64, 25, 12, 22, 11];
  console.log("Unsorted array:", array);
  let sortedArray = insertionSort(array);
  console.log("Sorted array:", sortedArray);
  