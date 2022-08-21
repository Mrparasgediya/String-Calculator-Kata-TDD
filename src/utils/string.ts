
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