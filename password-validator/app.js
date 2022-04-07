const input = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()?]/;
const minValue = 10;

console.log(p,input);

const showMsg = () => {
	if (
		input.value.length > minValue && input.value.match(letters) &&
		input.value.match(numbers) &&
		input.value.match(special)
	) {
		p.textContent = "You have very strong password 🦾";
		p.style.color = "lime";
	} else {
		p.textContent = "none";
	}
};

input.addEventListener('keyup', showMsg)
