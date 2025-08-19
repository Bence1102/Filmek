import FilmMegjelenites from "./FilmMegjelenites.js";
export default class Gomb {
    #lista = [];
    szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.#kezdolap();
        this.#kedvencgomb();
        this.#kosarGomb();
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
    #kosarGomb() {
        const kosarGomb = document.querySelector('.kosar');
        kosarGomb.addEventListener('click', () => {
            const kosarfilm = this.#lista.filter(film => film.kosar === true);
            new FilmMegjelenites(kosarfilm, this.szuloElem);
        });
    }
}