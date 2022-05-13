import { translator } from "./script.js";
import { ARGUMENT_TYPE_ERROR } from "./script";

describe("morse code translator unit tests", () => {
	it("should return a string", () => {
		expect(() => translator(123).toThrow(ARGUMENT_TYPE_ERROR));
		expect(() => translator(true).toThrow(ARGUMENT_TYPE_ERROR));
		expect(() => translator([]).toThrow(ARGUMENT_TYPE_ERROR));
	});
	it("should return the correct translated letter", () => {
		expect(translator("A")).toBe(".-");
		expect(translator("M")).toBe("--");
		expect(translator("-.")).toBe("N");
		expect(translator("I")).toBe("..");
		expect(translator("-.-.")).toBe("C");
		expect(translator("7")).toBe("--...");
	});
	it("should return a space between letters", () => {
		expect(translator("hey")).toBe(".... . -.--");
		expect(translator("Not today")).toBe("-. --- -    - --- -.. .- -.--");
		expect(translator("Mondays")).toBe("-- --- -. -.. .- -.-- ...");
		expect(translator("Morse Code")).toBe(
			"-- --- .-. ... .    -.-. --- -.. ."
		);
	});
	it("should return the translated letters in the correct order", () => {
		expect(translator("adbha")).toBe(".- -.. -... .... .-");
		expect(translator("today")).toBe("- --- -.. .- -.--");
		expect(translator("ufd")).toBe("..- ..-. -..");
		expect(translator("andjdabd")).toBe(".- -. -.. .--- -.. .- -... -..");
	});
});
