//class 키워드 이해하기
//옛날 문법
function 기계(구멍, 구멍2) {
  this.q = 구멍;
  this.w = 구멍2;
}
//this => 기계로부터 생성되는 object = instance
//기계 => 부모 , nunu garen => 자식

var nunu = new 기계("consume", "snowball");
var garen = new 기계("strike", "consume");

class Hero {
  q: string;
  w: string;
  constructor(구멍, 구멍2) {
    this.q = 구멍;
    this.w = 구멍2;
  }
}
