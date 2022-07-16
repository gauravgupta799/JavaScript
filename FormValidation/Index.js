// console.log("Form Validation")
let username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();
let UsernameString;
let EmailString;
let PhoneString ;

// username validation
username.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    UsernameString = username.value
    if(regex.test(UsernameString)){
        // console.log("Your name is valid");
        username.classList.remove('is-invalid');
        validUser = true;
    }else{
        // console.log("Your name is not valid");
        username.classList.add('is-invalid');
        validUser = false;
    }
})

// Email Validation
email.addEventListener("blur", () => {
    console.log(" Email is blured");
    let regex = /^([_\.0-9a-zA-Z]+){3}@([-\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    EmailString = email.value;
    if(regex.test(EmailString)){
        // console.log("Your email is valid");
        email.classList.remove('is-valid');
        validEmail = true;
    }else{
        // console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }  
})

// Phone Validation
phone.addEventListener("blur", () => {
    // console.log("Phone is blured");
    let regex = /^([0-9]){10}$/;
    PhoneString = phone.value;
    if(regex.test(PhoneString)){
        // console.log("Your phone is matched");
        phone.classList.remove('is-invalid');
        validPhone = true;

    }else{
        // console.log("Your phone is not matched");
        phone.classList.add('is-invalid');
        validPhone = false;
     }
});

// Hide Alert
const hideAlert = () => {
    setTimeout(() => {
        $('#success').hide();
        $('#failure').hide();
    },2000);
}

// Form Submission
let failure = document.getElementById("failure");
let success = document.getElementById("success");
let submit = document.getElementById("submit");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(validUser && validEmail && validPhone){
        // console.log("Username, Email and Phone are valid. Submitting thr form.");
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show(); 
        hideAlert();
    }else{
        // console.log("One of Username, Email and Phone are not valid. Submitting thr form.");
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
        hideAlert();
    }
})
