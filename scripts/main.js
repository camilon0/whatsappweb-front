const userRaw = localStorage.getItem("user");
let message = document.getElementById("message");

//let formulario = document.getElementById("formulario");
let textbox = document.getElementById("textbox");
let send = document.getElementById("send");
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let time = hours + ":" + minutes;

let user;

const validationSession = () => {
  if (!userRaw) {
    location.href = "http://127.0.0.1:5501/index.html";
  } else {
    user = JSON.parse(userRaw);
  }
};

validationSession();

const handleCloseSession = () => {
  localStorage.clear();
  location.href = "http://127.0.0.1:5501/index.html";
};

const btnCloseSession = document.getElementById("btnCloseSession");

btnCloseSession.addEventListener("click", handleCloseSession);

const textUserName = document.getElementById("nameUser");

textUserName.innerHTML += ` ${user.name}`;
//-----------------------------------
send.addEventListener("click", () => {
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<div class="message my_message">
            <ul>
              <li>
                <style>
                  li {
                    list-style: none;
                  }
                </style>
                ${textbox.value}<br/>
                <span>${time}</span>
              </li>
            </ul>
          </div>`;
  message.appendChild(newMessage);

  textbox.value = "";
});
