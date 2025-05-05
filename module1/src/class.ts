class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} make sounds like ${this.sound}`);
  }
}

const dog = new Animal("Dog", "Canine", "Bark");
console.log(dog.sound);
dog.makeSound()
