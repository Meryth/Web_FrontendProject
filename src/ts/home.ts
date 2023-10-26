//API doc: https://api.chucknorris.io/
export class JokeManager {
  joke: string;

  constructor() {
    this.joke = '';
  }

  async getRandomJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const joke = document.getElementById('joke');

      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }

      const data = await response.json();
      this.joke = data.value;
      joke!.textContent = this.joke;

      return this;
    } catch (e) {
      console.log(e);
    }
  }

  favoriteJoke() {
    const favTable = (<HTMLTableElement>document.getElementById('fav_table'));

    const row = favTable.insertRow(-1);

    const c1 = row.insertCell(0);
    const c2 = row.insertCell(1);

    const removeJokeButton = document.createElement('button');
    removeJokeButton.id = 'btn_remove_joke';
    removeJokeButton.textContent = 'REMOVE';

    removeJokeButton.addEventListener('click', () => {
      const selectedRow = removeJokeButton.closest('tr');
      if (selectedRow) {
        selectedRow.remove();
      }
    });

    c1.appendChild(removeJokeButton);
    c2.textContent = this.joke;
    return this;
  }

  addJokeToFavs() {
    const btnFav = document.getElementById('btn_fav');

    if (btnFav) {
      btnFav.addEventListener('click', () => {
        const table = (<HTMLTableElement>document.getElementById('fav_table'));
        const isJokeFavorited = this.checkJokeAlreadyFavorited(table);

        if (!isJokeFavorited) {
          this.favoriteJoke();
        }
      });
    }

    return this;
  }

  getNewJoke() {
    const generateJokeButton = document.getElementById('generate_joke_btn');
    generateJokeButton!.addEventListener('click', async event => {
      event.preventDefault();
      await this.getRandomJoke();
    });

    return this;
  }

  checkJokeAlreadyFavorited(table: HTMLTableElement) {
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].textContent === this.joke) {
          return true;
        }
      }
    }
    return false;
  }
}

const jokeManager = new JokeManager();

void jokeManager.getRandomJoke();
jokeManager.addJokeToFavs();
jokeManager.getNewJoke();