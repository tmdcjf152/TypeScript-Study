/**
 * 변수를 만들 때 타입지정이 가능하다. ( 변수명 : 타입명 )
 * 타입으로 쓸수 있는 것들은 string, number, boolean, bigint, null, undefined,[], {} 등이 있다.
 let 이름 :string = 'kim'

 * array 혹은 object자료는 이렇게 타입지정이 가능하다.
 let 이름: string[] = ['kim', 'park'];
 let 나이: { age: number } = { age: 123 };

 * 타입을 여러가지 쓸대는 | 기호를 이용해 or연산자를 표현할 수 있다.
 let 이름 :string | number = 123

 * type키워드를 이용해 타입을 변수처럼 담아서 사용가능하다
 type stringAndNumber = string | number;
 let 이름: stringAndNumber = 'kim123';

 * type키워드는 나만의 타입을 만들어서 사용이 가능하다. 이런걸 literal type(리터럴타입)이라고 부른다.
 type NameType = 'kim' | 'park';
 ⭕️ let 이름: NameType = 'kim';
 ❌ let 이름 : NameType = 'hong'   (🚫 Error: "hong 형식은 NameType 형식에 할당할 수 업습니다 ")

 *
*/
// function FunName(x : number) : number{
//     return x+3
// }
