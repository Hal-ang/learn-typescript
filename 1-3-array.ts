{
  // Array
  const fruits: string[] = ['사과', '바나나'];
  const scores: Array<number> = [1, 3, 5];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // 서로 다른 타입의 배열을 담을 수가 있음
  // 권장하지 않음
  // 인덱스 접근은 가독성이 떨어짐
  //
  let student: [string, number];
  student = ['name', 1];
  student[0]; // name
  student[1]; // 1;

  const [name, age] = student; // 구조 분해 할당
  // 무작정 사용하는 것은 안됨
  // 동적으로 관련있는 다른 타입 데이터를 묶고, 이름을 정의해서 쓰는 경우엔 유용할 수 있음
}
