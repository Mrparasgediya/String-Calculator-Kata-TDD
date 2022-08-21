
export const getDelimitersArr = (string: string = '', defaultDelimiter: string = ","): string[] => {
    const delimitersArr: string[] = [];
    let enteredString: string = string;
    if (enteredString.startsWith('//')) {
        // add custom delimiter to array
        const customDelimiter: string = enteredString.substring(2, enteredString.indexOf('\n'));
        delimitersArr.push(customDelimiter);
        // remove custom delimiter strings from enteredString
        enteredString = enteredString.substring(enteredString.indexOf("\n") + 1);
    } else {
        delimitersArr.push(defaultDelimiter);
    }
    if (enteredString.includes("\n")) {
        delimitersArr.push('\n');
    }
    return delimitersArr;
} 