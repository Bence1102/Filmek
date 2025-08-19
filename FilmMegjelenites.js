export default class FilmMegjelenites{
    #lista = [];
    szuloElem;
    constructor(lista,szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.megjelenites();
    }

    megjelenites(){
        this.szuloElem.innerHTML = '';
        this.#lista.forEach(film => {
        this.szuloElem.innerHTML +=`
                <div class="filmek">
                    <h2>${film.cim}</h2>
                    <img src="${film.kep}" alt="${film.cim}">
                    <p class="leiras">${film.leiras}</p>
                    <p class="jellemzok">
                        ${film.jellemzok}
                    </p>
                    <p class="ara">${film.ar}</p>
                    <p class="kateg">Kategória: ${film.kategoria}</p>
                    <a href="${film.link}" target="_blank">IMDb Link</a>
                    <button class ="kedvencgomb">${film.kedvenc ? "Kedvenc" : "Nem kedvenc"}</button>
                </div>
            `;
        });
        this.#lista.forEach((film, index) => {
            const gomb = this.szuloElem.querySelectorAll('.kedvencgomb')[index];
            gomb.addEventListener('click', () => {
                film.kedvenc = !film.kedvenc;
                this.megjelenites();
            });
        });
    }
}