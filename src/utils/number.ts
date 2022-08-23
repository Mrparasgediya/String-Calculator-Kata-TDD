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

export const getSumOfElementsByAdditionMethod = (arr: number[], additionMethod: AdditionMethods = AdditionMethods.DEFAULT, hasMaxValue: boolean = false, maxValue: number = 0): number => {
    let startIdx: number = additionMethod === AdditionMethods.DEFAULT ? 0 : additionMethod;
    let incrementValue: 1 | 2 = (additionMethod === AdditionMethods.ODD || additionMethod === AdditionMethods.EVEN) ? 2 : 1;
    let sum: number = 0;
    if (hasMaxValue) {
        for (let i = startIdx; i < arr.length; i += incrementValue) {
            if (arr[i] <= maxValue) {
                sum += arr[i];
            }
        }
    }
    else {
        for (let i = startIdx; i < arr.length; i += incrementValue) {
            sum += arr[i];
        }
    }
    return sum;
}