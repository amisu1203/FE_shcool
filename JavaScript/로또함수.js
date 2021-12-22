let lotto = []

for (let i = 0; i < 6; i++) {

    let lottoNum = Math.floor(Math.random() * 45) + 1;

    for (let j = 0; j< lotto.length; j++) {
        if(lottoNum == lotto[j]){
            lottoNum = Math.floor(Math.random() * 45) + 1;
        }
    }
    lotto.push(lottoNum)
}
lotto.sort(function(a, b){
    return a - b;
})
alert('금주의 로또 번호는~~!!' + lotto);

// 윤재님 방법
function randomNum(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
let count = new Set();
while(count.size<6){
    count.add(randomNum(1,45));
}
console.log([...count].sort((a,b) => a-b));