let 회원들: (number | string)[] = [1, "2", 3];
let object: { a: string | number } = { a: "123" };

//unknown은 any타입보다는 엄격한 타입 any타입과 같이 모든 값을 허용하지만 할당된 값이 어떤 타입인지 모르니까 함부로 프로퍼티나 연산 못함.
let 이름3: unknown;
let 나이: unknown;
let 이름: unknown = "kim";
이름 = 123;

//유니온 타입으로 설정시  |
// string + 1 (가능)
// number + 1 (가능)
// string | number + 1 (불가능)
//스트링이자 넘버인 새로운 타입이기 때문에
const array: (number | string)[] = [1, "2", 3];
const object2: { data: number | string } = { data: "123" };
