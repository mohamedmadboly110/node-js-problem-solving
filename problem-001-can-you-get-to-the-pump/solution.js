function canReachPump(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump;
}

console.log(canReachPump(50, 25, 2)); // true
