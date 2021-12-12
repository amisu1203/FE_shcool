// p.then으로 callback 함수를 설정했기 때문에 fulfilled되면서 callback이 실행된다.
const p = new Promise ((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); // fulfilled
    }, 1000);
});

p.then( () => {
    console.log(`1000ms 후에 fulfilled 됩니다.`);
});

// 객체를 미리 만들기보다는 사용할 곳에서 객체를 바로 생성하는 편이 많다.

// then을 설정하는 시점을 명확히 하고,
// 함수의 실행과 동시에 프로미스 객체를 생성해서 pending을 시작하도록 하기 위해
// 프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어서, 실행과 동시에 then을 설정한다.
function pro() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve(); // fulfilled
        }, 2000);
    });
}

pro().then(() => {
    console.log(`2000ms 후에 fulfilled 상태가 됩니다.`);
});
