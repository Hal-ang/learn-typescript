/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

// function calculate(command: string, num1: number, num2: number): number {
//   let result: number = 0;

//   if (command === 'add') {
//     result = num1 + num2;
//   } else if (command === 'subtract') {
//     result = num1 - num2;
//   } else if (command === 'multiply') {
//     result = num1 * num2;
//   } else if (command === 'divide') {
//     result = num1 / num2;
//   } else {
//     result = num1 % num2;
//   }

//   return result;
// }

type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, num1: number, num2: number): number {
  switch (command) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'divide':
      return num1 / num2;
    case 'multiply':
      return num1 * num2;
    case 'remainder':
      return num1 % num2;
    default:
      throw new Error('unknown command');
  }
}
