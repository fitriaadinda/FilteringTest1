function cariElementJumlah(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            return [arr[i], arr[j], arr[k]];
          }
        }
      }
    }
  
    return null;
}
  
const result = cariElementJumlah([-1, 0, 1, 2, -1, 4]);
console.log(`[${result.join(', ')}]`);

const result1 = cariElementJumlah([2, 3, 4, -1, -2]);
console.log(`[${result1.join(', ')}]`);
  