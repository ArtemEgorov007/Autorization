//Define DOM elements

//#hero__animation WRONG WAY

// Определение DOM элементов
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Загрузка предпочтительной цветовой темы пользователя из локального хранилища
function loadColorMode() {
	const colorMode = localStorage.getItem(storageKey);
	root.classList.add(colorMode || defaultMode);
}

loadColorMode();

// Обработчик клика на кнопке "toggleButton"
toggleButton.addEventListener("click", () => {
	saveColorMode();
});

// Сохранение предпочтительной цветовой темы пользователя в локальное хранилище
function saveColorMode() {
	const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
	root.classList.remove("light-mode", "dark-mode");
	root.classList.add(currentMode);
	localStorage.setItem(storageKey, currentMode);
	updateToggleButton();

	// Функция для обновления стиля кнопки
	function updateToggleButton() {
		if (root.classList.contains("dark-mode")) {
			toggleButton.style.backgraundImage = "var(--moon)";
		} else {
			toggleButton.style.backgraundImage = "var(--sun)";
		}
	}
}
