function stairPattern(a, n) {
    let output = '';
  
    for (let i = a; i <= n; i++) {
      let row = '';
      let startValue = i;
      for (let j = a; j <= i; j++) {
        row += startValue + ' ';
        startValue++;
      }
      output += row.trimEnd() + '\n';
    }
  
    return output;
  }
  
  console.log(stairPattern(1 , 7));
  console.log(stairPattern(5, 11));
  