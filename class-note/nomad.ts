type ex = {
  readonly ex: string;
};

const test: ex = {
  ex: "d",
};

test.ex = "f";

const numbers: readonly number[] = [1, 2, 3];
numbers.push(1);

const a = [];
a[0] = 1;
a[1] = "e";

let unknow: unknown;

if (typeof unknow === "number") {
  let qqq = unknow + 1;
}

function asdd(name: string | number): never {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}

function makeError(): never {
  throw new Error("Err");
}

// call Signature를 사용하는 방식
type Add = (a: number, b: number) => number;

const add: Add = (add1, add2) => add1 + add2;

Router.push({
  path: "/home",
  state: 1,
});

Router.push("./home");
