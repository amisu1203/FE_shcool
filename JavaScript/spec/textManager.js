const TextManager = (() => {
    // 원시 값으로 만들면 인스턴스간에 값 공유가 불가능해서 객체로 만들어준다.
    let value = {data: `Hello Lions!`};

    function innerTextManager() {} 
    innerTextManager.prototype.getValue = function () {
        return value;
    }

    return innerTextManager;
})();

const myInstance = new TextManager();
console.log(myInstance);