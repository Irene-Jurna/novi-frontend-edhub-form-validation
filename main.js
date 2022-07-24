function handleInputChange(e) {
    const currentValue = e.target.value;
    const currentInput = e.target.name;
    console.log(`In het ${currentInput}-veld is ingevuld: ${currentValue}`);
    console.log(e.keyCode);
}

const usernameInputField = document.getElementById('username-field');

usernameInputField.addEventListener('keyup', handleInputChange);

const passwordInputField = document.getElementById('password-field');

passwordInputField.addEventListener('keyup', handleInputChange);