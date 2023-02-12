document.getElementById("btnDeposit").addEventListener("click", function() {
    const depositAmount = getFloatInputValueById("depositInput")
    if(isNaN(depositAmount)) {
        alert("Insert a valid amount")
        return;
    } else if (depositAmount <= 0) {
        alert("Negative Value Can't be Deposited")
        return;
    }
    const previousDeposit = getTextValueById("depositValue")
    const newDepositAmount = depositAmount + previousDeposit;
    setValue("depositValue", newDepositAmount);

    // total balance
    const previousBalance = getTextValueById('totalValue')
    const newBalance = previousBalance + depositAmount;
    setValue("totalValue", newBalance);
})