# Type Aliases

타입을 변수처럼 담아서 사용하려면 type 키워드를 사용하면된다.

```
type Animal = string | number | undefined;
let 동물 :Animal;
```

### Object 타입도 저장이 가능하다.

```
type 사람 = {
  name : string,
  age : number,
}

let teacher :사람 = { name : 'john', age : 20 }
```

# readonly

객체자료는 const로 선언해도 객체내부는 마음대로 변경이 가능하다. const변수는 재할당만 막아줄 뿐이지 그 안에 있는 객체속성 까지 관여하지 않기 때문이다. 이렇게 객
체속성이 변경되는것을 막기위해 사용하는것이 readonly 키워드이다.
```
type Girlfriend = {
  readonly name : string,
}

let 여친 :Girlfriend = {
  name : '엠버'
}

여친.name = '유라' //readonly라서 에러남
```
