
let players = JSON.parse(localStorage.getItem("players")) || [
  { id: 1, name: "שחקן1", password: "password1", reputation: 10 },
  { id: 2, name: "שחקן2", password: "password2", reputation: 0 },
  { id: 3, name: "שחקן3", password: "password3", reputation: 10 },
];

let inputarea = document.getElementById("inputarea");
let inputarea1 = document.getElementById("inputarea1");
let cnfrmbtn = document.getElementById("cnfrmbtn");
let AddToPlayerBaseBtn = document.getElementById("AddToPlayerBaseBtn");

AddToPlayerBaseBtn.disabled = true;

let username;
let password1;

function Registration() {
  username = inputarea.value.trim();
  password1 = inputarea1.value.trim();
  
  if (username && password1) {
    AddToPlayerBaseBtn.disabled = false;
  } else {
    AddToPlayerBaseBtn.disabled = true;
  }
}

cnfrmbtn.addEventListener("click", Registration);

function AddToPlayerBase(username, password1) {

  const IdUser = players.length ? players[players.length - 1].id + 1 : 1;

  const newPlayer = { id: IdUser, name: username, password: password1, reputation: 10 };
  players.push(newPlayer);


  localStorage.setItem("players", JSON.stringify(players));


  localStorage.setItem("UserInfo", JSON.stringify(newPlayer));

  console.log("New player added:", newPlayer);
  console.log("All players:", players);


  AddToPlayerBaseBtn.disabled = true;


  inputarea.value = "";
  inputarea1.value = "";
}

AddToPlayerBaseBtn.addEventListener("click", () => AddToPlayerBase(username, password1));






let timesClicked = 0;


function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const captcha = document.getElementById("captcha");
  const captchaContainer = document.getElementById("captcha-container");
  const message = document.getElementById("message");

  const players = JSON.parse(localStorage.getItem("players")) || [];

  if (captchaContainer.style.display === "block" && !captcha.checked) {
    message.textContent = "Please confirm you are not a robot.";
    return;
  }

  const userFound = players.some(player => 
    player.name === username && player.password === password
  );

  if (userFound) {
    loggedIn = "true"
    message.style.color = "green";
    message.textContent = "Login successful!";
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", username);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1000);
  } else {
    timesClicked++;
    message.style.color = "#d9534f";
    message.textContent = "Invalid username or password.";
    if (timesClicked >= 2) {
      captchaContainer.style.display = "block";
    }
  }
}

const example =JSON.parse( localStorage.getItem("UserInfo"));

console.log(example)
