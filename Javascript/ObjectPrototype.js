function cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  
  cat.prototype.greeting = function(){
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
  
  const cat1 = new cat('Bertie', 'Cymric', 'white');
  const cat2 = new cat('Milo', 'Siamese', 'black');
  
  cat1.greeting();
  cat2.greeting();
      