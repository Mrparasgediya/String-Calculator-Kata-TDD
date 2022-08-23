import StringCalculator from './StringCalculator'

describe("StringCalculator", () => {
    describe('add()', () => {
        let stringCalculator: StringCalculator;

        beforeAll(() => {
            stringCalculator = new StringCalculator();
        })

        it("should return zero if string is empty", () => {
            const inputValue: string = "";
            const expectedValue: number = 0;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue)
        })

        it('should return number itself if only one number is entered as argument', () => {
            const inputValue: string = "2";
            const expectedValue: number = 2;
            const resultvalue: number = stringCalculator.add(inputValue);
            expect(resultvalue).toBe(expectedValue);
        })

        it('should return addition of entered two numbers seperated by ","', () => {
            const inputValue: string = "1,2";
            const expectedValue: number = 3;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered unlimited numbers seperated by ","', () => {
            const inputValue: string = "1,2,3,4,5";
            const expectedValue: number = 15;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered numbers along with alphabets(take its position value) seperated by ","', () => {
            const inputValue: string = "1,2,b,4,a";
            const expectedValue: number = 10;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should throw error if entered numbers contains one negative number', () => {
            const inputValue: string = '1,-2';
            const expectedErrorMessage: string = `Negatives not allowed : -2`;
            const resultFunc = () => stringCalculator.add(inputValue);
            expect(resultFunc).toThrowError(expectedErrorMessage);
        })

        it('should throw error if entered numbers contains multiple negative numbers', () => {
            const inputValue: string = "1,-3,-4,-5";
            const expectedErrorMessage: string = `Negatives not allowed : -3,-4,-5`;
            const resultFunc = () => stringCalculator.add(inputValue);
            expect(resultFunc).toThrowError(expectedErrorMessage);
        })

        it('should return addition of entered numbers that are less then 1000', () => {
            const inputValue: string = '1,2,3999,5000';
            const expectedValue: number = 3;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers which are seperated by "," or "\\n"', () => {
            const inputValue: string = "1\n2,3";
            const expectedValue: number = 6;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers with entered delimiter like "//[delimiter]\\n[numbers…]" and delimiter length is 1', () => {
            const inputValue: string = `//;\n1;2;3`;
            const expectedValue: number = 6
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers with entered delimiter like "//[delimiter]\\n[numbers…]" and delimiter length is unlimited', () => {
            const inputValue: string = '//[***]\n1***2***3';
            const expectedValue: number = 6;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of odd indices if string starts with "0//"', () => {
            const inputValue: string = "0//[***]\n1***2***3";
            const expectedValue: number = 2;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of even indices if string starts with "1//"', () => {
            const inputValue: string = "1//[***]\n1***2***3"
            const expectedValue: number = 4;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })
    })
})