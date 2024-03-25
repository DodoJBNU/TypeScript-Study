/**
 * 프로미스
 */

/* 성공
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20); // 비동기 작업이 성공했을 때 호출, 전달 인수는 결과값.
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});
*/

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

promise.then((response) => {
  console.log(response * 10);
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}
