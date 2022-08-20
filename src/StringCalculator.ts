class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        if (enteredNumbers === "") {
            return 0;
        }
        return +enteredNumbers;
    }
}
export default StringCalculator;