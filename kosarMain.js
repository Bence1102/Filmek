import { kosarlista } from "./main.js";
import Kosar from "./Kosar.js";

const kosarElem = document.querySelector(".kosarter");
new Kosar(kosarlista, kosarElem);