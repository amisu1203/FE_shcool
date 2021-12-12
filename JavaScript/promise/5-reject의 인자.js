// reject를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error를 이용하여 error 객체를 만들어
// 인자를 넣으면 catch의 callback 함수의 인자로 받을 수 있다.

function p () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('server problem'));
        });
    });
}

p().then((message) => {
        console.log('1000ms 후에 fulfilled 상태가 됩니다.', message);
    }).catch((reason) => {
        console.log(`1000ms 후에 rejected 상태가 됩니다.`, reason);
    });


