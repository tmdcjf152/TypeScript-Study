//instanc 연산자로 object narrowing 가능
let 날짜 = new Date();
if (날짜 instanceof Date)
  //
  type Car = {
    wheel: "4개";
    color: string;
  };
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수8(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car 타입입니다");
  }
}
