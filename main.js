import { FilmLista } from "./filmek.js";
import FilmMegjelenites from "./FilmMegjelenites.js";
import Gomb from "./Gomb.js";

const filmter= document.querySelector(".jatekter");

export const kosarlista = [];

new FilmMegjelenites(FilmLista, filmter, kosarlista);
new Gomb(FilmLista, filmter);
