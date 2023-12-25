function findCommonElements(arr1, arr2) {
    const commonElements = [];

    // Loop through each element in the first array
    for (const elem1 of arr1) {
        // Check if the element is also present in the second array
        for (const elem2 of arr2) {
            if (elem1 === elem2) {
                // Add the common element to the result array
                commonElements.push(elem1);
                break;  // Break to avoid adding duplicates
            }
        }
    }

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);
console.log(result);
