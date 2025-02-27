function validateForm() 
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var submitBtn = document.getElementById('submit-btn');

    var emailValid = validateEmail(email);
    var passwordValid = validatePassword(password);
    var confirmPasswordValid = (confirmPassword === password && passwordValid);

    updateField('email', emailValid, "email-msg", "Invalid Email", "Valid Email");
    updateField('confirm-password', confirmPasswordValid, "confirm-msg", "Passwords do not match", "Passwords match");
    
    console.log("Email Valid:", emailValid);
    console.log("Password Valid:", passwordValid);
    console.log("Confirm Password Valid:", confirmPasswordValid);

    document.getElementById('password-msg').innerHTML = "";
    document.getElementById('password').classList.remove('is-valid', 'is-invalid');

    submitBtn.disabled = !(emailValid && passwordValid && confirmPasswordValid);
}

function validateEmail(email) 
{
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) 
{
    var lowerCase = /[a-z]/.test(password);
    var upperCase = /[A-Z]/.test(password);
    var digit = /[0-9]/.test(password);
    var specialChar = /[\W_]/.test(password);
    return password.length >= 8 && lowerCase && upperCase && digit && specialChar;
}

function updateField(fieldId, isValid, messageId, invalidMsg, validMsg) 
{
    var field = document.getElementById(fieldId);
    var message = document.getElementById(messageId);
    
    if (isValid) 
    {
        message.classList.remove('err');
        message.classList.add('p11');
        message.innerHTML = validMsg;
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } 
    else if (field.value.length > 0) 
    {  
        message.classList.remove('p11');
        message.classList.add('err');
        message.innerHTML = invalidMsg;
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    } 
    else 
    {  
        message.classList.remove('err', 'p11');
        message.innerHTML = "";
        field.classList.remove('is-valid', 'is-invalid');
    }
}

function validatePasswordOnBlur() 
{
    var password = document.getElementById('password').value;
    var passwordValid = validatePassword(password);
    
    updateField('password', passwordValid, "password-msg", 
        "Password must be 8+ chars with 1 LC, 1 UC, 1 Num, 1 Special", 
        "Valid Password");
}

function submitForm() 
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    var emailValid = validateEmail(email);
    var passwordValid = validatePassword(password);
    var confirmPasswordValid = (confirmPassword === password && passwordValid);

    updateField('email', emailValid, "email-msg", "Invalid Email", "Valid Email");
    updateField('password', passwordValid, "password-msg", 
        "Password must be 8+ chars with 1 LC, 1 UC, 1 Num, 1 Special", 
        "Valid Password");
    updateField('confirm-password', confirmPasswordValid, "confirm-msg", 
        "Passwords do not match", "Passwords match");

    if (emailValid && passwordValid && confirmPasswordValid) 
    {
        alert("Form submitted successfully!");
    }
}

function resetForm() 
{
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirm-password').value = "";

    document.getElementById('email-msg').innerHTML = "";
    document.getElementById('password-msg').innerHTML = "";
    document.getElementById('confirm-msg').innerHTML = "";

    document.getElementById('email').classList.remove('is-valid', 'is-invalid');
    document.getElementById('password').classList.remove('is-valid', 'is-invalid');
    document.getElementById('confirm-password').classList.remove('is-valid', 'is-invalid');

    document.getElementById('submit-btn').disabled = true;
}