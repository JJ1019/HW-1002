var generateBtn = ["#generate"];
var passwordText = ["#password"];

function getPasswordCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

function passwordGenerator(num) {
    var password = '';
    for (var i = 0; i < num; i++) {
      password += getPasswordCharacter();
    }
    return password;
}

generateBtn.click( function () {
   var newPassword = passwordGenerator(12);
   passwordText.text(newPassword);
});

