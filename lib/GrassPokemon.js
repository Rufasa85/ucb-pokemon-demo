const Pokemon = require("./Pokemon");

class GrassPokemon extends Pokemon {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.type = "grass";
  }
}

module.exports = GrassPokemon;
