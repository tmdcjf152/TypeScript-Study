//interface로 object에 타입지정
//type 대신 interface 키워드 사용 가능
interface Square {
  color: string;
  width: number;
}
//차이점 interface는 extends 가능
//중복선언 가능
let 네모 = { color: "red", width: "100" };

interface Student {
  name: string;
}
interface Student {
  score: number;
} //중복 선언 가능 => Student 자동으로 extends
//외부 라이브러리 커스터마이징 할 때 interface로 속성 쉽게 추가 할 수 있음
interface Teacher extends Student {
  age: number;
  //name: dsfad 이렇게 중복 속성 만들면 에러
}
/*interface Teacher {
name: string;
age: number;
} 와 같음*/
let 학생 = { name: "kim", age: 20 };

//type alias로 extends
//extends는 아니고 복사해서 교차 하도록 해서 같은 기능 하도록
//중복 선언 불가
type Animal2 = { name: string };
type Cat2 = { age: number } & Animal;
