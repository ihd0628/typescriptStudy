class Playerrr {
  #secondName;
  constructor(firstName) {
    this.firstName = firstName;
  }
  // second(secondName) {
  //   this.#secondName = secondName;
  // }
  second() {
    this.#secondName = "hooon";
  }
  // returnSecond(secondName) {
  //   this.second(secondName);
  //   return this.#secondName;
  // }
}

// const leeerer = new Playerrr("lee", "seunghoon");
// console.log(lee.returnSecond("hooooon"));

const aaa = new Playerrr("lee");
aaa.second();

console.log(aaa._secondName);
