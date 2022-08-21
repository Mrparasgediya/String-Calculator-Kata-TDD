export const getNumbersArrayFromStringArray = (stringArr: string[]): number[] => {
    return stringArr.map((currStringNo: string): number => {
        const convertedNumber: number = +currStringNo;
        if (isNaN(convertedNumber)) {
            return (currStringNo.charCodeAt(0) - 96);
        }
        return convertedNumber;
    });
}