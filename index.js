const inquirer = require("inquirer");
const Trainer = require("./lib/Trainer");

const kayvon = new Trainer("Kayvon");
kayvon.addPokemon("normal", "Snorlax", 1200, 12);
kayvon.addPokemon("water", "Greninja", 120, 1);

const me = new Trainer("Joe");
me.addPokemon("grass", "Bulbasaur", 19, 1);

const trainers = [kayvon, me];

const start = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do?",
        choices: [
          "add a trainer",
          "see my pokemon",
          "catch a pokemon",
          "get random pokemon",
          "quit",
        ],
        name: "choice",
      },
    ])
    .then((ans) => {
      if (ans.choice === "quit") {
        console.log("goodbye");
      } else if (ans.choice === "add a trainer") {
        addTrainer();
      } else if (ans.choice === "see my pokemon") {
        seePokemon();
      } else if (ans.choice === "catch a pokemon") {
        addPokemon();
      } else if (ans.choice === "get random pokemon") {
        getRandomPokemon();
      }
    });
};

const addTrainer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "who are you?",
        name: "name",
      },
    ])
    .then((ans) => {
      const newTrain = new Trainer(ans.name);
      trainers.push(newTrain);
      console.table(trainers);
      start();
    });
};

const seePokemon = () => {
  const trainerDataForInq = trainers
    .filter((train) => {
      return train.pokemon.length > 0;
    })
    .map((train) => {
      return {
        name: train.name,
        value: train,
      };
    });
  inquirer
    .prompt([
      {
        type: "list",
        choices: trainerDataForInq,
        message: "who are you?",
        name: "trainer",
      },
    ])
    .then((ans) => {
      console.log(`hello ${ans.trainer.name}, here are you pokemon!`);
      console.table(ans.trainer.pokemon);
      start();
    });
};

const addPokemon = () => {
  const trainerDataForInq = trainers.map((train) => {
    return {
      name: train.name,
      value: train,
    };
  });
  inquirer
    .prompt([
      {
        type: "list",
        choices: trainerDataForInq,
        message: "who are you?",
        name: "trainer",
      },
      {
        type: "input",
        message: "what is the name of the pokemon?",
        name: "name",
      },
      {
        type: "list",
        message: "what is the type of the pokemon?",
        choices: ["normal", "water", "fire", "grass"],
        name: "type",
      },
      {
        type: "number",
        message: "what is the hp of the pokemon?",
        name: "hp",
      },
      {
        type: "number",
        message: "what is the atk of the pokemon?",
        name: "atk",
      },
    ])
    .then((ans) => {
      console.log(`hello ${ans.trainer.name}, what a great ${ans.name}!`);
      ans.trainer.addPokemon(ans.type, ans.name, ans.hp, ans.atk);
      start();
    });
};

const getRandomPokemon = () => {
  const trainerDataForInq = trainers
    .filter((train) => train.pokemon.length > 0)
    .map((train) => {
      return {
        name: train.name,
        value: train,
      };
    });
  inquirer
    .prompt([
      {
        type: "list",
        choices: trainerDataForInq,
        message: "who are you?",
        name: "trainer",
      },
    ])
    .then((ans) => {
      const randomMon = ans.trainer.getRandomPokemon();
      console.log(`I choose you, ${randomMon.name}!`);
      start();
    });
};

start();
