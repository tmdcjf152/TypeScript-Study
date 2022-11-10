//Narrowing & Assertion
//숙제 1
function arrayFilter(a: (string | number)[]) {
  let filtered: number[] = [];
  a.forEach((b) => {
    if (typeof b === "string") {
      filtered.push(parseInt(b));
    } else {
      filtered.push(b);
    }
  });
  return filtered;
}

console.log(arrayFilter([1, "2", 3]));

//숙제 2
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
let error = { hello: "hi" };

function findSubject(a: { subject: string } | { subject: string[] }) {
  if (typeof a.subject === "string") {
    return a.subject;
  } else if (typeof a.subject === "object") {
    let array = a.subject;
    return array[array.length - 1];
  } else {
    return "error";
  }
}

console.log(findSubject(철수쌤));

//type alias
// 숙제 1
//하나밖에 못씀

//숙제 2
type colorType = {
  color?: string;
  size: number;
  readonly position: number[];
};

//숙제 3
type member = {
  name: string;
  phone: number;
  email: string;
};

let bibi: member = {
  name: "비비",
  phone: 123,
  email: "bibi@naver.com",
};

//숙제 4
type member2 = {
  adult: boolean;
};
type member3 = member & member2;

let deul: member3 = {
  name: "deul",
  phone: 123,
  email: "deul@gmail.com",
  adult: false,
};
