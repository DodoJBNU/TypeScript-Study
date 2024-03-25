/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * -> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 30000,
  skill: "react.js",
};

book = programmingBook;
// programmingBook = book;

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 30000,
  //  skill : "react.js",
  // 업 캐스팅이라 가능해보이지만, 초기화할 때 넣는 것은 안된다?
  // -> 타입 스크립트의 특수한 기능인, "초과 프로퍼티 검사" 때문에 안되는 것임.
};
