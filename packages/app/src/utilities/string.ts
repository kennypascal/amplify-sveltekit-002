export function toHyphenCase(str: string) {
    let match =
        str &&
        str.match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        );
    return match && match.map((x: string) => x.toLowerCase()).join('-');
}
