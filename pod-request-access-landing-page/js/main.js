document.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submit');
    const errorMessage = document.getElementById('input-error');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        validateEmail();
    })

    emailInput.addEventListener('blur', () => {
        errorMessage.classList.add('hidden');
    })

    function validateEmail() {
        const input = emailInput.value.trim();
        const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (input === '') {
            showErrorMessage('Oops! Please add your email');
        } else if (!validRegex.test(input)) {
            showErrorMessage('Oops! Please check your email');
        } else {
            errorMessage.classList.add('hidden');
            // do something with valid input
            console.log("valid input");
        }
    }

    function showErrorMessage(message) {
        errorMessage.innerText = message;
        errorMessage.classList.remove('hidden');
    }
});
