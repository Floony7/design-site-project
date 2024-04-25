// Capiatlise the first letter of a word
export function capitalise (str: string): string {
    if (str.length < 1) {
        return '';
    }
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.slice(1);
    return `${firstLetter}${restOfWord}`;
}