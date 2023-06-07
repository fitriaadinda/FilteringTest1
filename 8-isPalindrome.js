function isPalindrome(arr) {
    const n = arr.length;
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
      const left = arr[i].toLowerCase();
      const right = arr[n - 1 - i].toLowerCase();
      
      if (left !== right) {
        return false; 
      }
    }
  
    return true;
}
  
console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"])); 

console.log(isPalindrome(["Tom", "Tim", "tim", "tom"])); 
  
console.log(isPalindrome(["tik", "tok", "toko", "tik"])); 
  