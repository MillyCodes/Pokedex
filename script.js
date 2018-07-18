// define pokemon class
class Pokemon {
  constructor(name, hp, attack, defense, abilities, sprite) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.sprite = sprite;
  }
}

// define trainer class
class Trainer {
  constructor(name) {
    this.name = name;
    this.myPokemonList = {}
  }
  add(pokemonID) {
    // return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).then((poke) => {
    return axios.get(`https://pokeapi-nycda.firebaseio.com/pokemon/${pokemonID}.json`).then((poke) => {

      let pokedata = poke.data;
      console.log(pokedata);
      let name = pokedata.name;
      let hp = pokedata.stats[5].base_stat
      let attack = pokedata.stats[4].base_stat;
      let defense = pokedata.stats[3].base_stat;
      let abilities = pokedata.abilities.map((element) => element.ability.name);
      let sprite = pokedata.sprites.front_default;
      let newPoke = new Pokemon(name, hp, attack, defense, abilities, sprite)
      console.log(`${pokemonID} added sucessfully`);
      console.log(newPoke)
      this.myPokemonList[newPoke.name] = newPoke

    });
  }
  get(pokemon) {
    return this.myPokemonList[pokemon];
  }
  all() {
    // no parameters/returns an array of Pokemon objects
    console.log(this.myPokemonList);
    console.log(Object.values(this.myPokemonList))
  }
}

// create new instance of trainer & class here
// will also be able to add any other pokemon by number
let milly = new Trainer("milly");


// Grab the template script
var theTemplateScript = $("#pokemon-template").html();
// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);


Promise.all([
  milly.add(5),
  milly.add(37),
  milly.add(79)
]).then(() => {
  renderList(milly);
});

function renderList(trainer) {
  let pokeList = trainer.myPokemonList;
  let context = {
    content: pokeList
  };

  // Pass our data to the template
  const theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  // Why use jQuery here? DOMElement.append('htmlString') doesn't transform the html string
  // into dom elements $jqueryElement.append('htmlString') does
  let container = $('#pokemon-container')
  console.log(theCompiledHtml)
  container.append(theCompiledHtml);
}
