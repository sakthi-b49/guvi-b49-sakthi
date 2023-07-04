class uberPriceCalculator{
 constructor(baseCost, costPerKilometer, costPerMinute){
    this.baseCost = baseCost;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
 }
 calculatePrice(distanceInKm, durationInMinutes){
    let distanceCost = distanceInKm * this.costPerKilometer;
    let durationCost = durationInMinutes * this.costPerMinute;
    let totalCost = this.baseCost + distanceCost + durationCost;
    return totalCost;
 }
}

let calculator = new uberPriceCalculator(10, 5, 1);
let distance = 20;
let duration = 30;
let price = calculator.calculatePrice(distance, duration);
console.log(`Total Amount is $${price}`);