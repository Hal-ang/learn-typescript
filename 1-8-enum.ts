{
  //Enum / 관련된 여러가지 상수들을 한 곳에 모아 정의하는 것

  //JavaScript 제공 x, 타입스크립트에서 제공o
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  enum Days {
    Monday = 5, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, //
    Satarday,
    Sunday,
  }
  // enum Days {
  //   Monday = 'h',
  //   Tuesday = 'a',
  //   Wednesday = 'b',
  //   Thursday = 'c',
  //   Friday = 'd',
  //   Satarday = 'e',
  //   Sunday = 'f',
  // }
  // 문자열은 수동 할당 필요

  // 타입 스크립트에서 사용을 추천하지 않음
  console.log(Days.Thursday);

  let day: Days = Days.Satarday;
  day = Days.Thursday;

  // enum을 쓰면 정확한 타입을 지정할 수 없음
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday'; // enum은 유니언 스프링 리터럴로 대체하여 사용 가능

  // enum을 쓸 수 밖에 없는 경우, 안드로이드 등은 사용자 데이터를 제이슨으로 묶어 다시 다른 클라이언트로 보내야 할 때 모바일 클라이언트를 사용하는 네이티브에선 유니언 타입을 이해할 수 없음
  // 다른 클라이언트와 소통할 필요가 없다면 유니언 타입 사용이 안전함
}
