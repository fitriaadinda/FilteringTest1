function addSum(arr, target) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          result.push([i, j]);
        }
      }
    }
  
    return result;
  }
  
const result1 = addSum([3, 2, 3], 6);
console.log(`[${result1.join()}]`);

const result2 = addSum([3, 2, 4], 6);
console.log(`[${result2.join()}]`);

const result3 = addSum([3, 3], 6);
console.log(`[${result3.join()}]`);
  