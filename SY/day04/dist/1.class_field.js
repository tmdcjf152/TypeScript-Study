//class 필드값 class 안에 변수
var 사람 = /** @class */ (function () {
    function 사람(a) {
        this.data = 0;
        this.name = a;
    }
    사람.prototype.함수 = function (a) {
        console.log("hello" + a);
    }; //class 내에 prototype 넣는 방식
    return 사람;
}());
//사람.prototype.함수() 와 같음
var 사람1 = new 사람("kim");
var 사람2 = new 사람("박");
사람1.함수("안녕");
//&& 연산자로 null undefined 체크
function 함수(a) {
    if (a && typeof a == "string") {
        // a가 undefined 면 if 문 실행 안됨
    }
}
function 함수7(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}