function makeIdGenerator() {
  var id = 0;
  console.log("initial start of makeIdGenerator function");
  console.log(id);

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    console.log("inner function execute");
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2