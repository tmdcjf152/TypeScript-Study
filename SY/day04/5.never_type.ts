//never type
//함수에 리턴 값이 있으면 쓸 수 없음
//함수 실행이 끝나지 않아야함 endpoint가 없어야 함 
function 함수(): never {
  throw new Error() //에러를 던지면 함수 실행이 끝나지 않고 중단 
  while(true)//내부 함수 무한 반복 
}

//코드 이상하게 짜면 never 출몰
//1.이상한 narrowing 
function 함수9(parameter: string) {
  if (typeof parameter == 'string') {
    console.log(parameter)
  } else {
    console.log(parameter)//parameter 타입 => never
  }
}
//이상한 에러 
let 함수10 = function () {
  throw new Error()
}