function moduloEx5(x, y) {
  let operator = "";
  let modulo = "";
  const z = x % y;
  if (x > y) {
    operator = " bigger than ";
  } else if (x === y) {
    operator = " equal to ";
  } else if (x < y) {
    operator = " less than ";
  } else if (x > y && z != 0) {
    modulo = ` But the modulo of ${x} % ${y} is ${z}.`;  
  } 
  
  console.log(`The number ${x} is${operator}${y}. ${modulo}`);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
