const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const change = () => {
	reset();
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
	} else {
		two.textContent = "°F";
		one.textContent = "°C";
	}
};

const convert = () => {
	if (converter.value === "")
		return (result.textContent = "Type in number first!");
	if (one.textContent === "°C") {
		const fahr = Number(converter.value) * 1.8 + 32;
		result.textContent = `${fahr.toFixed(2)} °F`;
	} else {
		const cel = Number(converter.value - 32) / 1.8;
		result.textContent = `${cel.toFixed(2)} °C`;
	}
};

const reset = () => {
	result.textContent = "";
	converter.value = "";
};

resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);
convBtn.addEventListener("click", convert);
