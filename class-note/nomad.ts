type ex = {
  readonly ex: string;
};

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
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (add1, add2, add3?: number) => {
  if (add3) return add1 + add2 + add3;
  return add1 + add2;
};

Router.push({
  path: "/home",
  state: 1,
});

Router.push("./home");

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type SuperPrint = {
  <T, M>(a: T[], b: M): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a1 = superPrint([1, 2, 3], "x");
const b = superPrint([true, false, true], 2);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, false, true]);
const e = superPrint([1, 2, false, true, "helo"]);

d.toUpperCase();

type Playerr<E> = {
  name: string;
  extraInfo: E;
};

type ExtraInfo = {
  favFood: string;
};

type LeePlayerr = Playerr<ExtraInfo>;

const lee: LeePlayerr = {
  name: "lee",
  extraInfo: {
    favFood: "pizza",
  },
};

const lynn: Playerr<null> = {
  name: "lynn",
  extraInfo: null,
};

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickName: string
  ) {}

  abstract getFirstName(): string;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Player extends User {
  getFirstName() {
    return this.firstName;
  }
}

// 예시
type Words = {
  [key: string]: string;
};

let dic: Words = {
  potato: "food",
  pizza: "food",
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi);
console.log(dict.def("kimchi"));

type Person = {
  name: string;
  age: number;
};

type Developer = Person & {
  language: string;
};

const capt1: Developer = {
  language: "ts",
};

const capt2: Developer = {
  name: "캡틴",
  age: 100,
  language: "ts",
};

interface Userr {
  name: string;
}

interface Userr {
  firstName: string;
}

interface Userr {
  lastName: string;
}

const hoon: Userr = {
  name: "lee",
  firstName: "seungon",
  lastName: "hoon",
};

interface UserBetter {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class PlayerBetter implements UserBetter, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

interface SStorage<TT> {
  [key: string]: TT;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("ket");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("lala");
