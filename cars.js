// Car object
var car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Another car object
var car2 = {
  brand: "honda",
  model: "city",
  color: "Blue",
  fuelType: "Gasoline"
};

// Function to merge two car objects
function mergeCars(car1, car2) {
  // Create a new object to store the merged properties
  var mergedCar = {};

  // Copy properties from car1
  for (var prop in car1) {
    if (car1.hasOwnProperty(prop)) {
      mergedCar[prop] = car1[prop];
    }
  }

  // Copy properties from car2
  for (var prop in car2) {
    if (car2.hasOwnProperty(prop)) {
      mergedCar[prop] = car2[prop];
    }
  }

  return mergedCar;
}

// Merge car1 and car2
var mergedCar = mergeCars(car1, car2);

// Display the merged car object
console.log(mergedCar);
