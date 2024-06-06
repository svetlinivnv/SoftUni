//working solution:
function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
        console.log(e.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector("#submit").addEventListener("click", (e) => {
        let validOut = [];
        let userName = document.querySelector("#username");
        let email = document.querySelector("#email");
        let passWord = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");
        let userTest = /^[A-Za-z0-9]{3,20}$/;
        let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/;

        if (userTest.exec(userName.value) === null) {
            userName.style.borderColor = "red";
            validOut.push(false);
        } else {
            userName.style.borderColor = "";
            validOut.push(true);
        }

        if (emailTest.exec(email.value) === null) {
            email.style.borderColor = "red";
            validOut.push(false);
        } else {
            email.style.borderColor = "";
            validOut.push(true);
        }

        if (
            passWord.value === confirmPass.value &&
            passTest.exec(confirmPass.value) != null &&
            passTest.exec(passWord.value) != null
        ) {
            confirmPass.style.borderColor = "";
            passWord.style.borderColor = "";
            validOut.push(true);
        } else {
            confirmPass.style.borderColor = "red";
            passWord.style.borderColor = "red";
            validOut.push(false);
        }

        if (checkBox.checked) {
            let company = document.querySelector("#companyNumber");
            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                validOut.push(false);
            } else {
                company.style.borderColor = "";
                validOut.push(true);
            }
        }

        if (!validOut.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}


// 77/100 (to be checked and fixed later)
// function validate() {
//     const username = document.querySelector('#username');
//     const email = document.querySelector('#email');
//     const password = document.querySelector('#password');
//     const confirmPassword = document.querySelector('#confirm-password');
//     const isCompany = document.querySelector('#company');
//     const companyInfo = document.querySelector('#companyInfo');
//     const companyNumber = document.querySelector('#companyNumber');
//     const submit = document.querySelector('#submit');
//     const valid = document.querySelector('#valid');

//     const validUsername = /^[a-zA-Z0-9]{3,20}$/;
//     const validPassword = /^[\w]{5,15}$/;
//     const validEmail = /^[^@.]+@[^@]*\.[^@]*$/;
//     const validCompanyNumber = /^(?:[1-9]\d{0,3}|9999)$/;

//     function setBorderColor(input, isValid) {
//         if (!isValid) {
//             input.style.borderColor = 'red';
//             } else {
//             input.style.borderColor = 'initial';
//             input.style.border = 'none';
//         }
//     }

//     function checkValidity() {
//         let isFormValid = true;

//         const isUsernameValid = validUsername.test(username.value);
//         setBorderColor(username, isUsernameValid);
//         isFormValid = isFormValid && isUsernameValid;

//         const isEmailValid = validEmail.test(email.value);
//         setBorderColor(email, isEmailValid);
//         isFormValid = isFormValid && isEmailValid;

//         const isPasswordValid = validPassword.test(password.value);
//         setBorderColor(password, isPasswordValid);
//         isFormValid = isFormValid && isPasswordValid;

//         const isConfirmPasswordValid = confirmPassword.value === password.value;
//         setBorderColor(confirmPassword, isConfirmPasswordValid);
//         isFormValid = isFormValid && isConfirmPasswordValid;

//         if (isCompany.checked) {
//             companyInfo.style.display = 'block';
//             const isCompanyNumberValid = validCompanyNumber.test(companyNumber.value);
//             setBorderColor(companyNumber, isCompanyNumberValid);
//             isFormValid = isFormValid && isCompanyNumberValid;
//         } else {
//             companyInfo.style.display = 'none';
//         }

//         valid.style.display = isFormValid ? 'block' : 'none';
//         console.log(isFormValid);
//     }

//     isCompany.addEventListener('change', () => {
//         if (isCompany.checked) {
//             companyInfo.style.display = 'block';
//         } else {
//             companyInfo.style.display = 'none';
//         }
//     });

//     submit.addEventListener('click', (event) => {
//         event.preventDefault();
//         checkValidity();
//     });
// }