/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding is also known is global binding. 'this' refers to the global (aka window) object
 * 2. Implicit Binding points to the object on which the function is called. In other words, it points to what's to the left of the period when the function is called
 * 3. New Binding uses the 'new' keyword and constructs a new object. 'this' points to what is being constructed
 * 4. With Explicit Binding, we can tell the Javascript engine to make 'this' point to a certain value using call(), apply(), or bind()
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function globalBinding() {
    console.log(this); //points to the window object
}
// globalBinding();

// Principle 2
// code example for Implicit Binding
function logDrake() {
    console.log(this.yuh);
}

let drake = {
    name: 'Drake',
    yuh: 'yuh',
    logDrake: logDrake
}

drake.logDrake();

// Principle 3
// code example for New Binding
function Skateboard(brand) {
    this.brand = brand;
}

let mySkateboard = new Skateboard("Krooked");

console.log(mySkateboard.brand);

// Principle 4
// code example for Explicit Binding
function camera() {
    console.log(this.cameraBrand);
}
function anotherCamera() {
    console.log(this.anotherCameraBrand);
}

let myCamera = {
    cameraBrand: "Sony",
    anotherCameraBrand: "Panasonic"
}

camera.call(myCamera);
anotherCamera.call(myCamera);