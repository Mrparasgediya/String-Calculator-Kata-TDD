import StringCalculator from './StringCalculator'

const getSumFromStringArr = (arr: string[]) =>
    arr
        .reduce((sum: number, currStrNo: string) => {
            if (isNaN(+currStrNo)) {
                return (sum + (currStrNo.charCodeAt(0) - 96))
            } else {
                return (sum + (+currStrNo))
            }
        }, 0);

describe("StringCalculator", () => {
    describe('add()', () => {
        let stringCalculator: StringCalculator;

        beforeAll(() => {
            stringCalculator = new StringCalculator();
        })

        it("should return zero if string is empty", () => {
            const inputValue: string = "";
            const expectedValue: number = +inputValue;
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue)
        })

        it('should return number itself if only one number is entered as argument', () => {
            const inputValue: string = "2";
            const expectedValue: number = +inputValue;
            const resultvalue: number = stringCalculator.add(inputValue);
            expect(resultvalue).toBe(expectedValue);
        })

        it('should return addition of entered two numbers seperated by ","', () => {
            const inputValue: string = "1,2";
            const expectedValue: number = getSumFromStringArr(inputValue.split(','));
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered unlimited numbers seperated by ","', () => {
            const inputValue: string = "1,2,3,4,5";
            const expectedValue: number = getSumFromStringArr(inputValue.split(','));
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered numbers along with alphabets(take its position value) seperated by ","', () => {
            const inputValue: string = "1,2,b,4,a";
            const expectedValue: number = getSumFromStringArr(inputValue.split(','));
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should throw error if entered numbers contains one negative number', () => {
            const inputValue: string = '1,-2';
            const expectedErrorMessage: string = `Negatives not allowed : ${inputValue.split(',').filter(currNo => +currNo < 0).join(',')}`;
            const resultFunc = () => stringCalculator.add(inputValue);
            expect(resultFunc).toThrowError(expectedErrorMessage);
        })

        it('should throw error if entered numbers contains multiple negative numbers', () => {
            const inputValue: string = "1,-3,-4,-5";
            const expectedErrorMessage: string = `Negatives not allowed : ${inputValue.split(',').filter(currNo => +currNo < 0).join(',')}`
            const resultFunc = () => stringCalculator.add(inputValue);
            expect(resultFunc).toThrowError(expectedErrorMessage);
        })

        it('should return addition of entered numbers that are less then 1000', () => {
            const inputValue: string = '1,2,3999,5000';
            const expectedValue: number = getSumFromStringArr(inputValue.split(',').filter(currNo => +currNo < 1000))
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers which are seperated by "," or "\\n"', () => {
            const inputValue: string = "1\n2,3";
            const expectedValue: number = getSumFromStringArr(inputValue.split(',').reduce((arr: string[], currStrNo: string) => [...arr, ...(currStrNo.includes('\n') ? currStrNo.split('\n') : [currStrNo])], []))
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers with entered delimiter like "//[delimiter]\\n[numbers…]" and delimiter length is 1', () => {
            const stringNumbers: string = "1;2;3";
            const delimiter: string = ";";
            const inputValue: string = `//${delimiter}\n${stringNumbers}`;
            const expectedValue: number = getSumFromStringArr(stringNumbers.split(delimiter));
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of numbers with entered delimiter like "//[delimiter]\\n[numbers…]" and delimiter length is unlimited', () => {
            const delimiter: string = "***";
            const stringNumbers: string = `1${delimiter}2${delimiter}3`;
            const inputValue: string = `//[${delimiter}]\n${stringNumbers}`;
            const expectedValue: number = getSumFromStringArr(stringNumbers.split(delimiter));
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of odd indices if string starts with "0//"', () => {
            const delimiter: string = '***';
            const stringNumbers: string = `1${delimiter}2${delimiter}3${delimiter}`
            const inputValue: string = `0//${delimiter}\n${stringNumbers}`
            const expectedValue: number = stringNumbers.split(delimiter)
                .reduce(
                    (sum: number, currStrNo: string, currIdx) =>
                        currIdx % 2 !== 0
                            ? (sum + (+currStrNo))
                            : sum
                    , 0)
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of even indices if string starts with "1//"', () => {
            const delimiter: string = '***';
            const stringNumbers: string = `1${delimiter}2${delimiter}3${delimiter}`
            const inputValue: string = `1//${delimiter}\n${stringNumbers}`
            const expectedValue: number = stringNumbers.split(delimiter)
                .reduce(
                    (sum: number, currStrNo: string, currIdx) =>
                        currIdx % 2 === 0
                            ? (sum + (+currStrNo))
                            : sum
                    , 0)
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })
    })
})