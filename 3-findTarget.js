function findTarget(arr,target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1; // Mengembalikan -1 jika elemen target tidak ditemukan
}

console.log(findTarget([1,2,4], 4));

console.log(findTarget([-1,2,5,6,7], 6));

  