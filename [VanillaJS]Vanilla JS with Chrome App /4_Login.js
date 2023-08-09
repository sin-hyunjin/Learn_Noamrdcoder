/*==============================
    # 4.0 Input Values
  ==============================*/

const loginForm = document.getElementById("login-form");
// document가 아닌 loginForm에서 바로 찾을수 있다.
const loginInput = loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   console.log(loginInput.value);
//   console.log("click!");
// }

// loginButton.addEventListener("click", onLoginBtnClick);

/*==============================
    # 4.1 Form Submission
  ==============================*/

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

/*==============================
    # 4.2 Events
  ==============================*/

const login42Form = document.querySelector("#login42-form");
const login42Input = document.querySelector("#login42-form input");

function onLogin42Submit(tomato) {
  tomato.preventDefault(); //어떤 행동이든 멈추도록하는기능
  console.log(login42Input.value);
}
login42Form.addEventListener("submit", onLogin42Submit);

/*==============================
    # 4.3 Events part Two
  ==============================*/
const link = document.querySelector("a");
//
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
}

link.addEventListener("click", handleLinkClick);
/*==============================
    # 4.4 Getting Username
  ==============================*/
/*==============================
    # 4.5 Saving Username
  ==============================*/
/*==============================
    # 4.6 Loading Username
  ==============================*/
/*==============================
    # 4.7 Super Recap
  ==============================*/
