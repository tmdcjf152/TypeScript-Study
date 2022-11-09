/**
 * 타입스크립트 기본 타입 정리(primitive Types)
 * 변수명: 타입 이라고 정하면 된다.
 *
 * 문자열 : let 이름 :string = 'kim'
 * 숫자형 : let 나이 :number = 26
 * 불린형 : let 군필 :boolean = true
 * 배열 : let 회원목록 :string[] =['kim', 'lee']
 * 객체 : let 내정보 {name : string} = {name:'kim'}
 *
 *> 오늘의 Tip
 * >변수 생성시 타입을 자동으로 부여해주기 때문에 타입이 따로 지정해줄 필요가 없다.
 */
// 1. 이름과 나이 출생지역을 변수로 각각 저장해보자
var 이름 = '최승철';
var 나이 = 28;
var 출생지역 = '서울';
// 2. 내가 좋아하는 곡과 가수이름을 변수에 객체 자료형으로 담아보자
var 좋아하는노래 = { 곡명: '가면무도회', 가수명: '비비(BIBI)' };
// 3. 다음과 같은 자료의 타입을 지정해보록 하자
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
