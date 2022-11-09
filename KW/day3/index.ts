//literal types: 아래와 같이 하면 person 했을 때 kim 만 들어올 수 있음.
let person: "kim";

//아래와 같이 제한 가능
function 함수(a: "hello"): 0 | 1 {
  return 0;
}

//가위바위보중 1개 입력 가능
// 가위나 보나 바위 만 들어올 수 있는 어레이만 리턴

function quiz(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "바위"];
}

//kim 이라는 타입만 들어올 수 있다는 뜻이기 때문에 아래에 자료.name이 못들어감.
//해결방법 as const
//value값 그대로 타입 지정해줌
//readonly 붙여줌
var 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}
내함수(자료.name);

//type alias에 함수 타입 저장하는 법 (화살표 함수로 사용)
//이걸 사용하려면 함수 표현식 써야함.
type 함수타입 = (a: string) => number;
let example: 함수타입 = function () {
  return 10;
};

//오브젝트 안에 함수 저장하는 법 (문제)
let 회원정보 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(3);

//typescript로 HTML 조작 가능 ->narrowing
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

let 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
  제목2.innerHTML = "반가워요";
}
//거의 사용하면 안됨
let 제목3 = document.querySelector("#title") as Element;
제목3.innerHTML = "반가워요";

//innerHtML 이 있으면 출력해주고 없으면 언디파인드 뱉어라
let 제목4 = document.querySelector("#title");
if (제목4?.innerHTML != undefined) {
  제목4.innerHTML = "반가워요";
}
//HTMLAnchorElement -> 태그마다 Element 정해져 있음.
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});

//문제 1
type peopleType = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
let 회원정보2: peopleType = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보2.plusOne(1);
회원정보2.changeName();

//문제2
function cutZero(x) {
  if (x.length === 1) {
    return "0";
  } else {
    return String(x.substr(x[0], x.length));
  }
}

function removeDash(x) {}

type CutType = (x: string) => string;

let cutZero2: CutType = function (x) {
  let result = x.replace(/^0+/, "");
};
