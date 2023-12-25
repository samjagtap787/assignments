function getUniqueElements(inputArray) {
    var uniqueArray = [];
  
    for (var i = 0; i < inputArray.length; i++) {
      var currentElement = inputArray[i];
  
      // Check if the current element is not already in the uniqueArray
      if (uniqueArray.indexOf(currentElement) === -1) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  var inputArray = [1, 2, 3, 4, 2, 3, 5];
  var resultArray = getUniqueElements(inputArray);
  console.log(resultArray); // Output: [1, 2, 3, 4, 5]
  