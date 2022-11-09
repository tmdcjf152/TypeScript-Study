//literal type
var 숫자;
숫자 = 123;
// 숫자=456 에러 123만 할당 가능
var 접니다;
접니다 = "대머리";
접니다 = "솔로";
// 엄격하게 관리해서 버그 방지
// 자동 완성 해줘서 편리
//
function 함수(a) {
    return 1;
}
function 가위바위보(x) {
    return ["가위"];
}
var 자료 = {
    name: "kim"
};
//효과 1. 리터럴 타입처럼 타입을 지정해줌
//효과 2. read-only 적용 => 변경 불가
function 내함수(a) { }
내함수(자료.name);
//함수 type alias 적용하려면 함수 표현식
var 이함수 = function () {
    return 10;
};
//object 안에 함수 만들 수 있음
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    }
};
회원정보.plusOne(); //함수 실행
//콜백함수
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2); //함수2가 콜백함수
//함수1에 함수2를 실행
//
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
//narrowing 다른 방법
//if(제목 instanceof Element)
//let 제목 = document.querySelector('#title') as Element
//if(제목?.innerHTML != undefined)  옵셔널 체이닝
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
// 버튼?.addEventListener('click', function)
//class 키워드 이해하기
function 기계(구멍, 구멍2) {
    this.q = 구멍;
    this.w = 구멍2;
}
//this => 기계로부터 생성되는 object = instance
var nunu = new 기계("consume", "snowball");
var garen = new 기계("strike", "consume");
