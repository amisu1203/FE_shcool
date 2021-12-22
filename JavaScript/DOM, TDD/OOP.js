// 객체 지향

// 1. 모듈 패턴
// 값을 은닉하기 위해 이렇게 사용한다.
function person() { 
    // 클로져
    let age = 35;

    return {
        getAge: function () {
            return age
        },
        setAge: function (data) {
            return age = data
        }
    }
}

const person = person();
console.log(person.getAge());
console.log(person.setAge(23));
console.log(person.getAge()); // 23

// 2. 사용자 정의 타입 패턴
// 클래스가 나오기 이전에 인스턴스를 만드는 생성자함수

function PersonType() { // 이 안의 값은 은닉되지 않는다.
    this.age = 35;
}

PersonType.prototype.getAge = function () {
    return this.age
}

const instancePerson = new PersonType();
console.log(instancePerson.age); // 35


// 3. 모듈 + 사용자 정의 타입
// 일단 생성자 함수를 만들고(사용자 정의)
function PersonType2() {
    // 은닉해야 할 대상을 만든다 (클로져)
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge()); // 25