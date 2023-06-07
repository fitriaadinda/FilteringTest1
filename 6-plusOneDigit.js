function plusOneDigit(digits) {
    const number = parseInt(digits.join('')); // Mengubah array menjadi bilangan bulat
    const result = (number + 1).toString().split(''); // Menambahkan satu dan mengubah kembali menjadi array
  
    return result.map(Number); // Mengonversi setiap elemen array kembali ke tipe number
}

console.log(plusOneDigit([1, 2, 3])); 

console.log(plusOneDigit([4, 3, 2, 1])); 

console.log(plusOneDigit([9])); 