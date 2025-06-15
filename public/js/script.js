const messagesDiv = document.getElementById("messages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const playersDiv = document.getElementById("players");

let currentPlayer = players[0]; // ברירת מחדל

// function renderPlayers() {
//   playersDiv.innerHTML = '';
//   players.forEach(player => {
//     const div = document.createElement('div');
//     div.classList.add('player');
//     if (player.reputation < 3) {
//       div.classList.add('low-reputation');
//     }
//     div.innerText = `${player.name} - מוניטין: ${player.reputation}`;
//     playersDiv.appendChild(div);
//   });
// }

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.innerHTML = `
    <strong>${currentPlayer.name}:</strong> ${text}
    <button class="report-btn">דווח</button>
  `;

  // דיווח
  const reportBtn = messageDiv.querySelector(".report-btn");
  reportBtn.addEventListener("click", () => {
    if (isOffensive(text)) {
      alert("תגובה פוגענית! מורידים מוניטין לשחקן.");
            window.location.href = 'report.html';
      currentPlayer.reputation--;
      renderPlayers();
    } else {
      alert(" התגובה לא פוגענית לפי הבדיקה, תוכל לדווח בכל זאת.");
            window.location.href = 'report.html';
    }
  });

  messagesDiv.appendChild(messageDiv);
  chatInput.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}



// sendBtn.addEventListener("click", sendMessage);

// renderPlayers();







//sign up js
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









//log in js
let timesClicked = 0;

function toggleLogin() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("hidden");
}

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













//header js
function header(){
  document.addEventListener("DOMContentLoaded", () => {
    const headerPlace = document.getElementById("headerplace");

     fetch('./project/header.html')
      .then(response => response.text())
      .then(data => {
        if (headerPlace) {
          headerPlace.innerHTML = data;
        }
        const nav = document.getElementById("main-nav");
        const loggedIn = localStorage.getItem("loggedIn");

       
      });

      
  });
}




header()    

  





//nav bar js
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const loggedIn = localStorage.getItem("loggedIn");
  
    if (nav) {
      if (loggedIn === "true") {
        nav.innerHTML = `
          <a href="#">בית</a>
          <a href="./project/game.html" >🎮המשחק </a>
          <a href="./project/profile.html">פרופיל שחקן</a>
          <a href="#" onclick="logoutUser()">התנתק</a>
        `;
      } else {
        nav.innerHTML = `
          <a href="#">בית</a>
          <a href="./game.html"> 🎮המשחק</a>
          <a href="./about.html">אודות</a>
          <a href="./project/log-in page.html">התחברות</a>
          <a href="./project/Sign-Up_Page.html">הרשמה</a>
          <a href="./project/Contactandhelp.html">צור קשר</a>

        `;
      }
    }
  });
  