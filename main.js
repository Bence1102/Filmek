import { FilmLista } from "./filmek.js";
import FilmMegjelenites from "./FilmMegjelenites.js";
import Gomb from "./Gomb.js";

const filmter= document.querySelector(".jatekter");
new FilmMegjelenites(FilmLista, filmter);

new Gomb(FilmLista, filmter);