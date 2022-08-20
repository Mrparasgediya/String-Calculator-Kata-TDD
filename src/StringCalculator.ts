class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number = 0;
        if (enteredNumbers.includes(',')) {
            sum = enteredNumbers.split(',')
                .reduce((sum: number, currStrNo: string) => (sum + (+currStrNo)), 0);
        } else {
            sum = +enteredNumbers;
        }
        return sum;
    }
}
export default StringCalculator;