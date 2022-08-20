import StringCalculator from './StringCalculator'

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
            const expectedValue: number = inputValue.split(',')
                .reduce((sum: number, currStrNo: string) => (sum + (+currStrNo)), 0);
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered unlimited numbers seperated by ","', () => {
            const inputValue: string = "1,2,3,4,5";
            const expectedValue: number = inputValue.split(',')
                .reduce((sum: number, currStrNo: string) => (sum + (+currStrNo)), 0);
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })

        it('should return addition of entered numbers along with alphabets(take its position value) seperated by ","', () => {
            const inputValue: string = "1,2,b,4,a";
            const expectedValue: number = inputValue.split(',').reduce((sum: number, currStrNo: string) => {
                if (isNaN(+currStrNo)) {
                    return (sum + (currStrNo.charCodeAt(0) - 96))
                } else {
                    return (sum + (+currStrNo))
                }
            }, 0)
            const resultValue: number = stringCalculator.add(inputValue);
            expect(resultValue).toBe(expectedValue);
        })
    })
})