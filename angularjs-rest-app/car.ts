class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Export the Car class so that it can be used in other files
export default Car;

