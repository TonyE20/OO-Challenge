//Part 1
class Vehicle{
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    honk(){
        return 'Beep';
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    };
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

//  Part 2

class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
        this.numWheels = 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

// Part 3
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }; 
};
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Part 4

class Garage{
    constructor(capacity){
        this.vehicles = [],
        this.capacity = capacity
    };
    add(arrVehicles){
        if (!(arrVehicles instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }
        else if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        
        }
        else {
            this.vehicles.push(arrVehicles)
            return "Vehicle added!"
        }
    }
}

let garage = new Garage(2);