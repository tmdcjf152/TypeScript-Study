var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//rest parameter 타입지정
//rest parameter ...a 파라미터가 무한히 들어올 수 있다
function 함수4() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a); //[1,2,3,4,5] 이렇게 어레이에 담겨서
}
함수4(1, 2, 3, 4, 5);
//... 문법
//용도1. 함수 안에 쓸경우 rest parameter
//용도2. 괄호 벗겨주세요
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArrays(arr, arr2);
//destructing
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1); // '안녕'
var _b = { student: true, age2: 20 }, student = _b.student, age2 = _b.age2;
console.log(student); //true
var 오브젝트2 = { student: true, age2: 20 };
function 함수6(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
