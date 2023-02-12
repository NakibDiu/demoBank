document.getElementById("btnWithdraw").addEventListener("click", function () {
  const withdrawAmount = getFloatInputValueById("withdrawInput");
  if (isNaN(withdrawAmount)) {
    alert("Insert a valid amount");
    return;
  }
  const previousWithdraw = getTextValueById("withdrawValue");

  const newWithdrawAmount = previousWithdraw + withdrawAmount;

  const previousBalance = getTextValueById("totalValue");
  if(withdrawAmount > previousBalance) {
    alert("OOPS!! Insufficient Balance!!")
    return;
  }

  const newBalance = previousBalance - withdrawAmount;

  setValue("withdrawValue", newWithdrawAmount);
  setValue("totalValue", newBalance);
});
