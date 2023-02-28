import { Tamagotchi } from "../tamagotchi.js";

class Bear extends Tamagotchi {
    #container;
    #name;
    constructor(name, container) {
        super();
        this.#name = name;
        this.#container = container;
        this.createGUI();
    }

    Name() {
        return this.#name;
    }

    createGUI() {
        const element = document.createElement('div');
        element.classList.add('brown')
        this.#container.append(element);
        const name = document.createElement('h1');
        const hunger = document.createElement('h1');
        hunger.innerText = 'Hunger : ';
        const huCounter = document.createElement('p');
        huCounter.style.display = 'inline';
        const happiness = document.createElement('h1');
        happiness.innerText = 'Happiness : ';
        const haCounter = document.createElement('p');
        haCounter.style.display = 'inline';
        const feed = document.createElement('button');
        feed.innerText = 'feed';
        const play = document.createElement('button');
        play.innerText = 'play';
        element.append(name, hunger, happiness, feed, play);
        hunger.append(huCounter);
        happiness.append(haCounter);
        super.start(element, huCounter, haCounter, name, this.#name, 'Bear', feed, play);
    }

}

export { Bear };
