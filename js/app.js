import { Bear } from "./modules/types/bear.js";
import { Crow } from "./modules/types/crow.js";

document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();

    const name = document.querySelector('[name="name"]').value;
    const type = document.querySelector('[name="type"]').value;
    const con = document.querySelector('#container');
    if(type == 'Crow'){
        new Crow(name, con);
    }
    if(type == 'Bear'){
        new Bear(name, con);
    }
});
