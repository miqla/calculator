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

    // if (val == "x") {
    //   val = "*";
    // }

    if (val !== "=" && val !== "AC") {
      if (display.value === "0") {
        clear();
      }
      addValue(val);
    }

    if (val == "=") {
      let result = eval(display.value);
      clear();
      addValue(result);
    }

    if (val == "AC") {
      clear();
      addValue(0);
    }
  });
}
