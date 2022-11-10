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
회원정보.plusOne(1); //함수 실행
//콜백함수
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2); //함수2가 콜백함수
//함수1에 함수2를 실행
