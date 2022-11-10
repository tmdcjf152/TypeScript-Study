//변수에 타입 지정
let 이름: string = "kim";
//이름 = 124 error!
let 나이: number = 50;

//array 타입지정
let 회원들: string[] = ["kim", "park"];
let 년도: number[] = [2022, 2021];

//object 타입 지정
let members: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// tip 타입 추론 타입 지정 안해도 타입스크립트가 추론해서 알아서 지정해줌
let ghldnjsemf = [123, 123];

//quiz1
//이름, 나이, 태어난 곳 타입 지정
let myname: string = "seyoung";
let myage = 26;
let address = "금천구";
//좋아하는 노래 제목, 가수 object 타입 지정
let song: { title: string; singer: string } = {
  title: "고양이",
  singer: "새소년",
};
//project object의 타입 지정
let project: { member: string[]; days: number; started: boolean } = {
  member: ["sc", "kw", "mk", "sy"],
  days: 1,
  started: true,
};
