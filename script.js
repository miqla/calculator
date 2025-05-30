const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function addValue(val) {
  display.value += val;
}

function clear() {
  display.value = "";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let val = buttons[i].innerHTML;
    let string = display.value;

    if (val !== "=" && "AC") {
      // able to add zero as prefix
      if (string === "0") {
        if (val === ".") {
          addValue(val);
        } else {
          clear();
          addValue(val);
        }
        return;
      }

      addValue(val);
    }

    if (val == "=") {
      let convert = string.replaceAll("x", "*").replaceAll("÷", "/");
      let result = eval(convert);
      clear();
      addValue(result);
    }

    if (val == "AC") {
      clear();
      addValue("0");
    }
  });
}
