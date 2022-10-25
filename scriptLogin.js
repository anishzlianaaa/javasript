function login() {

    var myInput = document.getElementById("pass");

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

    if (!myInput.value.match(lowerCaseLetters)) {
        alert('Sorry, your password must contain lower case');
    }
    else if (!myInput.value.match(upperCaseLetters)) {
        alert('Sorry, your password must contain upper case');
    }
    else if (!myInput.value.match(numbers)) {
        alert('Sorry, your password must contain number');
    }
    else if (myInput.value.length < 12) {
        alert('Sorry, your password less than 12. Please insert again');
    }
    else if (!isContainsSymbol.test(myInput.value)) {
        alert('Sorry, your password must contain at least one Special Symbol');
    }
    else {
        alert('Welcome, Thank You For Login');
    }

}
