var john = { name: "kim" };
//part03
var 이름 = "kim"; //string만 가능 넘버나 불리언 배열 객체등 다른 타입이 들어오면 에러가 남.
var 나이 = 36;
var 결혼여부 = true;
var 회원들 = ["kim", "park"]; //문자로 담긴 array만 담을수 있음. 자료형으로 여러개 담을때 array안에 들어갈 타입까지 지정해줘야함
var 오브젝트 = { member: "kim", age: 30 };
// 타입지정을 전부 지정해주지 않아도 변수위에 마우스를 올리면 타입이 지정됨
//문제풀이
// 오브젝트안엔 노래제목과 가수이름이 들어간다. 문자만 가능하게 타입지정
var object = {
    title: "노래제목",
    name: "yang",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// part04
//유니온타입: 타입 두개를 합침 | (or)
var 회원 = "kim";
회원; //마우스 올리면 타입이 문자형
var array = [1, "2", 3];
var 유니온오브젝트 = { a: 123 };
var unknownType; //모든 타입지정
unknownType = 123;
unknownType = "string"; // 지정한 타입외에는 에러
// unknownType + 1 //error
// Narrowing 알아보기
//or연산자를 이용하여 union type으로 바꾸기
//var 어레이: number[] =[1,'2',3];
//var 오브젝트 : {data:number} = {data :'123'}
var 어레이 = [1, "2", 3];
var data = { data: "123" };
