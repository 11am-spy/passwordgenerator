function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,<>/?=+-_)(*&^%$#@!";
    let password = "";
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* chars.length);
        password += chars[randomIndex];
    }
    return password;
}

const myButton = document.getElementById("myButton");
const lengthSelect = document.getElementById("lengthSelect");
const result = document.getElementById("result");
const btnDm = document.getElementById("btnDm")
const copyBtn = document.getElementById("copyBtn")

myButton.onclick = function(){
    const length = parseInt(lengthSelect.value);
    const password = generatePassword(length);
    result.textContent = password;
    copyBtn. textContent = "Salin"
    copyBtn.disabled = false;
}

btnDm.onclick = function (){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        btnDm.textContent = "☀️ Light Mode";
    } else {
        btnDm.textContent = "🌙 Dark Mode";
    }
}
copyBtn.onclick = function(){
    navigator.clipboard.writeText(result.textContent);
        copyBtn.textContent = "Tersalin"
        copyBtn.disabled = true;
    }