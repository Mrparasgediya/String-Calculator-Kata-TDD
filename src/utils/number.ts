import { AdditionMethods } from "../types/StringCalculator";

export const getNumbersArrayFromStringArray = (stringArr: string[]): number[] => {
    return stringArr.map((currStringNo: string): number => {
        const convertedNumber: number = +currStringNo;
        if (isNaN(convertedNumber)) {
            return (currStringNo.charCodeAt(0) - 96);
        }
        return convertedNumber;
    });
}

export const getSumOfElementsByAdditionMethod = (arr: number[], additionMethod: AdditionMethods = AdditionMethods.DEFAULT): number => {
    let startIdx: 0 | 1 = additionMethod == AdditionMethods.ODD ? 1 : 0;
    let sum: number = 0;
    for (let i = startIdx; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}