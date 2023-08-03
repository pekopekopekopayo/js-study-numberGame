let life = 5;
let answer = Math.floor(Math.random() * 10);

function checkAnswer() {
  user_answer = parseInt(document.getElementById("number-input-id").value);
  if (!isValidateNumber(user_answer)) {
    return
  }

  document.getElementById("error-message-id").innerText = ""

  if (user_answer === answer) {
    document.getElementById("success=message-id").innerText = "정답입니다."
    document.getElementById("number-submit-id").disabled = true
  }

  else {
    life--
    document.getElementById("success=message-id").innerText = "틀렸습니다."
  }

  if (life <= 0) {
    document.getElementById("success=message-id").innerText = "Game Over"
    document.getElementById("number-submit-id").disabled = true
  }
}

function isValidateNumber(user_answer) {

  if (isNaN(user_answer) || user_answer <= -1 || user_answer >= 11) {
    document.getElementById("number-input-id").value = NaN;
    document.getElementById("error-message-id").innerText = "유효하지 않은 숫자입니다. 0-10까지의 수를 입력해주세요"
    return false
  }
  return true
}

