const Pokemon = require("./Pokemon");
const WaterPokemon = require("./WaterPokemon");
const GrassPokemon = require("./GrassPokemon");
const FirePokemon = require("./FirePokemon");

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemon = [];
  }
  addPokemon(type, name, hp, atk) {
    switch (type) {
      case "normal":
        this.pokemon.push(new Pokemon(name, hp, atk));
        break;
      case "water":
        this.pokemon.push(new WaterPokemon(name, hp, atk));
        break;
      case "grass":
        this.pokemon.push(new GrassPokemon(name, hp, atk));
        break;

      case "fire":
        this.pokemon.push(new FirePokemon(name, hp, atk));
        break;
    }
  }
  getRandomPokemon() {
    return this.pokemon[Math.floor(Math.random() * this.pokemon.length)];
  }
}

module.exports = Trainer;
