var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function sortOnParameter(array, parameter){
  switch(parameter){
    case "id":
      array.sort(function(a, b){
        return a[parameter] - b[parameter];
      });
      break;

    case "name":
      array.sort(function(a, b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if(nameA < nameB){
          return -1;
        }
        if(nameA > nameB){
          return 1;
        }
        return 0;
      });
      break;

    case "age":
      array.sort(function(a, b){
        return a[parameter] - b[parameter];
      });
      break;
  }
  return array;
}

//use "id", "name", or "age" as the parameter input
console.log(sortOnParameter(students, "name"));