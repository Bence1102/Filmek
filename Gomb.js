import FilmMegjelenites from "./FilmMegjelenites.js";
export default class Gomb {
    #lista = [];
    szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.#kezdolap();
        this.#kedvencgomb();
    }


    #kedvencgomb() {
        const kedvencGomb = document.querySelector('.kedvencek');
        kedvencGomb.addEventListener('click', () => {
                const kedvencfilm= this.#lista.filter(film => film.kedvenc === true);
                new FilmMegjelenites(kedvencfilm,this.szuloElem);
        });
    }


    #kezdolap() {
        const kezdolapGomb = document.querySelector('.fooldal');
            kezdolapGomb.addEventListener('click', () => {
            new FilmMegjelenites(this.#lista, this.szuloElem);
            });
    }
}