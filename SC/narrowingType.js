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
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(a) {
    var 클리닝완료 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료.push(parseFloat(b));
        }
        else {
            클리닝완료.push(b);
        }
    });
    return 클리닝완료;
}
console.log(클리닝함수([123, '3']));
