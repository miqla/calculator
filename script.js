const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

function addValue(val) {
  display.value += val;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let val = buttons[i].innerHTML;
    if (val !== "=" && val !== "AC") {
      addValue(val);
    }
  });
}
