// see class definitions for pokemon & trainer in class.js file
// create new instance of trainer & class here
// will also be able to add any other pokemon by number
let milly = new Trainer("milly");


// Grab the template script
let theTemplateScript = $("#pokemon-template").html();
// Compile the template
let theTemplate = Handlebars.compile(theTemplateScript);


Promise.all([
  milly.add(5),
  milly.add(37),
  milly.add(79)
]).then(() => {
  renderList(milly); 
});

function renderList(trainer){
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
