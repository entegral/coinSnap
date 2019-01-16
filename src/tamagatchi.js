class Tamagatchi {
  constructor(name = "Tommy") {
    this.name = name;
    this.hunger = 50;
    this.boredom = 50;
    this.tired = 50;
    this.giveLife();
    console.log(`${this.name} lives!`);
    this.small = this.feed(5);
    this.large = this.feed(15);
    this.smallPlay = this.play();
    this.bigPlay = this.playHard();
    this.smallSleep = this.sleep();
    this.isDead = false;

  }

  status() {
    return {
      hunger: (this.hunger> 0),
      boredom: (this.boredom> 0),
      tired: (this.tired> 0)
    };
  }

  printAll() {
    console.log(`hunger: ${this.hunger}\nboredom: ${this.boredom}\ntired: ${this.tired}`);
  }

  giveLife(){
    const lifeHappens = setInterval(() => {
      this.hunger -= 0.3;
      this.boredom -= 1;
      this.tired -= 0.1;
      this.printAll();

      if ((Object.values(this.status())).includes(false)){
        clearInterval(lifeHappens);
        console.log(`${this.name} died, you killed him.`);
        this.isDead = true;
      }
    }, 1000);
  }

  feed(amount) {
    return (item) => {
      this.hunger += amount;
      amount > 10 ? this.tired-=5 : null;
      this.hunger > 50 ? this.hunger = 50 : null;
      console.log(`${this.name} just at a ${item}. Yum!`);
      console.log(this.hunger);
      console.log(this.tired);
    };
  }

  play() {
    return () => {
      this.boredom <= 50 ? this.boredom += 5 : this.boredom = 50;
    };
  }

  playHard() {
    return () => {this.boredom = 50;
    this.tired -= 10;};

  }

  sleep() {
    return () => {
      this.tired + 10 <= 50 ? this.tired += 10 : this.tire = 50;
    }

  }


  hibernate() {
    this.tired = 50;
    this.hunger -= 35;
  }

  mood() {
    // do something
    if ((this.hunger > 40) && (this.boredom > 40) && (this.tired > 40)) {
      return 'cars'
    } else if (((this.hunger > 20) && (this.boredom > 20) && (this.tired > 20))) {
      return 'sleepy'
    }
    return "angry"
  }


}

export { Tamagatchi };
