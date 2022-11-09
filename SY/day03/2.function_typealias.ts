//함수와 메서드 type alias
type 함수타입 = (a: string) => number;

//함수 type alias 적용하려면 함수 표현식
let 이함수: 함수타입 = function () {
  return 10;
};

//object 안에 함수 만들 수 있음
let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
};
회원정보.plusOne(1); //함수 실행

//콜백함수
function 함수1(a) {
  a();
}

function 함수2() {}

함수1(함수2); //함수2가 콜백함수
//함수1에 함수2를 실행
