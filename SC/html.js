var 제목 = document.querySelector('#title');
var 링크 = document.querySelector('.link');
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () { });
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'httpp://kakao.com';
}
// instanceof 를 사용할때 내가 사용한 태그에 맞는 Element를 사용해야한다.
// HTML 조작시 narrowing 방법 5개
// 1.
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
// 2. 이방법을 제일 많이씀
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
// 3. 
var 제목1 = document.querySelector('#title');
제목1.innerHTML = '반가워요';
// 4.
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '반가워요';
}
// 5. trconfing에서 strick 모드 제거 
