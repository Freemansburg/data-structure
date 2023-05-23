// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
//Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
//Output: 13 (distinct elements 4, 7, 2 )
//Give a solutions to this problem, using arrays
function sumOfDistinctElements(set1, set2) {
    // Combine the two sets into a single array
    const combinedSet = [...set1, ...set2];
    
    // Create a Set to store distinct elements
    const distinctElements = new Set(combinedSet);
    
    // Calculate the sum of distinct elements
    let sum = 0;
    for (let element of distinctElements) {
      sum += element;
    }
    
    return sum;
  }
  
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  
  console.log("Sum of distinct elements:", result);
  