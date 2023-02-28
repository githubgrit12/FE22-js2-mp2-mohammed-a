class Tamagotchi {
  #maxCount;
  #haCount;
  #huCount;
  #haCounter;
  #huCounter;
  #elHu;
  #elHa;
  #frozen;
  constructor() {
    this.#maxCount = 10;
    this.#haCount = this.#huCount = this.#maxCount;
  }

  start(element, huCounter, haCounter, name, Name, type, feed, play) {
    this.#frozen = false;
    this.#elHu = huCounter;
    this.#elHa = haCounter;
    name.innerText = `${Name} the ${type}`;
    let self = this;
    feed.addEventListener('click', function(){
      self.feed()
    });
    play.addEventListener('click', function(){
      self.play()
    });
    this.#update(huCounter, this.#huCount);
    this.#update(haCounter, this.#haCount);
    this.#huCounter = setInterval(()=>{
      this.#huCount--;
      this.#update(huCounter, this.#huCount);
      if(this.#huCount == 0){
        name.innerText = `${Name} the ${type} DEAD`;
        element.classList.add('dead')
        element.addEventListener('click', function(){
          element.remove();
        })
        return this.stop();
      }
    }, 5000);
    this.#haCounter = setInterval(()=>{
      this.#haCount--;
      this.#update(haCounter, this.#haCount);
      if(this.#haCount == 0){
        name.innerText = `${Name} the ${type} DEAD`;
        element.classList.add('dead')
        element.addEventListener('click', function(){
          element.remove();
        })
        return this.stop();
      }
    }, 2000);
  }

  stop() {
    clearInterval(this.#huCounter);
    clearInterval(this.#haCounter);
    this.#frozen = true;
  }

  feed() {
    if(this.#frozen){
      return console.log(`can't feed the dead`);
    }
    if(this.#huCount >= 10){
      return console.log('not hungry');
    }
    this.#huCount++;
    this.#update(this.#elHu, this.#huCount);
  }

  play() {
    if(this.#frozen){
      return console.log(`can't play with the dead`);
    }
    if(this.#haCount >= 10){
      return console.log('resting');
    }
    this.#haCount++;
    this.#update(this.#elHa, this.#haCount);
  }

  #update(element, counter) {
    element.innerText = counter;
  }
}

export { Tamagotchi };
