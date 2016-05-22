function double_to_one(collection) {
  var result = [];

  result.push(collection[0]);
  collection.forEach(function (element) {
    for(var i = 0; i < element.length; i++){
      result.push(element[i]);
    }
  });

  return result;
}

module.exports = double_to_one;
