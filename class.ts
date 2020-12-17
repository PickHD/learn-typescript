class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering....");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

class Cheetah extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 80) {
    console.log("Running...");
    super.move(distanceInMeters);
  }
}

let dandy = new Horse("Dandy The Horse");
let udin = new Cheetah("Udin The Cheetah");

dandy.move();
udin.move();
