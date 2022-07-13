function modulo(x, y) {
  // x = 4; I runed the code in the console and it work correctly for all the number in the test;
  // y = 4;
  const z = x % y;
  if (x > y) {
    console.log(`The number ${x} is bigger than ${y}`);
  } else if (x === y) {
    console.log(`The number ${x} is equal to ${y}`);
  } else if (x < y) {
    console.log(`The number ${x} is less than ${y}`); 
  } else if (x > y && z != 0) {
    console.log(`The modulo of ${x} % ${y} is ${z}`);
  } 
}

// Do not remove or change this line, or the tests won't work
export { modulo };
