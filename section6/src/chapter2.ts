/**
 * 접근 제어자
 * access modifier
 * 클래스를 만들 때, 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법.
 */

class Employee {
  // 필드

  // 생성자
  constructor(private name: string, protected age: number, public position: string) {}
  //메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이도현", 25, "developer");
console.log(employee);
