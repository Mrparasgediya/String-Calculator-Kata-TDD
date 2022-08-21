import { getDelimitersArr } from './string'

describe('string utils', () => {
    describe('getDelimitersArr', () => {
        it('should return array with default delimiter "," if delimiter is not entered', () => {
            const expectedValue: string[] = [","];
            const resultValue: string[] = getDelimitersArr();
            expect(resultValue).toEqual(expectedValue);
        })
    });
})