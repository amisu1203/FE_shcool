// promise 객체를 리턴하는 함수

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         /* pending */
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// promise 객체를 이용해서 비동기 로직을 수행
// p(1000)
//     .then((ms) => {
//         console.log(`${ms}ms 후에 fulfilled 됩니다.`);
//     });

// await은 항상 async 함수 안에서 사용
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

async function main() {
    const ms = await p(1000);
    console.log(`${ms}ms 후에 실행된다.`);
}
main();
