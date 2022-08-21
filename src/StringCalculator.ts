import { AdditionMethods } from './types/StringCalculator'
import { getNumbersArrayFromStringArray, getSumOfElementsByAdditionMethod } from './utils/number';
import { getAdditionMethod, getArrayFromString, getDelimitersArr } from './utils/string';

class StringCalculator {

    public add(numbers: string): number {

        let enteredNumbers: string = numbers.trim();
        const currentAdditionMethod: AdditionMethods = getAdditionMethod(enteredNumbers);

        // remove first 0 or 1 from entered string
        if (enteredNumbers.startsWith('0//') || enteredNumbers.startsWith('1//')) {
            enteredNumbers = enteredNumbers.substring(1);
        }

        const delimiters: string[] = getDelimitersArr(enteredNumbers);
        // extract delimiter from entered numbers string
        if (enteredNumbers.startsWith('//')) {
            // remove delimiter string from entered numbers
            enteredNumbers = enteredNumbers.substring(enteredNumbers.indexOf('\n') + 1);
        }

        // get numbers array in string
        const enteredNumbersStringArr: string[] = getArrayFromString(enteredNumbers, delimiters)
        // convert numbers string array to numbers array
        const enteredNumbersArr: number[] = getNumbersArrayFromStringArray(enteredNumbersStringArr);

        // get negative numbers
        const negativeNumbers: number[] = enteredNumbersArr.filter(currNo => currNo < 0);
        // throw error if negative numbers encountered
        if (negativeNumbers.length) {
            throw new Error(`Negatives not allowed : ${negativeNumbers.join(',')}`)
        }
        // get sum of elements which are less then 1000 according to current addition method
        return getSumOfElementsByAdditionMethod(enteredNumbersArr, currentAdditionMethod, true, 1000);
    }
}
export default StringCalculator;