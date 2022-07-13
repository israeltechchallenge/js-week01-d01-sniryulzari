function getRandomInt(x, y) {
  x = Math.floor(Math.random() * 101);
  y = Math.floor(Math.random() * 101);
  
  moduloEx7(x, y);

function moduloEx7(x, y) {
    // console.log(x, y);
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
   console.log(x, y, z, operator, modulo);
    let result = `The number ${x} is${operator}${y}. ${modulo}`;
    document.getElementById("output").innerHTML = result;
}
}
getRandomInt();