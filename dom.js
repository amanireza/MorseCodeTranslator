// import { ARGUMENT_TYPE_ERROR } from "./script";
import { morseCode } from "./morseCodeKey.js";
import { translator } from "./script.js";

// append text function
export const appendTextElement = (
	idName,
	elementType,
	textString,
	parentElement
) => {
	const element = document.createElement(elementType);
	element.id = idName;
	const text = document.createTextNode(textString);

	element.appendChild(text);
	parentElement.appendChild(element);
};

//get input
export const form = document.getElementById("pageForm");
export const englishText = document.getElementById("english");
export const morseText = document.getElementById("morse");
export const keyList = document.getElementById("mckey");

// event listener on form:
export const translate = () => {
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (
			englishText.childNodes.length > 0 ||
			morseText.childNodes.length > 0
		) {
			englishText.removeChild(englishText.firstChild);
			morseText.removeChild(morseText.firstChild);
		}

		const formData = new FormData(event.target);
		const searchTerm = formData.get("query");

		const translated = translator(searchTerm);

		appendTextElement("#englishAppend", "p", searchTerm, englishText);
		appendTextElement("morseAppend", "p", translated, morseText);
	});
};

translate();
