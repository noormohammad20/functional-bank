document.getElementById('double-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');

    const inputFieldText = inputField.value

    const inputFieldNumber = parseFloat(inputFieldText)

    if (inputFieldNumber > 0) {
        const multiply = inputFieldNumber * 2;
        console.log(multiply);
    }
    else {
        alert('please enter a number')
    }
})
document.getElementById('triple-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');

    const inputFieldText = inputField.value

    const inputFieldNumber = parseFloat(inputFieldText)
    if (inputFieldNumber > 0) {
        const multiply = inputFieldNumber * 3;
        console.log(multiply);
    }
    else {
        alert('please enter a number')
    }
})