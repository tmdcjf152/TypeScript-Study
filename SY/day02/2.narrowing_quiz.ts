//quiz
function 인사(x: string | undefined) {
  if (typeof x === "string") {
    return "안녕하세요" + x;
  } else if (typeof x === "undefined") {
    return "이름이 없습니다.";
  }
}

console.log(인사("정세영"));

function 문제2(x: string | number) {
  if (typeof x === "string") {
    return x.length;
  } else if (typeof x === "number") {
    return x.toString().length;
  }
}
console.log(문제2("안녕하세요"));

function 문제3(x: number, y: boolean, z: string) {
  let 점수 = 0;
  let 점수2 = 0;

  if (y === true) {
    점수 = 500;
  } else if (y === false) {
    점수 = 0;
  }

  if (z === "상") {
    점수2 = 100;
  } else {
    점수2 = 0;
  }

  if (x + 점수 + 점수2 >= 600) {
    return "결혼 가능";
  } else {
  }
}

console.log(문제3(140, false, "상"));
