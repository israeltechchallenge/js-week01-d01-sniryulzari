function moduloEx6(x, y, operator) {
  x = 4;
  y = 4;
  operator = "";
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
 
  let result = `The number ${x} is${operator}${y}. ${modulo}`;
  document.getElementById("output").innerHTML = result;
}
moduloEx6();
