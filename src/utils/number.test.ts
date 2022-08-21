import { getNumbersArrayFromStringArray } from './number'

describe('number utils', () => {
    describe('getNumbersArrayFromStringArray', () => {
        it('should return number array of entered string numbers array', () => {
            const inputValue: string[] = ["1", "2", "3"];
            const expectedValue: number[] = [1, 2, 3];
            const resultValue: number[] = getNumbersArrayFromStringArray(inputValue);
            expect(resultValue).toEqual(resultValue);
            expect(typeof resultValue[0]).toBe('number');
        })
    })
})