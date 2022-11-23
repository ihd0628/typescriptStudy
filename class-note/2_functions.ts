// 함수의 파라미터에 타입을 정의하는 방식
const add1 = (a: number, b: number) => {
  return a + b;
};
add1(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
const add2 = (): number => 10;

// 함수의 타입을 정의하는 방식 종합
const add3 = (a: number, b: number): number => {
  return a + b;
};
add3(10, 20);
add3(10, 20, 30, 40);
add3(10);

// 함수의 옵셔널 파라미터
const log = (a: string, b?: string, c?: string) => {
  return a + b + c;
};

log("hello");
log("hello", "ts");
