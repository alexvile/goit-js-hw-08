import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector("[name=email]");
const feedbackInput = document.querySelector("[name=message]");

const STORAGE_KEY = "feedback-form-state";


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));



populateTextArea();


function onFormInput(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);

    const emailValue = emailInput.value;
    const feedbackValue = feedbackInput.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: emailValue, message: feedbackValue}))
 };



function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    localStorage.removeItem(STORAGE_KEY);
    alert("Feedback has been sent");
};

 
function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    if (savedMessage) {
        emailInput.value = parsedMessage.email;
        feedbackInput.value = parsedMessage.message;
    }
}

