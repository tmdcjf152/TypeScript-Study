//함수에서만 사용하는 void 타입 - 텅 비었다. / return 하기 싫은 함수에 사용
//자바스크립트와 다른 점 : 타입지정된 파라미터는 필수임
//파라미터가 옵션일 경우엔 파라미터?:타입(x?:number) -> ?는 number|undefined 와 동일
function 함수1(x) {
    console.log();
}
함수1(2);
function 함수2(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
함수2("고운");
function 함수3(x) {
    return console.log(String(x).length);
}
함수3(123);
//type이 하나로 확정되지 않았을 경우 narrowing
//어떤 변수가 타입이 아직 불확실 하면 if문 등으로 네로잉 해줘야 조작 가능
function my(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
my(2);
//x를 number로 덮어쓰기 assertion 문법 (유니온 타입일때)
//네로잉 할때 사용 (하나의 타입으로 확정)
//무슨 타입이 들어올지 확실할때 사용
// 비상용으로 쓰자
function my2(x) {
    var array = [];
    array[0] = x;
}
var 동물 = "kim";
var 동물2 = { name: "kim", age: 12 };
var 여친 = {
    name: "앰버",
};
여친.name = "유라";
var position = { x: 10, y: 20 };
//같은 이름의 타입 변수 재정의 불가능
//1. x에 글자 들어갔을 때 숫자로 변환해주기 문제
function numberArray(x) {
    var cleaningArray = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            //문자열을 숫자로 변경해주는 메소드 parseFloat
            cleaningArray.push(parseFloat(y));
        }
        else {
            cleaningArray.push(y);
        }
    });
    return cleaningArray;
}
console.log(numberArray([123, "2"]));
//2. 배열일때 혹은 아닐때 마지막 값 가져오기
function lastSubject(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없음";
    }
}
console.log(lastSubject({ subject: "math" }));
function colorArray(x) { }
