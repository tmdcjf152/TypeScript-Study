//함수에 타입 지정
function 함수(x: number): number {
  return x * 2;
}

//void
// 실수로 뭔가 return 하는걸 사전에 막아줌
function sdf(x): void {}
// 파라미터에 타입 지정하면 함수 선언할 때 파라미터 없으면 에러남 그냥 자바스크립트랑 다름
// 파라미터가 옵션일 경우 ?
//? 는 number | undiefined와 같음
function sadf(x?: number) {}

//narrowing
function fdasd(x: number | string) {
  if (x가 숫자면) {
    
    return(x+3)
  }
}

//quiz
function 인사(x: string | undefined) {
  if (typeof x === "string") {
    return "안녕하세요" + x
  } else if (typeof x === "undefined") {
    return "이름이 없습니다."
  }
}

console.log(인사("정세영"))

function 문제2(x: string | number) {
  if (typeof x === "string") {
    return x.length
  } else if (typeof x === "number") {
    return x.toString().length
  }
}
console.log(문제2("안녕하세요"))

function 문제3(x: number, y: boolean, z: string) {
  let 점수 = 0
  let 점수2 = 0
  
  if (y === true) {
    점수 = 500
  } else if (y === false) {
    점수 = 0
  }

  if (z === '상') {
    점수2 = 100
  } else {
    점수2 = 0
  }

  if ((x + 점수 + 점수2) >= 600 ) {
    return "결혼 가능"
  } else {
  }

}

console.log(문제3(140, false, '상'))

function 내함수(x: number | string) {
  let array: number[] = []
  if (typeof x === 'number') {
    array[0] = x;
  }

//array[0] = x as number => assertion
}
//Narrowing 판정 문법들 typeof, in, instance
//assertion 문법 타입 덮어 쓰기 
// 용도 narrowing 할때 그냥 타입 변경은 안됨
//무슨 타입이 들어올지 100% 확신할 때 
//되도록 if문 쓰는게 좋음 버그 못 잡아줘서

//type alias = type 변수 
//첫 글자 대문자 국룰
type Animal =  string | number | undefined
let 동물: Animal = 123;

type Cat = {name:string, age: number}
let cat: Cat = {name:'bibi', age:3}

const 출생지역 = '서울'
// 출생지역 ='부산' const라 안됨
// 하지만 재할당을 못하는 거지 오브젝트의 속성을 수정하는 걸 막지는 못 함
// 타입 스크립트에서는 막을 수 있음
// readonly 읽기 전용 => 에러 뜸
type Girl = {
  readonly name: string
}

type Girl = {
  name?: string
  name: string | undefined
}

const 여친 = {
  name:'엠버'
}

여친.name = '유라'

type Name = string
type Age = number
type Person = Name | Age

type PositionX = { x: number }
type PositionY = { y: number }
//Object를 extend
type NewType = PositionX & PositionY // {x:number, y:number}
let Position: NewType = { x: 10, y: 12 }
//type 변수는 재정의 불가
