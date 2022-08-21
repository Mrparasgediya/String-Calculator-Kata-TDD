export const getNumbersArrayFromStringArray = (stringArr: string[]): number[] => {
    return stringArr.map(currStringNo => +currStringNo);
}