const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const facts = [
	"Humans are the Only Animals That Enjoy Spicy Foods.",
	"Humans Are Also the Only Animals Whose Brains Shrink.",
	"Potato Chips Cause More Weight Gain Than Any Other Food.",
	"That Fish is Probably Labeled Wrong.",
	"Bananas Cant Reproduce.",
	"It's Impossible to Hum While You Hold Your Nose.",
];

let day = new Date();
currentDay.textContent = day.toLocaleString("en", { weekday: "long" });

const showRandomMsg = () => { 
    let msg = Math.floor(Math.random() * facts.length)
    funFact.textContent = facts[msg]
 }

 showRandomMsg()