const array1 = ["Mangga", "Apel", "Melon", "Pisang", "Sirsak", "Tomat", "Nanas", "Nangka", "Timun", "Mangga"];
const array2 = ["Bayam", "Wortel", "Kangkung", "Mangga", "Tomat", "Kembang Kol", "Nangka", "Timun"];

function compareArrays(array1, array2) {
  const same = [];
  const different = [];
  
  for (let i = 0; i < array1.length; i++) { //memeriksa elemen array1 == array2?
    if (array2.includes(array1[i])) {
      same.push(array1[i]);
    } else {
      different.push(array1[i]);
    }
  }
  
  for (let i = 0; i < array2.length; i++) { //meriksa elemen arra2 tidak ada di array1
    if (!array1.includes(array2[i])) {
      different.push(array2[i]);
    }
  }
  
  return { same, different };
}
    
const result = compareArrays(array1, array2);
console.log('Same:', result.same);
console.log('Different:', result.different);
  