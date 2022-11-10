//Narrowing & Assertion
//숙제 1
function arrayFilter(a) {
    var filtered = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            filtered.push(parseInt(b));
        }
        else {
            filtered.push(b);
        }
    });
    return filtered;
}
console.log(arrayFilter([1, "2", 3]));
//숙제 2
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
var error = { hello: "hi" };
function findSubject(a) {
    if (typeof a.subject === "string") {
        return a.subject;
    }
    else if (typeof a.subject === "object") {
        var array = a.subject;
        return array[array.length - 1];
    }
    else {
        return "error";
    }
}
console.log(findSubject(철수쌤));
var bibi = {
    name: "비비",
    phone: 123,
    email: "bibi@naver.com"
};
var deul = {
    name: "deul",
    phone: 123,
    email: "deul@gmail.com",
    adult: false
};
