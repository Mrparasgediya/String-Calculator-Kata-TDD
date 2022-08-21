class StringCalculator {
    public add(numbers: string): number {
        let enteredNumbers: string = numbers.trim();
        let sum: number;
        let delimiter: string = ',';

        // extract delimiter from entered numbers string
        if (enteredNumbers.startsWith('//')) {
            // extract delimiter
            const delimiterBox: string = enteredNumbers.substring(2, enteredNumbers.indexOf('\n'));
            if (delimiterBox.startsWith('[') && delimiterBox.endsWith(']')) {
                delimiter = delimiterBox.substring(1, delimiterBox.indexOf(']'));
            } else {
                delimiter = delimiterBox;
            }
            // remove delimiter string from entered numbers
            enteredNumbers = enteredNumbers.substring(enteredNumbers.indexOf('\n') + 1);
        }

        if (enteredNumbers.includes(delimiter)) {
            sum = 0;
            const negativeNumbers: number[] = [];
            const enteredNumbersArr: string[] = enteredNumbers.split(delimiter)
                .reduce(
                    (arr: string[], currStrNo: string) =>
                        [...arr,
                        ...(currStrNo.includes('\n')
                            ? currStrNo.split('\n')
                            : [currStrNo])
                        ], []);
            for (let currStrNo of enteredNumbersArr) {
                const convertedNo: number = +currStrNo;
                if (convertedNo > 1000) {
                    continue;
                }
                // check number is negative
                if (convertedNo < 0) {
                    negativeNumbers.push(convertedNo);
                    continue;
                }
                // check number is alphabet
                if (isNaN(convertedNo)) {
                    sum += (currStrNo.charCodeAt(0) - 96);
                } else {
                    sum += (convertedNo);
                }
            }
            if (negativeNumbers.length) {
                throw new Error(`Negatives not allowed : ${negativeNumbers.join(',')}`)
            }
        } else {
            sum = +enteredNumbers;
        }
        return sum;
    }
}
export default StringCalculator;