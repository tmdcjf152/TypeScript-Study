//literal type
var 숫자;
숫자 = 123;
// 숫자=456 에러 123만 할당 가능
var 접니다;
접니다 = "대머리";
접니다 = "솔로";
// 엄격하게 관리해서 버그 방지
// 자동 완성 해줘서 편리
//함수에 literal type 적용
function 함수(a) {
    return 1;
}
// 파라미터에는 "hello"만 할당 가능 => 함수("hello")
// return 값은 1이나 0만 가능
function 가위바위보(x) {
    return ["가위"];
}
//파라미터에 "가위","바위","보" 가능
//리턴 값 "가위","바위","보" 들어간 array
var 자료 = {
    name: "kim"
};
//효과 1. 리터럴 타입처럼 타입을 지정해줌
//효과 2. read-only 적용 => 변경 불가
function 내함수(a) { }
내함수(자료.name); //리터럴 타입으로 지정안한 상태면 오류
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
var Hero = /** @class */ (function () {
    function Hero(구멍, 구멍2) {
        this.q = 구멍;
        this.w = 구멍2;
    }
    return Hero;
}());
//prototype
//기계의 유전자
기계.prototype.name = "kim";
//nunu.name = 'kim'
//nunu자체에는 없지만 부모에게 있는 유전자 를 끌어다 쓸 수 있음
//prototype chain
var 어레이 = [4, 2, 1];
어레이.sort();
