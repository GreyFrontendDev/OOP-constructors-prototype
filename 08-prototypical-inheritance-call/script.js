// Parent Constructor
function Shape(name) {
  this.name = name;
}

// Add method to Shape prototype
Shape.prototype.logName = function () {
  console.log('Shape Name:', this.name);
};

// Rectangle Constructor (Child)
function Rectangle(name, height, width) {
  Shape.call(this, name); // Call parent constructor
  this.height = height;
  this.width = width;
}

// Inherit Shape prototype methods
Rectangle.prototype = Object.create(Shape.prototype);

// Fix constructor reference
Rectangle.prototype.constructor = Rectangle;

// Circle Constructor (Child)
function Circle(name, radius) {
  Shape.call(this, name); // Call parent constructor
  this.radius = radius;
}

// Inherit Shape prototype methods
Circle.prototype = Object.create(Shape.prototype);

// Fix constructor reference
Circle.prototype.constructor = Circle;

// Create objects
const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 30);

console.log(rect, cir);

// Use inherited method
rect.logName();
cir.logName();

console.log(rect.constructor);
