export function checkUsername() {
    let username = (<HTMLInputElement>document.getElementById("username")).value;

    if (username?.includes("/")) {
        let errorMessage = 'Username must not contain "/"!';
        const p = document.createElement("p");
        const usernameError = document.getElementById("username_error");
        p.textContent = errorMessage;
        usernameError?.appendChild(p);
    }
}

document.getElementById("submit_btn")?.addEventListener("click", () => checkUsername())
