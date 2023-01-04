// soal 1
console.log("---SOAL 1---");
// release 1
console.log("--Release 0--");
class Animal {
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    } 
    get name(){
        return this._name;
    }
    get legs(){
        return this._legs;
    }
    set legs(x) {
      this._legs = x;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
console.log("--Release 1--");
class Ape extends Animal {
    constructor(name) {
      super(name);
    }
    yell() {
      return console.log("Auooo");
    }
  }
  
var sungokong = new Ape("kera sakti")
sungokong.legs = 2
sungokong.yell()
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
 
class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    return console.log("hop hop");
  }
}

var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

// soal 2
console.log("---SOAL 2---"); 

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
var clock = new Clock({template: 'h:m:s'});
clock.start(); 