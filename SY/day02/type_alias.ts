//type alias = type 변수
//첫 글자 대문자 국룰
type Animal = string | number | undefined;
let 동물: Animal = 123;

type Cat = { name: string; age: number };
let cat: Cat = { name: "bibi", age: 3 };

const 출생지역 = "서울";
// 출생지역 ='부산' const라 안됨
// 하지만 재할당을 못하는 거지 오브젝트의 속성을 수정하는 걸 막지는 못 함
// 타입 스크립트에서는 막을 수 있음
// readonly 읽기 전용 => 에러 뜸
type Girl = {
  readonly name: string;
};

type Girl = {
  name?: string;
  name: string | undefined;
};

const 여친 = {
  name: "엠버",
};

여친.name = "유라";

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
//Object를 extend
type NewType = PositionX & PositionY; // {x:number, y:number}
let Position: NewType = { x: 10, y: 12 };
//type 변수는 재정의 불가
