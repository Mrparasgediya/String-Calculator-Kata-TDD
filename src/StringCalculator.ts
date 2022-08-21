import { AdditionMethods } from './types/StringCalculator'
import { getArrayFromString, getDelimitersArr } from './utils/string';

class StringCalculator {

    public add(numbers: string): number {

        let currentAdditionMethod: AdditionMethods = AdditionMethods.DEFAULT
        let enteredNumbers: string = numbers.trim();
        let sum: number = 0;
        const negativeNumbers: number[] = [];

        if (enteredNumbers.startsWith('0//')) {
            currentAdditionMethod = AdditionMethods.ODD;
            enteredNumbers = enteredNumbers.substring(1);
        }

        if (enteredNumbers.startsWith('1//')) {
            currentAdditionMethod = AdditionMethods.EVEN;
            enteredNumbers = enteredNumbers.substring(1);
        }

        const delimiters: string[] = getDelimitersArr(enteredNumbers);
        // extract delimiter from entered numbers string
        if (enteredNumbers.startsWith('//')) {
            // remove delimiter string from entered numbers
            enteredNumbers = enteredNumbers.substring(enteredNumbers.indexOf('\n') + 1);
        }

        // get numbers array
        let enteredNumbersArr: string[] = getArrayFromString(enteredNumbers, delimiters)

        // calculate sum by using reduce method
        sum = enteredNumbersArr.reduce((sum, currStrNo, currIdx) => {
            // return if addition method is odd and index is even
            if (currentAdditionMethod === AdditionMethods.ODD && (currIdx % 2 === 0)) {
                return sum;
            }

            if (currentAdditionMethod === AdditionMethods.EVEN && (currIdx % 2 !== 0)) {
                return sum;
            }
            // convert string number to number
            const convertedNo: number = +currStrNo;
            // skip stpes if number is greater then 1000
            if (convertedNo > 1000) { return sum; }
            // add negativenumbers to array if no is negative
            if (convertedNo < 0) {
                negativeNumbers.push(convertedNo);
                return sum;
            }
            return isNaN(convertedNo) ? (sum + (currStrNo.charCodeAt(0) - 96)) : (sum + convertedNo);
        }, 0)

        // check if there is negative numbers
        if (negativeNumbers.length) {
            throw new Error(`Negatives not allowed : ${negativeNumbers.join(',')}`)
        }
        return sum;
    }
}
export default StringCalculator;