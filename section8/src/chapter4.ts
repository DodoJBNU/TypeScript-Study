/**
 * 템플릿 리터럴 타입
 * 특정 패턴을 갖는 리터럴 타입을 만드는 것
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

//type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' |  'black-dog' ; // ..

type ColoredAnimal = `${Color}-${Animal}`;
