const passwordBox = document.getElementById("password");
const length = 12;

/*parts of password*/
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrutuvwxyz";
const numbers = "1234567890";
const symbols ="@#$%^&*()";

const allChars = upperCase + lowerCase + numbers + symbols;

/*generate Password*/
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    /*length control*/
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;

}

/*copy Password*/
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
