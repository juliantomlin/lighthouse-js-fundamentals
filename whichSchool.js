function whichSchool(age){
  if (age > 18) {
    return "Lighthouse Labs"
  } else if (age >= 13) {
    return "Secondary School"
  } else {
    return "Elementary School"
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));