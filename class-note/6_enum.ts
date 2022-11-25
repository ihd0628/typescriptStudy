enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
  Newbal = "뉴발",
}

console.log(Shoes.Nike); // 나이키
console.log(Shoes.Adidas); // 아디다스
console.log(Shoes.Newbal); // 뉴발

// 예제

enum Answer {
  Yes = "Y",
  No = "N",
}

const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) console.log("정답");
  if (answer === Answer.No) console.log("오답");
};

askQuestion(Answer.Yes);
askQuestion("Yes");
