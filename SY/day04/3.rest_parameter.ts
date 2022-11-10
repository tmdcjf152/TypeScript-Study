//rest parameter 타입지정
//rest parameter ...a 파라미터가 무한히 들어올 수 있다
function 함수4(...a: number[]) {
  console.log(a); //[1,2,3,4,5] 이렇게 어레이에 담겨서
}
함수4(1, 2, 3, 4, 5);

//... 문법
//용도1. 함수 안에 쓸경우 rest parameter
//용도2. 괄호 벗겨주세요
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr, ...arr2];

//destructing
let [변수1, 변수2] = ["안녕", 100];
console.log(변수1); // '안녕'

let { student, age2 } = { student: true, age2: 20 };
console.log(student); //true

let 오브젝트2 = { student: true, age2: 20 };
function 함수6({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
