//literal types: 아래와 같이 하면 person 했을 때 kim 만 들어올 수 있음.
var person;
//아래와 같이 제한 가능
function 함수(a) {
    return 2;
}
//가위바위보중 1개 입력 가능
// 가위나 보나 바위 만 들어올 수 있는 어레이만 리턴
function quiz(a) {
    return ["가위"];
}
//kim 이라는 타입만 들어올 수 있다는 뜻이기 때문에 아래에 자료.name이 못들어감.
//해결방법 as const
//value값 그대로 타입 지정해줌
//readonly 붙여줌
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수("자료.name");
var example = function () {
    return 10;
};
//오브젝트 안에 함수 저장하는 법 (문제)
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne();
//typescript로 HTML 조작 가능 ->narrowing
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
var 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
    제목2.innerHTML = "반가워요";
}
//거의 사용하면 안됨
var 제목3 = document.querySelector("#title");
제목3.innerHTML = "반가워요";
//innerHtML 이 있으면 출력해주고 없으면 언디파인드 뱉어라
var 제목4 = document.querySelector("#title");
if ((제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) != undefined) {
    제목4.innerHTML = "반가워요";
}
//HTMLAnchorElement -> 태그마다 Element 정해져 있음.
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
//this는 기계로 부터 생성되는 object들
function 기계(구멍1, 구멍2) {
    this.q = 구멍1;
    this.w = 구멍2;
}
var nunu = new 기계("consume", "nana");
var garen = new 기계("strike", "mimi");
var Hero = /** @class */ (function () {
    function Hero(구멍) {
        this.q = 구멍;
        this.w = "snowball";
    }
    return Hero;
}());
