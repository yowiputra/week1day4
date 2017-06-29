function findWaldoRF(arr, found){
  arr.forEach(function(item, index){
    if (item === "Waldo"){
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index.toString() +"!");
}

findWaldoRF(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
