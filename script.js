// define trainer class
class Trainer{
        constructor(name){
        this.name = name;
        this.myPokemonList = {}
        }
        add(pokemonObject){

            // adds the pokemon object to the trainer's container object for all his pokemon
            this.myPokemonList[pokemonObject.name] = pokemonObject
        }
        get(pokemon){
            // returns a Pokemon object housing information for the pokemon it found
            console.log(pokemon);
        }
        all(){
            // no parameters/returns an array of Pokemon objects
            console.log(this.myPokemonList);
        }
    }

let pokeCounter = [];
    
    // define pokemon class
    class Pokemon{
        constructor(name,hp,attack,defense,abilities,sprite){
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
            this.sprite =sprite;
        }
    }
    // create new instance of trainer & class here
let milly = new Trainer();
let charmeleon ;
let vulpix ;
let slowpoke ;

// API CALL
axios.get('https://pokeapi.co/api/v2/pokemon/5/').then((poke) => {
        // console.log(poke);
        let pokedata  = poke.data;
        // console.log(pokedata);
        let name = pokedata.name;
        console.log(name)
        let hp = pokedata.stats[5].base_stat
        console.log(hp);
        let attack = pokedata.stats[4].base_stat;
        console.log(attack);
        let defense = pokedata.stats[3].base_stat;
        console.log(defense);
        let abilities = pokedata.abilities.map(   (element) => element.ability.name);
        console.log(abilities);
        let sprite = pokedata.sprites.front_default;
        console.log(sprite);

        let charmeleon = new Pokemon(name,hp,attack,defense,abilities,sprite)
        milly.add(charmeleon);
        pokeCounter.push(charmeleon);

})

axios.get('https://pokeapi.co/api/v2/pokemon/37/').then((poke) => {
        // console.log(poke);
        let pokedata  = poke.data;
        // console.log(pokedata);
        let name = pokedata.name;
        console.log(name)
        let hp = pokedata.stats[5].base_stat
        console.log(hp);
        let attack = pokedata.stats[4].base_stat;
        console.log(attack);
        let defense = pokedata.stats[3].base_stat;
        console.log(defense);
        let abilities = pokedata.abilities.map(   (element) => element.ability.name);
        console.log(abilities);
        let sprite = pokedata.sprites.front_default;
        console.log(sprite);

        let vulpix = new Pokemon(name,hp,attack,defense,abilities,sprite)
        milly.add(vulpix);
        pokeCounter.push(vulpix);

})

axios.get('https://pokeapi.co/api/v2/pokemon/79/').then((poke) => {
        // console.log(poke);
        let pokedata  = poke.data;
        // console.log(pokedata);
        let name = pokedata.name;
        console.log(name)
        let hp = pokedata.stats[5].base_stat
        console.log(hp);
        let attack = pokedata.stats[4].base_stat;
        console.log(attack);
        let defense = pokedata.stats[3].base_stat;
        console.log(defense);
        let abilities = pokedata.abilities.map(   (element) => element.ability.name);
        console.log(abilities);
        let sprite = pokedata.sprites.front_default;
        console.log(sprite);

        let slowpoke = new Pokemon(name,hp,attack,defense,abilities,sprite)
        milly.add(slowpoke);
        pokeCounter.push(slowpoke);

});

console.log(pokeCounter);



let pokemonId
axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).then((poke) => {
        // console.log(poke);
        let pokedata  = poke.data;
        let name = pokedata.name;
        let hp = pokedata.stats[5].base_stat
        let attack = pokedata.stats[4].base_stat;
        let defense = pokedata.stats[3].base_stat;
        let abilities = pokedata.abilities.map(   (element) => element.ability.name);
        let sprite = pokedata.sprites.front_default;

        let newPoke = new Pokemon(name,hp,attack,defense,abilities,sprite)
        // milly.add(charmeleon);
        // pokeCounter.push(charmeleon);

})