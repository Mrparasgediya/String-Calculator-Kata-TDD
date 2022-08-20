import StringCalculator from './StringCalculator'

it("should return zero if string is empty", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    const inputValue: string = "";
    const expectedValue: number = +inputValue;
    const resultValue: number = stringCalculator.add(inputValue);
    expect(resultValue).toBe(expectedValue)
})

it('should return number itself if only one number is entered as argument', () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    const inputValue: string = "2";
    const expectedValue: number = +inputValue;
    const resultvalue: number = stringCalculator.add(inputValue);
    expect(resultvalue).toBe(expectedValue);
})