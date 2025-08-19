import { FilmLista } from "./filmek.js";
import FilmMegjelenites from "./FilmMegjelenites.js";

const filmter= document.querySelector(".jatekter");
new FilmMegjelenites(FilmLista, filmter);