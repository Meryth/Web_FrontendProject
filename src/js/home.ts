//API doc: https://api.chucknorris.io/
export class JokeManager {
    joke: string

    constructor() {
        this.joke = ""
    }

    async getRandomJoke() {
        try {
            let response = await fetch("https://api.chucknorris.io/jokes/random")
            const joke = document.getElementById("joke")

            if (!response.ok) {
                throw new Error("Error: " + response.status)
            }

            let data = await response.json()
            this.joke = data.value
            joke!.textContent = this.joke

            return this
        } catch (e) {
            console.log(e)
        }
    }

    favoriteJoke() {
        const favTable = (<HTMLTableElement>document.getElementById("fav_table"))

        let row = favTable.insertRow(-1)

        let c1 = row.insertCell(0)
        let c2 = row.insertCell(1)

        c1.textContent = "#" + row.rowIndex
        c2.textContent = this.joke
        return this
    }

    addJokeToFavs() {
        const btnFav = document.getElementById("btn_fav")

        if (btnFav) {
            btnFav.addEventListener('click', () => {
                let table = (<HTMLTableElement>document.getElementById("fav_table"))
                let isJokeFavorited = this.checkJokeAlreadyFavorited(table)

                if (!isJokeFavorited) {
                    this.favoriteJoke()
                }
            })
        }

        return this
    }

    getNewJoke() {
        const generateJokeButton = document.getElementById("generate_joke_btn")
        generateJokeButton!.addEventListener('click', async event => {
            event.preventDefault()
            await this.getRandomJoke()
        })

        return this
    }

    checkJokeAlreadyFavorited(table: HTMLTableElement) {
        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                if (table.rows[i].cells[j].textContent === this.joke) {
                    return true
                }
            }
        }
        return false;
    }
}

const jokeManager = new JokeManager()

void jokeManager.getRandomJoke()
jokeManager.addJokeToFavs()
jokeManager.getNewJoke()