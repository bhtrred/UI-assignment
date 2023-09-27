"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
// Export the Car class so that it can be used in other files
exports.default = Car;
