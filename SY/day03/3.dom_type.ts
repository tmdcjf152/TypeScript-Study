//
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

//narrowing 다른 방법
//if(제목 instanceof Element)
//let 제목 = document.querySelector('#title') as Element
//if(제목?.innerHTML != undefined)  옵셔널 체이닝

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
// 버튼?.addEventListener('click', function)
