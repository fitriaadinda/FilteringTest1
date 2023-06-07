function addAndSort(arr, elemen) {
    arr.push(elemen); // Menyisipkan elemen ke dalam array
  
    // Mengurutkan array menggunakan perulangan
    for (let i = 1; i < arr.length; i++) {
      const nilai = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > nilai) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = nilai;
    }
  
    return arr;
}

console.log(addAndSort([4, 7, 1, 20], 9));

console.log(addAndSort([3, 5, 2], 7));

console.log(addAndSort([2, 14, 10, 1, 11, 12, 3, 4], 7));
