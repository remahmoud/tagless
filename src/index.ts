// function to remove all the html tags from the string
export function removeAll(str: string): string {
    if (!str || typeof str !== "string") {
        throw new Error("Invalid input");
    }
    return str.replace(/<[^>]*>?/gm, "").replace(/\s\s+/g, " ");
}

// function to remove specific html tag from the string
export function removeByTag(str: string, tag: string): string {
    if (!str || typeof str !== "string") {
        throw new Error("Invalid input");
    }
    if (!tag || typeof tag !== "string") {
        throw new Error("Invalid tag");
    }
    return str
        .replace(`<${tag}>`, "")
        .replace(`</${tag}>`, "")
        .replace(/\s\s+/g, " ");
}

export default {
    removeAll,
    removeByTag,
};
