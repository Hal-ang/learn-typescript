/**
 * Let's make a game 🕹
 */
type Position = {
  x: number;
  y: number;
};

let position: Position = { x: 0, y: 0 };

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type Command2 = 'up' | 'down' | 'left' | 'right';

function move(command: Command2): void {
  switch (command) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
  }
}
