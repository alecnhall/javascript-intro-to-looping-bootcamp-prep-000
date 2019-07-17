/*

initialization - an expression (including assignment expressions)
or variable declaration. Typically used to initializea counter variable.
This epression may optionally declare new variables with the var keyword.

condition - an expression evaluated before each loop iteration. If the statement
evaluates to true the statement is executed.

iteration - a statement executed at the end of each iteration. Typically, this
will involve incrementing or decrementing a counter, bringing the loop every
closer to its end

loopBody - Code which runs on every iteration as long as the condition evaluates
to true

Use a for loop when you know how many times you want the loop to run (for example
when you have an array of known size)

for ([initialization];[condition];[iteration]){
  [loopBody];
}

*/

function forLoop(array){
  for(let i = 0; i < 25; i ++){
    if (i == 1){
      array.push('I am 1 strange loop.');
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}
function whileLoop(n){
  while (n > 0){
    console.log(--n);
  }
  return ('done');
}
function doWhileLoop(num){
  num = num + 1;
  return num;
}
do {
  console.log("I run once regardless");
} while (incrementVariable() < num);
