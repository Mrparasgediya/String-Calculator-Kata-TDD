class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number = 0;
        if (enteredNumbers.includes(',')) {
            const splittedArray: string[] = enteredNumbers.split(',');
            return ((+splittedArray[0]) + (+splittedArray[1]));
        } else {
            sum = +enteredNumbers;
        }
        return sum;
    }
}
export default StringCalculator;