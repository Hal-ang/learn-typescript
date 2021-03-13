{
  // Type Inference
  // 선언과 동시에 자동으로 타입유추
  let text: string = 'hello';

  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number): number {
    return x + y;
  }

  const result: number = add(1, 2);
}
