// rejected 된 경우를 처리하기 위해 try catch를 이용합니다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function main() {
    try {
        const ms = await p(1000);
        console.log(`${ms}ms 후에 실행됩니다.`);
    } catch (error) {
        console.log(error);
    }
}
main();