import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [stat, setStat] = useState(0);

  var validate = (event) => {
    event.preventDefault();
    let ss = document.getElementById("txt").value;
    let lbl = document.getElementById("stat");
    let stack = [];
    let st = true;
    let cmt = false;
    let s = "";

    for (let j = 0; j < ss.length; j++) {
      let y = ss[j];
      if (
        y == "(" ||
        y == ")" ||
        y == "[" ||
        y == "]" ||
        y == "{" ||
        y == "}" ||
        y == "<" ||
        y == ">" ||
        y == "/" ||
        y == "*"
      ) {
        s += y;
      }
    }

    for (let i = 0; i < s.length; i++) {
      let x = s[i];
      if (x == "/") {
        if (s[i + 1] == "*") {
          i++;
          // if (i <= s.length - 1) {
          cmt = true;
          // }
        }
      }
      if (x == "*") {
        if (s[i + 1] == "/") {
          cmt = false;
          i++;
        }
      }
      if (cmt == false) {
        if (x == "(" || x == "[" || x == "{" || x == "<") {
          // Push the element in the stack
          stack.push(x);
          continue;
        }
        if (stack.length == 0) st = false;
        let check;
        switch (x) {
          case ")":
            check = stack.pop();
            if (check == "{" || check == "[" || check == "<") st = false;
            break;
          case "}":
            check = stack.pop();
            if (check == "(" || check == "[" || check == "<") st = false;
            break;
          case "]":
            check = stack.pop();
            if (check == "(" || check == "{" || check == "<") st = false;
            break;
          case ">":
            check = stack.pop();
            if (check == "(" || check == "{" || check == "[") st = false;
            break;
        }
      }
    }

    if (stack.length == 0 && st) {
      lbl.innerHTML = "Valid Parenthesis!";
    } else {
      lbl.innerHTML = "Invalid Parenthesis!";
    }
    console.log(stack);
  };

  return (
    <>
      <h1>Enter the parenthesis string below!</h1>
      <form>
        <input type="text" id="txt" />
        <br />
        <button id="submit" value="Submit" onClick={validate}>
          Submit
        </button>
        <br />
        <label id="stat"></label>
      </form>
    </>
  );
}

export default App;
