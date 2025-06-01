const display = document.querySelector(".display");
const preview = document.querySelector(".preview");
const buttons = document.querySelectorAll("button");
const resultPreview = document.querySelector(".resultPreview");
const resultDisplay = document.querySelector(".resultDisplay");

function addValue(val) {
  display.value += val;
}

function addPreview(val) {
  preview.value += val;
}

function clearPreview() {
  preview.value = "";
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

      if (val === "0") {
        const result1 = string.split("+");
        const result2 = result1.flatMap((item) => item.split("-"));
        const result3 = result2.flatMap((item) => item.split("x"));
        const arr = result3.flatMap((item) => item.split("÷"));
        parseInt(arr);
        arr.forEach((e) => {
          if (e == 0) {
            return;
          }
        });
        return;
      }

      if (val === ".") {
        const result1 = string.split("+");
        const result2 = result1.flatMap((item) => item.split("-"));
        const result3 = result2.flatMap((item) => item.split("x"));
        const arr = result3.flatMap((item) => item.split("÷"));
        arr.forEach((e) => {
          let decimal = e.indexOf(".");
          if (decimal == -1) {
            addValue(val);
          }
        });
        return;
      }
      addValue(val);
    }

    if (val === "=") {
      if (
        lastChar() === "+" ||
        lastChar() === "-" ||
        lastChar() === "x" ||
        lastChar() === "÷"
      ) {
        return;
      }
      try {
        let convert = string.replaceAll("x", "*").replaceAll("÷", "/");
        let result = eval(convert);
        clear();
        addValue(result);
        clearPreview();
        addPreview(string + "=");
        addHistory(string + "=", result);
        return;
      } catch (error) {
        clear();
        addValue("error!");
      }
    }

    if (val === "AC") {
      clear();
      clearPreview();
      addValue("0");
    }
  });
}

// history
function addHistory(prev, res) {
  const historyContainer = document.querySelector(".historyContainer");

  const rPreview = document.createElement("p");
  rPreview.classList.add("resultPreview");
  rPreview.innerText = prev;

  const rDisplay = document.createElement("p");
  rDisplay.classList.add("resultDisplay");
  rDisplay.innerText = res;

  const result = document.createElement("div");
  result.classList.add("result");
  result.append(rPreview, rDisplay);

  historyContainer.append(result);
}
