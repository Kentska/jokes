/*const programmingJokes = [
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the CSS developer go to therapy? To get rid of his margins.",
	"How do you comfort a JavaScript developer? You console them.",
	"Why did the CSS developer leave the restaurant? Because it had no class.",
	"Why did the JavaScript developer go missing? Because he didn't know when to return.",
	"Why did the HTML tag go to the party? Because it wanted to break the line.",
	"Why do JavaScript developers wear glasses? Because they don't C#.",
	"Why don't programmers like to use inline styles? Because they want to be classy.",
	"Why did the CSS selector break up with the HTML element? It found someone more specific.",
	"Why did the CSS developer apply for a job? They wanted to get a position."
];

// Numrera skämten i listan
function getRandomJoke(jokes) {
	const randomIndex = Math.floor(Math.random() * jokes.length);
	const randomJoke = jokes[randomIndex];
	const numberedJoke = `${randomIndex + 1}. ${randomJoke}`;
	return numberedJoke;
}
// Hämta och skriv ut slumpmässigt skämt
const jokeToDisplay = getRandomJoke(programmingJokes);
console.log('*******Welcome to the joke factory!*******')
console.log('Joke #', jokeToDisplay);
console.log('**Thank you, come again!**');*/









const programmingJokes = [
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the CSS developer go to therapy? To get rid of his margins.",
	"How do you comfort a JavaScript developer? You console them.",
	"Why did the CSS developer leave the restaurant? Because it had no class.",
	"Why did the JavaScript developer go missing? Because he didn't know when to return.",
	"Why did the HTML tag go to the party? Because it wanted to break the line.",
	"Why do JavaScript developers wear glasses? Because they don't C#.",
	"Why don't programmers like to use inline styles? Because they want to be classy.",
	"Why did the CSS selector break up with the HTML element? It found someone more specific.",
	"Why did the CSS developer apply for a job? They wanted to get a position."
];

// Funktion för att hämta två olika slumpmässiga skämt
function getTwoDifferentRandomJokes(jokes) {
	const firstIndex = Math.floor(Math.random() * jokes.length);
	let secondIndex;

	// Se till att andra index inte är lika som första
	do {
		secondIndex = Math.floor(Math.random() * jokes.length);
	} while (secondIndex === firstIndex);
	// slumpmässigt numrerade skämt
	const firstJoke = `${firstIndex + 1}. ${jokes[firstIndex]}`;
	const secondJoke = `${secondIndex + 1}. ${jokes[secondIndex]}`;

	return [firstJoke, secondJoke];

}

// Hämta och skriv ut två olika slumpmässiga skämt
const [joke1, joke2] = getTwoDifferentRandomJokes(programmingJokes);
console.log('****Welcome to the joke factory****');
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,');
console.log('Joke  #', joke1);
console.log('Joke  #', joke2);
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,');
console.log('Thank you, come again!');



