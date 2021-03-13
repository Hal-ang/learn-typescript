{
  // Type Aliases
  type Text = string;
  const name: Text = 'Harang';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'Harang',
    age: 12,
  };

  // String Literal Types
  type Name = 'name';
  let HarangName: Name;
  HarangName = 'name'; // 다른 거 할당 안됨

  type Boal = true;
  let temp: Boal = true; // false면 에러
}
