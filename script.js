const message = document.getElementById("message");
const email = document.getElementById("email");
const sb = document.getElementById("SB");

function submitted() {

message.style.borderBottom = "3px solid limegreen";
message.disabled = true;

email.style.borderBottom = "3px solid limegreen";
email.disabled = true;

sb.style.backgroundColor = "lime";
sb.textContent = "Sent";
}
