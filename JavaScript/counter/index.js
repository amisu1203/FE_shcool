const num = document.getElementById('num');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(num);
console.log(increase);
console.log(decrease);

// console.log(num.innerText); // 0
// console.log(num.offsetTop); // 21
// console.log(increase.id); // increase

increase.onclick = () => {
    const current = parseInt(num.innerText, 10); // num의 텍스트를 10진수 숫자로 변환해서 current에 할당
    num.innerText = current + 1;
};
decrease.onclick = () => {
    const current = parseInt(num.innerText, 10);
    num.innerText = current - 1;
};