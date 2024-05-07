const btn = document.querySelector(".btn");
const div = document.querySelector(".test");

btn.addEventListener(
	"click",
	() => {
		div.classList.add("animate-slide-start");
		// setTimeout(() => {
		// 	div.classList.remove("animate-slide-start");
		// });
	},
	2000
);
