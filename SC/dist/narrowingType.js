/**
 * Type Narrowing
 * if문 등으로 타입을 하나로 정해주는 것을 뜻한다.

  function 내함수(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  }
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}
* >✨ 이때 else{}가 없으면 에러가 난다.

 * Type Assertion
이 변수의 타입을 number로 생각해주세요 라는 의미이다.

function 내함수(x :number | string){
    return (x as number) + 1
}
console.log( 내함수(123) )
 */ 
