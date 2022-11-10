//함수에 타입 지정
function 타입함수(x: number): number {
  return x * 2;
}

//void
// 실수로 뭔가 return 하는걸 사전에 막아줌
function sdf(x): void {}
// 파라미터에 타입 지정하면 함수 선언할 때 파라미터 없으면 에러남 그냥 자바스크립트랑 다름
// 파라미터가 옵션일 경우 ?
//? 는 number | undiefined와 같음
function sadf(x?: number) {}

//narrowing
/*function fdasd(x: number | string) {
  if (x가 숫자면) {
    
    return(x+3)
  }
}*/

function my함수(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
  //array[0] = x as number => assertion
}
//Narrowing 판정 문법들 typeof, in, instance
/* assertion 문법 = 타입 덮어 쓰기 
용도 narrowing 할때 그냥 타입 변경은 안됨
무슨 타입이 들어올지 100% 확신할 때 
되도록 if문 쓰는게 좋음 버그 못 잡아줘서 */
