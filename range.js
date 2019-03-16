function range(start, end, step) {
  var some_array = [];
  if ((!start && !end && !step) || (start > end) || (step < 0)){
    return some_array
  } else {
    for (var number = start; number <= end; number = number + step) {
      some_array.push(number);
    }
  }
  return some_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));