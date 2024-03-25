/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함.");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

const employeeeB = new Employee("이정환", 27, "개발자");
console.log(employeeeB);

const employeeC: Employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함.");
  },
};
