const Pokemon = require("./Pokemon");

class WaterPokemon extends Pokemon {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.type = "water";
  }
}

module.exports = WaterPokemon;
