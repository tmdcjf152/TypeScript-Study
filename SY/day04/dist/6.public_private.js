//public, private
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = "Park"; // 자식이 수정할 수 없게 됨 class 안에서만 수정
        this.name = a + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        //밖에서 변경하고 싶은 경우 미리 만들어 놓은 함수를 밖에서 갖다 쓰면 됨
        this.familyName = "Chung";
    };
    return User;
}());
var user1 = new User("bibi");
user1.name = "안뇽";
user1.이름변경함수();
//축약 버전
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
    }
    return Person2;
}());
var 자식 = new Person2("kim", 20);
