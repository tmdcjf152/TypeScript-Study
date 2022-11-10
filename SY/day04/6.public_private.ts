//public, private
class User {
  public name: string; //public 붙으면 모든 자식들이 이용 가능
  private familyName = "Park"; // 자식이 수정할 수 없게 됨 class 안에서만 수정
  constructor(a: string) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    //밖에서 변경하고 싶은 경우 미리 만들어 놓은 함수를 밖에서 갖다 쓰면 됨
    this.familyName = "Chung";
  }
}

let user1 = new User("bibi");
user1.name = "안뇽";
user1.이름변경함수();

//축약 버전
class Person2 {
  constructor(public name: string, age: number) {}
}
let 자식 = new Person2("kim", 20);
