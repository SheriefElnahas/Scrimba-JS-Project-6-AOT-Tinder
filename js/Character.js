import  characters from "./data.js";

const cardName = document.querySelector('.card-name');
const cardImg  = document.querySelector('.card-img');

const [ erenObj , zekeObj , leviObj, reinerObj] = characters;


class Characters {
    constructor(data) {
        Object.assign(this,data);
    }

    renderHtml() {
        const {name, avatar, color} = this;
        cardName.textContent = name;
        cardName.style.color = color;

        cardImg.src = avatar;

    }
    
}

const eren = new Characters(erenObj);
const zeke = new Characters(zekeObj);
const levi = new Characters(leviObj);
const reiner = new Characters(reinerObj);

const charactersArray = [eren, zeke , levi , reiner];

export default charactersArray;