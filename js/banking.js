function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value
    const amountValue = parseFloat(inputAmountText)
    //clear input field
    inputField.value = '';
    return amountValue

}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input')

    //get current deposit
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    const PreviousDepositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = depositAmount + PreviousDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input')

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const PreviousWithdrawTotalText = withdrawTotal.innerText;
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalText);


    withdrawTotal.innerText = PreviousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

});