class StringCalculator {
    public add(numbers: string): number {
        const enteredNumbers: string = numbers.trim();
        let sum: number;
        if (enteredNumbers.includes(',')) {
            sum = enteredNumbers.split(',')
                .reduce((sum: number, currStrNo: string) => {
                    if (isNaN(+currStrNo)) {
                        return (sum + (currStrNo.charCodeAt(0) - 96))
                    } else {
                        return (sum + (+currStrNo))
                    }
                }, 0);
        } else {
            sum = +enteredNumbers;
        }
        return sum;
    }
}
export default StringCalculator;