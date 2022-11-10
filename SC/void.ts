/**
 * 함수에 타입지정하는 방법
    1. 함수로 들어오는 자료 (파라미터)
    2. 함수에서 나가는 자료(return)

function 내함수(x :number) :number { 
  return x * 2 
} 
    1. 파라미터 타입지정은 파라미터 옆에 적으면 된다.
    2. 리턴값의 타입지정은 함수명 () 우측에 적으면 된다.


* Void Type : 함수에 리턴 방지장치를 주고 싶을 때 void 타입을 활용하면 된다.
function 내함수(x :number) :void { 
  return x * 2 //여기서 에러남 
} 

* 파라미터가 옵션일 경우
    파라미터 우측에 물음표를 작성하면 된다. 물음표는 number | undefined 와 똑같은 의미이다.
function 내함수(x? :number) { 

}
내함수(); //가능
내함수(2); //가능

* > 아래 코드가 오류나는 이유는? 
* > 파라미터는 옵션이고 옵션인 파라미터는 number|undefind 이기 때문에 아직 x라는 파라미터가 뭔지 확실하지 않기때문에 에러를 내준다.
function 내함수(x? :number) :number { 
  return x * 2 
}  

 */

// ? (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
let 이름이뭐에요 = (name: string) => {
	if (name) {
		return `안녕하세요 ${name} 입니다.`;
	} else {
		return '이름이 없습니다.';
	}
};

console.log(이름이뭐에요('김길동'));

// ? (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
let 몇자리숫자 = (num: number) => {
	return num.toString().length;
};

console.log(몇자리숫자(123));

// ? (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.f
function 결혼가능(money :number, house :boolean, charm :string) :string|void{
    let score :number = 0;
    score += money;
    if (house === true){
      score += 500
    }
    if (charm === '상'){
      score += 100
    }
    if (score >= 600){
      return '결혼가능'
    } 
  }
  console.log(결혼가능(100,true,'상')) 