import { FilmLista } from "./filmek.js";
import FilmMegjelenites from "./FilmMegjelenites.js";
import Gomb from "./Gomb.js";
import Kosar from "./Kosar.js";

const filmter = document.querySelector(".jatekter");
const kosarElem = document.querySelector('.kosarter');

const kosar = new Kosar(kosarElem); 

new FilmMegjelenites(FilmLista, filmter, kosar); 
new Gomb(FilmLista, filmter, kosar); 
