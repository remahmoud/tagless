import { removeAll, removeByTag } from "../src/index";

describe("tagless", () => {
    // test cases for removeAll
    // test removeAll function with valid input
    test("should remove all the html tags from the string", () => {
        const str = "<h1>Hello World</h1>";
        expect(removeAll(str)).toBe("Hello World");
    });

    // test removeAll function with valid input and white spaces
    test("should remove all white spaces and all html tags from the string", () => {
        const str = "<h1>Hello    World</h1>";
        expect(removeAll(str)).toBe("Hello World");
    });

    // test removeAll function with invalid input
    test("should throw error if input is not a string", () => {
        // @ts-ignore
        expect(() => removeAll(null)).toThrow("Invalid input");
    });

    // test removeAll function with invalid input
    test("should throw error if input is not a string", () => {
        // @ts-ignore
        expect(() => removeAll(undefined)).toThrow("Invalid input");
    });

    // test removeAll function with invalid input
    test("should throw error if input is not a string", () => {
        // @ts-ignore
        expect(() => removeAll(123)).toThrow("Invalid input");
    });

    // test cases for removeByTag
    // test removeByTag function with valid input
    test("should remove specific html tag from the string", () => {
        const str = "<h1>Hello World</h1>";
        expect(removeByTag(str, "h1")).toBe("Hello World");
    });

    // test removeByTag function with valid input and white spaces
    test("should remove all white spaces and specific html tag from the string", () => {
        const str = "<h1>Hello    World</h1>";
        expect(removeByTag(str, "h1")).toBe("Hello World");
    });

    // test removeByTag function with invalid tag
    test("should throw error if tag is not a string", () => {
        // @ts-ignore
        expect(() => removeByTag("<h1>Hello World</h1>", null)).toThrow(
            "Invalid tag"
        );
    });

    // test removeByTag function with invalid tag
    test("should throw error if tag is not a string", () => {
        // @ts-ignore
        expect(() => removeByTag("<h1>Hello World</h1>", undefined)).toThrow(
            "Invalid tag"
        );
    });

    // test removeByTag function with invalid tag
    test("should throw error if tag is not a string", () => {
        // @ts-ignore
        expect(() => removeByTag("<h1>Hello World</h1>", 123)).toThrow(
            "Invalid tag"
        );
    });

    // test removeByTag function with invalid input
    test("should throw error if input is not a string", () => {
        // @ts-ignore
        expect(() => removeByTag(null, "h1")).toThrow("Invalid input");
    });

    // test removeByTag function with invalid input
    test("should throw error if input is not a string", () => {
        // @ts-ignore
        expect(() => removeByTag(undefined, "h1")).toThrow("Invalid input");
    });
});
