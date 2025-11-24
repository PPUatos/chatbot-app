const chatbox = document.getElementById("chatbox");
const chatToggle = document.getElementById("chat-toggle");
const closeChat = document.getElementById("close-chat");

chatToggle.addEventListener("click", () => {
  chatbox.style.display = "flex";
  chatToggle.style.display = "none";
});

closeChat.addEventListener("click", () => {
  chatbox.style.display = "none";
  chatToggle.style.display = "flex";
});
