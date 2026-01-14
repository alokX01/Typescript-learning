//TYPEOF TYPE GUARD
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(20, 30)); // 50
console.log(add("30", 30)); // "3030"
var emp1 = {
    name: "Alok",
    privilege: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInfo(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo:", amount);
    };
    return Truck;
}());
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
var car = new Car();
var truck = new Truck();
useVehicle(car);
useVehicle(truck);
