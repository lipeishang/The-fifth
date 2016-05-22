function double_to_one(collection) {
  var oneDimensionalArr = transition(collection) ;
  return eliminateRepeat(oneDimensionalArr);
}

function transition(collection) {
  var oneDimensionalArr = [];

  collection.forEach(function (element) {
    for(var i = 0; i < element.length;i++){
      oneDimensionalArr.push(element[i]);
    }
  });

  return oneDimensionalArr;
}

function eliminateRepeat(oneDimensionalArr) {
  var noRepeatArr = [];
  var flag = 0;

  noRepeatArr.push(oneDimensionalArr[0]);
  for (var i = 1; i < oneDimensionalArr.length; i++) {
    for (var j = 0; j < noRepeatArr.length; j++) {
      if (oneDimensionalArr[i] === noRepeatArr[j]) {
        flag = 1;
      }
    }
    if (flag === 0) {
      noRepeatArr.push(oneDimensionalArr[i]);
    }
    flag = 0;
  }

  return noRepeatArr;
}


module.exports = double_to_one;
