import { getDelimitersArr } from './string'

describe('string utils', () => {
    describe('getDelimitersArr', () => {
        it('should return array with default delimiter "," if delimiter is not entered', () => {
            const expectedValue: string[] = [","];
            const resultValue: string[] = getDelimitersArr();
            expect(resultValue).toEqual(expectedValue);
        })

        it('should return array with delimiter \\n and default delimiter if entered string contains \\n', () => {
            const inputValue: string = "\n1,2";
            const expectedValue: string[] = [",", "\n"];
            const resultValue: string[] = getDelimitersArr(inputValue);
            expect(resultValue).toEqual(expectedValue);
        })
    });
})