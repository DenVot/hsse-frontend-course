const txtInputs = document.querySelectorAll(".txt-input-group input");
const senderForm = document.getElementById("send-me-message");
const nameInput = document.getElementById("sender-name");
const emailInput = document.getElementById("sender-email");
const msgTextArea = document.getElementById("sender-message-text");

senderForm.addEventListener("submit", onFormSubmit);

for (let txtInput of txtInputs.values()) {
    txtInput.addEventListener("focusin", onInputFocus);
    txtInput.addEventListener("focusout", onInputUnfocus);
}

function onInputFocus(e) {
    const labelEl = e.target.parentNode.querySelector("label");

    labelEl.className = "focused-label";
}

function onInputUnfocus(e) {
    const labelEl = e.target.parentNode.querySelector("label");

    if (e.target.value === "") {
        labelEl.className = "";
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    alert(`Имя: ${nameInput.value}\nEmail: ${emailInput.value}\nСообщение: ${msgTextArea.value}`);
}
