import ReactDOM from "react-dom";
import React from "react";

function App() {
  const name = "Apopo";

  return <h1>Hello {name}</h1>;
}

const player = {
  name: "apopo",
  age: 300,
  good: "string",
};

console.log(player);
player.name = "apopopo";
console.log(player);
player.good = "yes";
console.log(player, console);

//계산기 함수 만들기
//const로 calculator라는 object를 만들고
//그안에 각각의 function property를 만든다.
//그래서 함수를 호출할 때 calculator의 ~ 어떤 function을 부르기위해
//calculater + '.' + 함수 이름 을 작성한다.

const calculator = {
  add: function (apple, bee) {
    console.log(apple + bee);
  },
  minus: function (apple, bee) {
    console.log(apple - bee);
  },
  divide: function (apple, bee) {
    console.log(apple / bee);
  },
  times: function (apple, bee) {
    console.log(apple * bee);
  },
};

calculator.add(5, 10);
calculator.minus(24, 3);
calculator.divide(25, 5);
calculator.times(3, 6);

ReactDOM.render(<App />, document.getElementById("app"));
