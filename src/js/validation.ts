//TODO: refactor to avoid duplicate code
export function checkEmail() {
    let email = (<HTMLInputElement>document.getElementById("email"))
    let emailError = document.getElementById("email_error")

    const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")

    email.addEventListener('focusout', event => {
        event.preventDefault()
        if (emailRegex.test(email.value)) {
            emailError!.textContent = ""
            toggleSubmitDisabled(false)
        } else {
            emailError!.textContent = "Invalid Email!"
            toggleSubmitDisabled(true)
        }
    })
}

export function checkPhoneNumber() {
    let phoneNumber = (<HTMLInputElement>document.getElementById("phone_nr"))
    let phoneNumberError = document.getElementById("phone_nr_error")

    const phoneNumberRegex = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")

    phoneNumber.addEventListener('focusout', event => {
        event.preventDefault()
        if (phoneNumberRegex.test(phoneNumber.value)) {
            phoneNumberError!.textContent = ""
            toggleSubmitDisabled(false)
        } else {
            phoneNumberError!.textContent = "Invalid Phone Number!"
            toggleSubmitDisabled(true)
        }
    })
}

export function toggleSubmitDisabled(disabled: boolean) {
    let submitButton = (<HTMLInputElement>document.getElementById("submit_btn"))
    submitButton.disabled = disabled
}

export function login() {
    let submitButton = (<HTMLInputElement>document.getElementById("submit_btn"))
    if (submitButton) {
        submitButton.addEventListener('click', event => {
            event.preventDefault()
            location.href = "../html/home.html"
        })
    }
}

checkEmail()
checkPhoneNumber()
login()
