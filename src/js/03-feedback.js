import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input');

formEl.addEventListener('submit', onFormSubmit);
// textareaEl.addEventListener('input', throttle(onTextareaInput, 500));
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  // console.log(formData)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextArea();

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  const data = {
    email: `${email.value}`,
    message: `${message.value}`,
  };
  console.log(data);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// function onTextareaInput(e) {
// const massage = e.target.value;
//  console.log(massage)

// localStorage.setItem(STORAGE_KEY, massage);}

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedAndParseMessage = JSON.parse(savedMessage);

  inputEl.value = savedAndParseMessage.email;
  textareaEl.value = savedAndParseMessage.message;
}
