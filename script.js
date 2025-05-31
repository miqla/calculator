const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function addValue(val) {
  display.value += val;
}

function clear() {
  display.value = "";
}

function lastChar() {
  let str = display.value;
  let last = str.charAt(str.length - 1);
  return last;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let val = buttons[i].innerHTML;
    let string = display.value;

    if (val !== "=" && val !== "AC") {
      if (string === "0") {
        if (
          val === "x" ||
          val === "+" ||
          val === "-" ||
          val === "÷" ||
          val === "AC"
        ) {
          return;
        }
        if (val === ".") {
          addValue(val);
        } else {
          clear();
          addValue(val);
        }
        return;
      }

      if (
        lastChar() === "+" ||
        lastChar() === "-" ||
        lastChar() === "x" ||
        lastChar() === "÷"
      ) {
        if (val === "x" || val === "+" || val === "-" || val === "÷") {
          let change = string.replace(/.$/, val);
          clear();
          addValue(change);
          return;
        }
        if (val === ".") {
          addValue("0" + val);
          return;
        } else {
          addValue(val);
          return;
        }
      }

      addValue(val);
    }

    if (val === "=") {
      let convert = string.replaceAll("x", "*").replaceAll("÷", "/");
      let result = eval(convert);
      clear();
      addValue(result);
    }

    if (val === "AC") {
      clear();
      addValue("0");
    }
  });
}
