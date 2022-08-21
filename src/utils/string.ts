import { AdditionMethods } from "../types/StringCalculator";

export const getDelimitersArr = (string: string = '', defaultDelimiter: string = ","): string[] => {
    const delimitersArr: string[] = [];
    let enteredString: string = string;
    if (enteredString.startsWith('//')) {
        // add custom delimiter to array
        const customDelimiterBox: string = enteredString.substring(2, enteredString.indexOf('\n'));
        // check delimiter is in format [delimiter]
        if (customDelimiterBox.startsWith("[") && customDelimiterBox.endsWith("]")) {
            const delimiter: string = customDelimiterBox.substring(1, customDelimiterBox.indexOf(']'));
            delimitersArr.push(delimiter);
        } else {
            delimitersArr.push(customDelimiterBox);
        }
        // remove custom delimiter strings from enteredString
        enteredString = enteredString.substring(enteredString.indexOf("\n") + 1);
    } else {
        delimitersArr.push(defaultDelimiter);
    }

    if (enteredString.includes("\n")) {
        delimitersArr.unshift('\n');
    }
    return delimitersArr;
}

export const getArrayFromString = (numbersString: string, delimitersArr: string[]): string[] => {
    let numbersArr: string[] = numbersString.split(delimitersArr[0]);
    // iterate over all delimiters from second delimiter and add it to numbers array
    for (let i = 1; i < delimitersArr.length; i++) {
        const currDelimiter = delimitersArr[i];
        let tempNumbersArr: string[] = [];
        for (let currNumber of numbersArr) {
            if (currNumber.includes(currDelimiter)) {
                // add current number split array in numbers array
                tempNumbersArr = [...tempNumbersArr, ...(currNumber.split(currDelimiter))];
            } else {
                tempNumbersArr.push(currNumber);
            }
        }
        // change numbers arr to numbersArr
        numbersArr = tempNumbersArr;
    }
    // console.log(numbersArr);
    return numbersArr;
}

export const getAdditionMethod = (string: string): AdditionMethods => {
    if (string.startsWith('0//')) {
        return AdditionMethods.ODD;
    }
    if (string.startsWith("1//")) {
        return AdditionMethods.EVEN;
    }
    return AdditionMethods.DEFAULT;
}