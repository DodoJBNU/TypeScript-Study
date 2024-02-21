//배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
let multiArr2 = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
tup1.push(1); // 자바스크립트의 배열이라고 보기 때문에, 오류가 나지 않는 모습.
tup1.pop(); // pop도 마찬가지. 유의해서 사용해야 함.
// 튜플이 유용한 상황
const users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
];
console.log(users);
export {};
