const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p = document.querySelector("p");

// console.log(sizeUp,sizeDown,colorBtn,p)

let fontSize = 36;

const increase = () => {
	// console.log('working')
	if (fontSize >= 60) return;
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};

const decrease = () => {
	if (fontSize < 10) return;
	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
};

const colorChanger = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    // console.log(r,g,b)
    p.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener("click", increase);
sizeDown.addEventListener("click", decrease);
colorBtn.addEventListener('click', colorChanger)


