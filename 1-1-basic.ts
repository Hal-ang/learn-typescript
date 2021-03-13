{
  // JavaScript
  // Primitive: number, string, boolean, bigint, symbol, null, undefind
  // Object: function, array.....

  //TypeScript
  //number
  const num: number = 1;
  
  //stirng
  const str: string = 'hello';

  //boolean
  const boal: boolean = true;
  
  // undefind
  let name: undefined; // 똥
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null // 의미상으로 다름 // 똥
  let person: null;
  let person2: string | null;

  // unknown, 똥, 알 수 없음 어떤 거라도 다 들어감 // 뭐가 올 지 잘 모르겠어
  // 타입이 없는 자바스크립트에서도 사용하기 위해 언노운이 있는 것 쓰지 말 것
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any // 이것도 똥 // 뭐가 오든 난 다 가능해!
  let anything: any = 0;
  anything = 'hello';

  //void
  function print(): void {
    console.log('hello');
    return;
  }

  let unsable: void = undefined; // 똥 언디파인드만 됨

  // never // 이 함수를 호출하면 나는 리턴할 생각이 전혀 없다
  // 절대절대 리턴할 수 없다. 언디파인드도 안됨
  // 에러를 던지던가 무한 반복문
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }
  let neverEnding: never; // 똥 
  
  // object // 똥, 구체적인 타입을 명시적으로 작성하기
  let obj: object; // 원시타입을 제외한 어떤 것이든 다 담을 수 있음
  function acceptSomeObject(obj: object) {
    
  }
  acceptSomeObject({name: 'ellie'});
  acceptSomeObject({animal: 'dog'});
  
}