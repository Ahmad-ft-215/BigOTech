class Vehicle {

    constructor(owner, vehicleName, maker, fuel, type) {

        this.owner = owner;

        this.vehicleName = vehicleName;

        this.maker = maker;

        this.fuel = fuel;

        this.type = type;

    }

    getDetails() {

        return (`${this.vehicleName} runs on fuel called ${this.fuel}`)

    }

    getTypes() {

        return (`${this.vehicleName} is ${this.type} and ${this.maker}`)

    }


}

let veh1 = new Vehicle('Sourabh', 'Honda accord', 'made in India', 'diesel', 'new');

let veh2 = new Vehicle('Sourabh', 'Ducati', 'imported vehicle', 'petrol', 'used');

console.log(veh1.owner+" has two vehicle, one is "+veh1.vehicleName+" car and another is "+veh2.vehicleName+" bike");

console.log(veh1.getDetails());

console.log(veh2.getDetails()); 

console.log(veh1.getTypes());

console.log(veh2.getTypes());
