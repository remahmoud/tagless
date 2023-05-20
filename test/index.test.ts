import { removeAll, removeByTag } from "../src/index";

describe("tagless", () => {
    test("should remove all the html tags from the string", () => {
        const str = "<h1>Hello World</h1>";
        expect(removeAll(str)).toBe("Hello World");
    });

    test("should remove all white spaces and all html tags from the string", () => {
        const str = "<h1>Hello    World</h1>";
        expect(removeAll(str)).toBe("Hello World");
    });

    test("should remove specific html tag from the string", () => {
        const str = "<h1>Hello World</h1>";
        expect(removeByTag(str, "h1")).toBe("Hello World");
    });

    test("should remove all white spaces and specific html tag from the string", () => {
        const str = "<h1>Hello    World</h1>";
        expect(removeByTag(str, "h1")).toBe("Hello World");
    });
});
