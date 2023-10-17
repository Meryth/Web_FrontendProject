export function checkUsername() {
    let username = (<HTMLInputElement>document.getElementById("username")).value;

    if (username?.includes("/")) {
        let errorMessage = 'Username must not contain "/"!';
        const usernameError = document.getElementById("username_error");
        usernameError!.textContent = errorMessage;
    }
}

document.getElementById("submit_btn")?.addEventListener("click", () => checkUsername())
