// any
// 특정 변수의 타입을 우리가 모를때

let num: number = 1;

let anyVar: any = 10;
anyVar = num;
num = anyVar;
anyVar.topUpperCase();

// unknown
let unknownVar: unknown;
unknownVar = 10;

unknownVar = num;
//num = unknownVar; // error
//unknownVar.topUpperCase(); // error

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
