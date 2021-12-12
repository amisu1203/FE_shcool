// executor의 resolve 함수를 실행할 때 인자를 넣으면, then의 callback 함수의 인자로 받을 수 있다.

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hi~');
        },1000);
    });
}

p().then(message => {
    console.log(`1000초 후에 fulfilled 됩니다.`, message);
});