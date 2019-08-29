const bc = new BroadcastChannel("test-channel");
const buttonEl = document.getElementById("send-btn");
const inputEl = document.getElementById("message");
const listEl = document.getElementById("messages-list");

bc.onmessage = event => {
  const messageEl = document.createElement("li");
  messageEl.innerText = event.data;
  listEl.appendChild(messageEl);
};

buttonEl.addEventListener("click", e => {
  const { value } = inputEl;
  bc.postMessage(value);
  inputEl.value = "";
});
