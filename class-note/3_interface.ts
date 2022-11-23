interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 23,
  name: "세호",
};

// 함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};
const capt = {
  age: 123,
  name: "캡틴",
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface sumFunction {
  (a: number, b: number): number;
}

const sum: sumFunction = (a, b: string) => a + b;

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ["a", "b", "c"];
const obj: StringArray = { "1": "a" };

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const objEx: StringRegexDictionary = {
  cssFile: /[a-z]/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const capt1: Developer = {
  language: "hi",
};

const capt2: Developer = {
  name: "캡틴",
  age: 100,
  language: "ts",
};
