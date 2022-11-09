//literal type
let 숫자: 123;
숫자 = 123;
// 숫자=456 에러 123만 할당 가능

let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";
// 엄격하게 관리해서 버그 방지
// 자동 완성 해줘서 편리

//
function 함수(a: "hello"): 1 | 0 {
  return 1;
}

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

var 자료 = {
  name: "kim",
} as const;
//효과 1. 리터럴 타입처럼 타입을 지정해줌
//효과 2. read-only 적용 => 변경 불가

function 내함수(a: "kim") {}
내함수(자료.name);

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
회원정보.plusOne(); //함수 실행

//콜백함수
function 함수1(a) {
  a();
}

function 함수2() {}

함수1(함수2); //함수2가 콜백함수
//함수1에 함수2를 실행

//
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

//narrowing 다른 방법
//if(제목 instanceof Element)
//let 제목 = document.querySelector('#title') as Element
//if(제목?.innerHTML != undefined)  옵셔널 체이닝

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
// 버튼?.addEventListener('click', function)

//class 키워드 이해하기
//옛날 문법
function 기계(구멍, 구멍2) {
  this.q = 구멍;
  this.w = 구멍2;
}
//this => 기계로부터 생성되는 object = instance
//기계 => 부모 , nunu garen => 자식

var nunu = new 기계("consume", "snowball");
var garen = new 기계("strike", "consume");

class Hero {
  constructor(구멍, 구멍2) {
    this.q = 구멍;
    this.w = 구멍2;
  }
}

//prototype
//기계의 유전자
기계.prototype.name = "kim";
//nunu.name = 'kim'
//nunu자체에는 없지만 부모에게 있는 유전자 를 끌어다 쓸 수 있음
//prototype chain
var 어레이 = [4, 2, 1];
어레이.sort();
