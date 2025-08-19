export default class Kosar {
    #kosarlista = []; 
    szuloElem;

    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.megjelenites();
    }

    addFilm(film) {
        this.#kosarlista.push(film);
        this.megjelenites();
    }

    megjelenites() {
        this.szuloElem.innerHTML = '<h3>Kosarad:</h3>';
        this.#kosarlista.forEach(film => {
            const div = document.createElement('div');
            div.textContent = `${film.cim} - ${film.ar}`;
            this.szuloElem.appendChild(div);
        });
    }
}
