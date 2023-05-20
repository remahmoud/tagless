// function to remove all the html tags from the string
export function removeAll(str: string): string {
    return str.replace(/<[^>]*>?/gm, "").replace(/\s\s+/g, " ");
}

// function to remove specific html tag from the string
export function removeByTag(str: string, tag: string): string {
    return str
        .replace(`<${tag}>`, "")
        .replace(`</${tag}>`, "")
        .replace(/\s\s+/g, " ");
}
