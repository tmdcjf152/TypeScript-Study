# Narrowing & Assertion

```
function 내함수(x :number | string){
   return x + 1  //에러남
}

Operator '+' cannot be applied to types 'string | number' and 'number'
```

위에처럼 코드를 작성했을시 타입스크립트는 에러를 발생시킨다. 이럴때는 타입을 하나로 Narrowing 해주거나 Assert 해주면 된다.

## Type Narrowing

조건문으로 타입을 하나로 정해주는것을 뜻한다.

```
function 내함수(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  }
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}
```

if문과 typeof 키워드로 현재 파라미터의 타입을 검사해서각 타입일때 실행될 코드를 작성해야지 정상적으로 함수를 실행할수있다. <br/> <br/> 이떄 마지막에 else{} 를
작성하지 않으면 에러가 발생한다. <br/> <br/>

## 이외에도 Narrowing으로 판정해주는 문법

1. typeof 변수
2. 속성명in 오브젝트자료
3. 인스턴스 instanceof 부모 <br/> <br/> <br/> <br/>

## Type Assertion

"이 변수의 타입을 number로 생각해주세요" 라는 의미 로 사용할 수 있다.<br/>
`변수명 as string` 이런방식으로 작성하면 된다.
```
function 내함수(x :number | string){ 
    return (x as number) + 1 
}
console.log( 내함수(123) )
```
정확한 코드를 짜려면 Narrowing을 사용하는게 좋다.
as키워드는 업격한 타입체크기능을 잠깐 안쓰겠다는 의미와 동일하기 때문이다.<br/>
### as 문법은 이럴 때 사용하자
1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용
2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할떼
