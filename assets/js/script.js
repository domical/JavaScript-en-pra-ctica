// Validación del formulario de contacto
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const issueInput = document.getElementById('issue');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const issueError = document.getElementById('issue-error');
const messageError = document.getElementById('message-error');

const nameRegex = /^[a-zA-Z\s]+$/;
const issueRegex = /^[a-zA-Z]+$/;

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Validar nombre
  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'El nombre debe contener solo caracteres alfabéticos.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Validar issue
  if (!issueRegex.test(issueInput.value)) {
    issueError.textContent = 'Ingrese un issue válido.';
    isValid = false;
  } else {
    issueError.textContent = '';
  }

  // Validar mensaje
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'El mensaje no puede estar vacío.';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  if (isValid) {
    alert('Formulario enviado correctamente.');
    contactForm.reset();
  }
});

// Selector de colores
function changeColor(hexColor) {
    const colorDisplay = document.getElementById('color-display');
    colorDisplay.style.backgroundColor = hexColor;
    colorDisplay.textContent = hexColor;
  }

// Calculadora
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result-display');

calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      if (result < 0) {
        result = 0;
      }
      break;
    default:
      result = 'Error';
  }

  resultDisplay.textContent = result;
});