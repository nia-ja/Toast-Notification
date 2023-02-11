const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(type ? type : getRandomValues(types));
    toast.innerText = message ? message : getRandomValues(messages);
    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000 );
}

function getRandomValues(arr) {
   return arr[Math.floor(Math.random()*arr.length)];
}