class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number;
        if (enteredNumbers.includes(',')) {
            sum = 0;
            for (let currStrNo of enteredNumbers.split(",")) {
                // check number is negative
                if (+currStrNo < 0)
                    throw new Error("Negatives not allowed : " + currStrNo)
                // check number is alphabet
                if (isNaN(+currStrNo)) {
                    sum += (currStrNo.charCodeAt(0) - 96);
                } else {
                    sum += (+currStrNo);
                }
            }
        } else {
            sum = +enteredNumbers;
        }
        return sum;
    }
}
export default StringCalculator;