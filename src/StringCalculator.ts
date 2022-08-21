class StringCalculator {
    public add(numbers: string): number {
        let enteredNumbers: string = numbers.trim();
        let sum: number = 0;
        const delimiters: string[] = [];
        const negativeNumbers: number[] = [];

        // extract delimiter from entered numbers string
        if (enteredNumbers.startsWith('//')) {
            // extract delimiter
            const delimiterBox: string = enteredNumbers.substring(2, enteredNumbers.indexOf('\n'));
            // add custom delimiter to delimiters arr
            if (delimiterBox.startsWith('[') && delimiterBox.endsWith(']')) {
                delimiters.push(delimiterBox.substring(1, delimiterBox.indexOf(']')));
            } else {
                delimiters.push(delimiterBox);
            }
            // remove delimiter string from entered numbers
            enteredNumbers = enteredNumbers.substring(enteredNumbers.indexOf('\n') + 1);
        } else {
            // add default delimiter to delimiters arr
            delimiters.push(',');
        }

        // add \n delimiter delimiters arr if string contains\n
        if (enteredNumbers.includes('\n')) {
            delimiters.push('\n');
        }

        // make array from entered numbers by splitting with first delimiter
        let enteredNumbersArr: string[] = enteredNumbers.split(delimiters[0]);
        // create array which has items that do not contain delimiters
        for (let i = 1; i < delimiters.length; i++) {
            for (let currStrNumber of enteredNumbersArr) {
                if (currStrNumber.includes(delimiters[i])) {
                    // remove current element from enteredNumbersArr if it contains delimiter
                    enteredNumbersArr.splice(enteredNumbersArr.indexOf(currStrNumber), 1);
                    // add splitted current number by current delimiter
                    enteredNumbersArr = [...enteredNumbersArr, ...(currStrNumber.split(delimiters[i]))]
                }
            }
        }

        // calculate sum by using reduce method
        sum = enteredNumbersArr.reduce((sum, currStrNo) => {
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