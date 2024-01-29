var num = prompt("Enter a number:");

num = Number(num);

for (var i = 1; i <= 10; i++) {
  var product = num * i;
  console.log(num + " x " + i + " = " + product);
}





// factorial
let numb = 5;
let factorial = 1;

while (numb > 1) {
  factorial *= numb;
  numb--;
}
console.log("Factorial of 5 is ");
console.log(factorial);