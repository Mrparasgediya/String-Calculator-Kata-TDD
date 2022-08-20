class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number;
        if (enteredNumbers.includes(',')) {
            sum = 0;
            const negativeNumbers: number[] = [];
            for (let currStrNo of enteredNumbers.split(",")) {
                const convertedNo: number = +currStrNo;
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