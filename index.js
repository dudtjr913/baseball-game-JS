function makeForm() {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const form = document.createElement('form');
  const input = document.createElement('input');
  body.append(div);
  div.append('3자리 숫자를 입력해주세요.');
  form.append(input);
  div.append(form);
}

function removeForm() {
  const form = document.querySelector('form');
  form.remove();
}

function finish(userAnswer) {
  const result = document.createElement('div');
  result.innerHTML = `<div>${userAnswer} : 3스트라이크<div>성공하셨습니다.</div></div>`;
  const div = document.querySelector('div');
  div.append(result);
  return removeForm();
}

function makeNumber() {
  const numbers = [];
  while (numbers.length !== 3) {
    const number = Math.ceil(Math.random() * 9);
    const exNumber = numbers.find((v) => v === number);
    !exNumber && numbers.push(number);
  }
  console.log(numbers);
  return numbers;
}

function result(strike, ball, userAnswer) {
  const resultText = document.createElement('div');
  if (strike === 3) {
    return finish(userAnswer);
  }
  if (ball === 0 && strike === 0) {
    resultText.append(`${userAnswer} : nothing`);
  } else {
    resultText.append(`${userAnswer} : ${strike}스트라이크 ${ball}볼`);
  }
  const div = document.querySelector('div');
  div.append(resultText);
}

function checkAnswer(userAnswer, answer) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const find = answer.find((v) => v === parseInt(userAnswer[i], 10));
    if (find) {
      parseInt(userAnswer[i], 10) === answer[i] ? strike++ : ball++;
    }
  }
  return result(strike, ball, userAnswer);
}

function userInput(numbers) {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const onSubmit = (e) => {
    e.preventDefault();
    checkAnswer(input.value, numbers);
    input.value = '';
  };
  form.addEventListener('submit', onSubmit);
}

function gameStart() {
  makeForm();
  const numbers = makeNumber();
  userInput(numbers);
}

gameStart();
