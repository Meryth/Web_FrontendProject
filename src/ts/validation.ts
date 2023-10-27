export class ValidationManager {
  isInputValid: boolean;

  constructor() {
    this.isInputValid = false;
  }

  checkInput(
    inputElement: HTMLInputElement,
    errorElement: HTMLElement,
    regex: RegExp,
    errorText: string,
  ) {
    inputElement.addEventListener('input', event => {
      event.preventDefault();
      if (regex.test(inputElement.value)) {
        errorElement!.textContent = '';
        this.isInputValid = true;
      } else {
        errorElement!.textContent = errorText;
        this.isInputValid = false;
      }
    });
    return this;
  }

  checkEmail() {
    const email = (<HTMLInputElement>document.getElementById('email'));
    const emailError = (<HTMLElement>document.getElementById('email_error'));
    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const errorText = 'Invalid Email!';

    this.checkInput(email, emailError, emailRegex, errorText);
    return this;
  }

  checkPhoneNumber() {
    const phoneNumber = (<HTMLInputElement>document.getElementById('phone_nr'));
    const phoneNumberError = (<HTMLElement>document.getElementById('phone_nr_error'));
    const phoneNumberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');
    const errorText = 'Invalid Phone number!';

    this.checkInput(phoneNumber, phoneNumberError, phoneNumberRegex, errorText);
    return this;
  }

  checkAllRequiredFieldsFilled() {
    const form = document.getElementById('login_form')!;
    const requiredFields = form.querySelectorAll('[required]') as NodeListOf<HTMLInputElement>;
    for (const field of requiredFields) {
      if (!field.value.trim()) {
        return false;
      }
    }
    return true;
  }

  setSubmitButtonState() {
    const form = document.getElementById('login_form')!;
    form.addEventListener('input', () => {
      if (this.isInputValid && this.checkAllRequiredFieldsFilled()) {
        toggleSubmitDisabled(false);
      } else {
        toggleSubmitDisabled(true);
      }
    });
    return;
  }
}


export function toggleSubmitDisabled(disabled: boolean) {
  const submitButton = (<HTMLInputElement>document.getElementById('submit_btn'));
  submitButton.disabled = disabled;
}

export function login() {
  const submitButton = (<HTMLInputElement>document.getElementById('submit_btn'));
  if (submitButton) {
    submitButton.addEventListener('click', event => {
      event.preventDefault();
      location.href = '../html/home.html';
    });
  }
}

const validationManager = new ValidationManager();

validationManager.checkEmail();
validationManager.checkPhoneNumber();
validationManager.setSubmitButtonState();
login();
