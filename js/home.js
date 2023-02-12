document.getElementById("btnLogin").addEventListener('click', function () {
    const email = getInputValueById("userEmail")
    const password = getInputValueById("userPassword")
    
    if (email === "abc@gmail.com" && password === "1234") {
        document.location.href = "bank.html"
    } else {
        alert("Invalid Credentials")
    }
})