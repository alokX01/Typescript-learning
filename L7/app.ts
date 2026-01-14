//TYPEOF TYPE GUARD

type Combinable = string | number;

function add(a: Combinable, b: Combinable): string | number {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add(20, 30));     // 50
console.log(add("30", 30));   // "3030"



   //IN OPERATOR TYPE GUARD


type Admin = {
    name: string;
    privilege: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type UnknownEmployee = Admin | Employee;

const emp1: Admin & Employee = {
    name: "Alok",
    privilege: ["create-server"],
    startDate: new Date(),
};

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log("Name:", emp.name);

    if ("privilege" in emp) {
        console.log("Privileges:", emp.privilege);
    }

    if ("startDate" in emp) {
        console.log("Start Date:", emp.startDate);
    }
}

printEmployeeInfo(emp1);



   //CLASS TYPE GUARD (INSTANCEOF)


class Car {
    drive() {
        console.log("Driving a car...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo:", amount);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

const car = new Car();
const truck = new Truck();

useVehicle(car);
useVehicle(truck);
