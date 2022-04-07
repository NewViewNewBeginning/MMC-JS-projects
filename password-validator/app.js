const input = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()?]/;
const minValue = 10;

console.log(p, input);

const showMsg = () => {
	if (
		input.value.length > minValue &&
		input.value.match(letters) &&
		input.value.match(numbers) &&
		input.value.match(special)
	) {
		p.textContent = "You have very strong password 🦾";
		p.style.color = "lime";
	} else if (
		input.value.length > minValue &&
		input.value.match(letters) &&
		input.value.match(numbers)
	) {
		p.textContent = "You have strong password 🙂";
		p.style.color = "yellow";
	} else {
		p.textContent = "You have weak password 😥";
		p.style.color = "red";
	}
};

const checkPassword = () => {
    if(input.value !== ''){
        showMsg()
    }else{
        input.textContent = "You didn't put any password"
    }
}

input.addEventListener("keyup", checkPassword);
