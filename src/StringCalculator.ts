class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number;
        if (enteredNumbers.includes(',')) {
            sum = 0;
            const negativeNumbers: number[] = [];
            const enteredNumbersArr: string[] = enteredNumbers.split(",")
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