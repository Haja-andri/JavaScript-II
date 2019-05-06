// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// A runner want to keep track of total distance he ran over a year, each time he finihishes a run he log the distance and duration in hours

//function addNewRun(addedDistance) {
  const totalDistance = (addedDistance) =>{
    let cumulativeDist = 0;
    return (addedDistance) =>{
      return cumulativeDist += addedDistance;
    }      
  };
//}
let newDistance = totalDistance();
console.log(newDistance(10));
console.log(newDistance(30));
console.log(newDistance(17));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}