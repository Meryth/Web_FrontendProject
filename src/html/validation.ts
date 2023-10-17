export function checkUsername() {
    let username = (<HTMLInputElement>document.getElementById("username"));
    let usernameError = document.getElementById("username_error");
    username.addEventListener('input', event => {
        event.preventDefault()
        if (username.value.includes('/')) {
            usernameError!.textContent = 'Username must not contain "/"!';
        } else {
            usernameError!.textContent = '';
        }
    })
}

document.getElementById("submit_btn")?.addEventListener("click", () => checkUsername())
