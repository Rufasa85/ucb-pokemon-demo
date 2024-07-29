const Pokemon = require("./Pokemon");

class FirePokemon extends Pokemon {
  constructor(name, hp, atk) {
    super(name, hp, atk);
    this.type = "fire";
  }
  introduce() {
    console.log(`${this.name}! *sparks shower down*`);
  }
}

module.exports = FirePokemon;
