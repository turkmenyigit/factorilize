function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    console.log(product);
  }
  
  factorialize(5);