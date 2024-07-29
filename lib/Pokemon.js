class Pokemon {
  constructor(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.type = "normal";
  }
  introduce() {
    console.log(`${this.name}!`);
  }
}

module.exports = Pokemon;
