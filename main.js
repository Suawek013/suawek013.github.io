const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menu.classList.add("open");

		menuOpen = true;
	} else {
		menu.classList.remove("open");
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});

function closeSubmenu(e) {
	let isClickInside = menuBtn.contains(e.target);
	if (!isClickInside && menuBtn.classList.contains("open")) {
		menuBtn.classList.remove("open");
		menu.classList.remove("open");
	}
}

document.addEventListener("click", closeSubmenu, false);
document.addEventListener("scroll", closeSubmenu, false);
