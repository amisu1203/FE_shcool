// then 함수에서 promise 객체를 리턴해서 체이닝하면 비동기 작업을 순차적으로 아래로 표현할 수 있다.
// 다양한 방법으로 then에 함수를 넣어서 리턴해보겠다.

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve('하하'); // fulfilled
        },1000);
    });
}

p()
    .then(() => {
        return p();
    })
    .then(() => p())
    .then(p)
    .then((message) => {
        console.log(`4000ms 후에 fulfilled 됩니다.`);
    });