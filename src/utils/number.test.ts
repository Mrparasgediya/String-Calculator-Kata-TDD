import { getNumbersArrayFromStringArray } from './number'

describe('number utils', () => {
    describe('getNumbersArrayFromStringArray', () => {
        it('should return number array of entered string numbers array', () => {
            const inputValue: string[] = ["1", "2", "3"];
            const expectedValue: number[] = [1, 2, 3];
            const resultValue: number[] = getNumbersArrayFromStringArray(inputValue);
            expect(resultValue).toEqual(expectedValue);
            expect(typeof resultValue[0]).toBe('number');
        })
        it('should returned array contains position values of alphabets if entered string array contains alphabets in lowercase', () => {
            const inputValue: string[] = ["1", "a", "b"];
            const expectedValue: number[] = [1, 1, 2];
            const resultValue: number[] = getNumbersArrayFromStringArray(inputValue);
            expect(resultValue).toEqual(expectedValue);
            expect(typeof resultValue[1]).toBe('number');
        })
    })
})