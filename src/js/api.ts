//API doc: https://api.chucknorris.io/
export async function getRandomJoke() {
    try {
        let response = await fetch("https://api.chucknorris.io/jokes/random")
        const joke = document.getElementById("joke")

        if (!response.ok) {
            throw new Error("Error: " + response.status)
        }

        let data = await response.json()
        joke!.textContent = data.value

    } catch (e) {
        console.log(e)
    }
}

export function getNewJoke() {
    const generateJokeButton = document.getElementById("generate_joke_btn")
    generateJokeButton!.addEventListener('click', event => {
        event.preventDefault()
        void getRandomJoke()
    })
}

void getRandomJoke()
getNewJoke()