function handleInputChange(e) {
    const currentValue = e.target.value;
    const currentInput = e.target.name;
    console.log(`In het ${currentInput}-veld is ingevuld: ${currentValue}`);
    console.log(e.keyCode);

    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten.';
    } else {
        usernameWarning.textContent = '';
    }
}

const usernameInputField = document.getElementById('username-field');
const usernameWarning = document.getElementById('warning-message-username');
usernameInputField.addEventListener('keyup', handleInputChange);

function handleInputLength(e) {
    const currentValue = e.target.value;
    const currentInput = e.target.name;
    console.log(`In het ${currentInput}-veld is ingevuld: ${currentValue}`);
    console.log(e.keyCode);

    if (e.target.value.length > 6 || e.target.value.length === 0) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = 'Je wachtwoord moet langer zijn dan 6 tekens.';
    }
}

const passwordInputField = document.getElementById('password-field');
const passwordWarning = document.getElementById('warning-message-password');

passwordInputField.addEventListener('keyup', handleInputLength);




