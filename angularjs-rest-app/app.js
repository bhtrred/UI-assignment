"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
// Create an instance of the Car class
var myCar = new car_1.default('Toyota', 'Camry', 2023);
// Test the getCarInfo method
var carInfo = myCar.getCarInfo();
console.log(carInfo); // Output: "2023 Toyota Camry"
