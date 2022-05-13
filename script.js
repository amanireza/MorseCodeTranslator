import { morseCode, lower } from "./morseCodeKey.js";
import { appendTextElement, keyList } from "./dom.js";

export const ARGUMENT_TYPE_ERROR = new Error(
	`argument: must be of type String`
);
export const NO_INPUT_TYPE_ERROR = new Error(
	`argument: must enter text for translation`
);

export const translator = (searchTerm) => {
	// if (typeof searchTerm !== "String") throw ARGUMENT_TYPE_ERROR;

	// if (searchTerm == "") throw NO_INPUT_TYPE_ERROR;
	if (searchTerm === "") {
		alert("Enter some text");
	}
	console.log(searchTerm);
	const morseCodeCheck = searchTerm.includes("." || "-");
	console.log(morseCodeCheck);

	let searchArray = [];
	let morseCodeArray = [];
	let translated = [];

	if (morseCodeCheck === true) {
		searchArray = searchTerm.toUpperCase().split(" ");
		morseCodeArray = searchArray.map((n) => lower[n]);

		translated = morseCodeArray.join("").toLowerCase();
	} else {
		searchArray = searchTerm.toUpperCase().split("");
		morseCodeArray = searchArray.map((n) => morseCode[n]);
		translated = morseCodeArray.join(" ");
	}

	console.log(searchArray);
	console.log(morseCodeArray);
	console.log(translated);

	return translated;
};
