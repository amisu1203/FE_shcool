console.log(Promise);

// 생성자를 사용해서 나만의 promise 객체를 만들 수 있다.
// 생성자의 인자로 executor 함수를 이용한다.

// executor 함수는 인자로 resolve와 reject를 가집니다.
//  (resolve, reject) => {,..}
//   resolve와 reject는 함수입니다.

new Promise(/* executor */ (resolve, reject) => {

})
// 위와 같이 생성자를 통해서 promise 객체를 만드는 순간 pending (대기) 상태가 된다.

// executor 함수 인자인 resolve 함수를 실행하면 fulfilled (이행) 상태가 된다.
new Promise ((resolve, reject) => {
    // 객체를 만드는 순간 pending 상태
    // 비동기적인 처리가 되는 상황이 이루어짐
    // resolve 함수를 실행하면 fulfilled 상태
    resolve();
});

// executor 함수 인자인 reject 함수를 실행하면 rejected (거부) 상태가 된다.
new Promise ((resolve, reject) => {
    // 비동기적인 처리가 되는 상황이 이루어짐
    // reject();
});

// p라는 promise 객체를 만들어서 1초 후에 fulfilled 상태가 되게 해보자
const p = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(); // resolve가 1초 후에 실행됨
    }, 1000);
});


// a라는 promise 객체가 fulfilled되는 시점에 p.then 안에 설정한 callback 함수가 실행된다.
const a = new Promise ((resolve, reject) => {
    setTimeout( () => {
        resolve(); // 2초 후에 fulfilled 상태가 된다.
    }, 2000);
});
p.then(/* callback 함수가 들어갈 공간 */);




