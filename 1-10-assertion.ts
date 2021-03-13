{
  //Type Assertions 똥 / 그리 좋은 건 아님, 많이 쓰고 있으면 피할 수 있는 방법을 고민해보기

  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();
  result.length; // 문자열 지정이 안되어있으면 문자열 메소드 사용 불가
  console.log((result as string).length); // 캐스팅
  console.log((<string>result).length); // 위와 동일

  // type assertion은 정말 정말 장담할때만 사용해야 함
  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(3)); // 어플리케이션이 죽는 경우 (경고);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // const numbers = findNumbers();
  // numbers!.push(2); // < 진짜진짜 믿어라

  const button = document.querySelector('class');
  if (button) {
    button.nodeValue;
  }
}
