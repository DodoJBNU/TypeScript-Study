/**
 * 클래스
 */

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}

let studentA = new Student("이정환", "A+", 27);
console.log(studentA);
