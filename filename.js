function selectForm (event) {
   const emailInput = document.getElementById("email")
   const emailValue = emailInput.value

    alert(emailValue)
}

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", selectForm);
}