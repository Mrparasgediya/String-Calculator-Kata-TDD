import StringCalculator from './StringCalculator'

it("should return zero if string is empty", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    const inputValue: string = "";
    const expectedValue: number = +inputValue;
    const resultValue: number = stringCalculator.add(inputValue);
    expect(resultValue).toBe(expectedValue)
})