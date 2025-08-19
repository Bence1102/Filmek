export default class Kosar {
    #lista = [];
    szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.megjelenites();
    }

    megjelenites(){
        this.szuloElem.innerHTML = "<h2>Kosár tartalma:</h2>";
        if (this.#lista.length === 0) {
            this.szuloElem.innerHTML += "<p>A kosár üres.</p>";
            return;
        }

        this.#lista.forEach(film => {
            this.szuloElem.innerHTML += `
                <div class="kosar-tartalom">
                    <h3>${film.cim}</h3>
                    <p>${film.ar}</p>
                </div>
            `;
        });
    }
}