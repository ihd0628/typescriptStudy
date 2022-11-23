const log = (value: number | string) => {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.indexOf("2");
  }
  throw new TypeError("value must be string or number");
};

// union 타입의 특징

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  someone.name;
  someone.skill;
};

askSomeone({ name: "lee", age: 30 });

const askSomeone2 = (someone: Developer & Person) => {
  someone.name;
  someone.skill;
  someone.age;
};

askSomeone2({ name: "lee", age: 30 });
askSomeone2({ name: "lee", age: 30, skill: "ts" });
