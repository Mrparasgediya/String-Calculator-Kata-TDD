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
    })
})