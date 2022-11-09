//함수에 타입 지정
function 함수(x) {
    return x * 2;
}
//void
// 실수로 뭔가 return 하는걸 사전에 막아줌
function sdf(x) { }
// 파라미터에 타입 지정하면 함수 선언할 때 파라미터 없으면 에러남 그냥 자바스크립트랑 다름
// 파라미터가 옵션일 경우 ?
//? 는 number | undiefined와 같음
function sadf(x) { }
//narrowing
function fdasd(x) {
    if (x가)
        숫자면;
    {
        return (x + 3);
    }
}
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    //array[0] = x as number => assertion
}
var 동물 = 123;
var cat = { name: 'bibi', age: 3 };
var 출생지역 = '서울';
var 여친 = {
    name: '엠버'
};
여친.name = '유라';
var Position = { x: 10, y: 12 };
//type 변수는 재정의 불가
