function minMaxArray(arr) {
  if (arr.length === 0) {
    return null; // Mengembalikan null jika array kosong
  }
  
  let min = arr[0]; 
  let max = arr[0]; 
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Memperbarui nilai minimum jika ada elemen yang lebih kecil
    }
  
    if (arr[i] > max) {
      max = arr[i]; // Memperbarui nilai maksimum jika ada elemen yang lebih besar
    }
  }
  
  return [min, max]; // Mengembalikan array yang berisi nilai minimum dan maksimum
}

const array = [2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
const result = minMaxArray(array);
console.log(result);
  