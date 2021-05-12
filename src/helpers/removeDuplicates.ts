export const removeDuplicates = <T>(arr: T[]): T[] => {
    const jsonObject = arr.map(item => JSON.stringify(item));
    const uniqueSet = new Set(jsonObject);
    const uniqueArray: T[] = Array.from(uniqueSet).map(item => JSON.parse(item));

    return uniqueArray;
};
