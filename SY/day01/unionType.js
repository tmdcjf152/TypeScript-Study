//union 타입 두개 또는 그 이상을 합쳐서 새로운 타입을 만드는 것
var 회원 = "kim";
회원 = "123"; //회원에 number, string, boolean 다 가능
// array 와 object
var 사람들 = [1, "kim", 2];
var 오브젝트 = { a: 123 };
// any, unknown 로 타입기능 해제
var 고양이; // 완전히 해제
var 강아지; // 다른 곳 오염 방지
//let 동물: string = 강아지 error
//강아지 -1 error
var age;
// age + 1 eerror 타입 엄격한거 좋아함 string +1 허용  numver =1 허용 string|number +1 안돼
//quiz
var array = [1, "kim", 2];
var object = { data: "123" };
