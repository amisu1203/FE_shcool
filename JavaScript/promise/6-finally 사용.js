// fulfilled 되거나 rejected 된 이후에 최종적으로 실행할 것이 있다면
// finally()를 설정하고 함수를 인자로 넣습니다.

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(new Error('Server Error'));
        }, 1000);
    });
}

p().then((message) => {
        console.log(`1000ms 후에 fulfilled 상태가 됩니다.`, message);
    }).catch((reason) => {
        console.log(`1000ms 후에 rejected 상태가 됩니다.`, reason);
    }).finally(() => {
        console.log('작업이 끝났습니다.');
    });