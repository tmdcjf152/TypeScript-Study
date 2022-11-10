//class 필드값 class 안에 변수
class 사람 {
  data = 0;
  name: string; //
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("hello" + a);
  } //class 내에 prototype 넣는 방식
}
//사람.prototype.함수() 와 같음

let 사람1 = new 사람("kim");
let 사람2 = new 사람("박");
사람1.함수("안녕");

//&& 연산자로 null undefined 체크
function 함수(a: string | undefined) {
  if (a && typeof a == "string") {
    // a가 undefined 면 if 문 실행 안됨
  }
}

//in 키워드로 object narrowing
type Fish = { swim: string };
type Bird = { fly: string };

function 함수7(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}
