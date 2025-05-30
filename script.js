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

    if (val !== "=" && val !== "AC" && val !== "0") {
      if (display.value === "0") {
        clear();
      }
      addValue(val);
    }

    if (val == "=") {
      let convert = display.value.replaceAll("x", "*").replaceAll("÷", "/");
      let result = eval(convert);
      clear();
      addValue(result);
    }

    if (val == "AC") {
      clear();
      addValue(0);
    }
  });
}
