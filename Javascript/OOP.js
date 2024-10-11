class Shape {
    // Constructor to initialize the properties
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    // Method to calculate the perimeter
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`The perimeter of the ${this.name} is ${perimeter}.`);
    }
  }
  
  class Square extends Shape{
      calcArea(){
          const area = this.sideLength ** 2;
          console.log(`Area of square is ${area}`)
      }
  }
  
  // Create a new instance of Shape called square
  const rectangle = new Shape('rectangle', 4, 5);
  rectangle.calcPerimeter(); // Logs: "The perimeter of the square is 20."
  
  // Create a new instance of Shape called triangle
  const triangle = new Shape('triangle', 3, 3);
  triangle.calcPerimeter(); // Logs: "The perimeter of the triangle is 9."
  
  const square = new Square('swuare', 4, 4);
  square.calcPerimeter();
  square.calcArea();