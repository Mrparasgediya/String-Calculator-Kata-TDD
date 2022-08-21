import { getDelimitersArr, getArrayFromString } from './string'

describe('string utils', () => {
    describe('getDelimitersArr', () => {
        it('should return array with default delimiter "," if delimiter is not entered', () => {
            const expectedValue: string[] = [","];
            const resultValue: string[] = getDelimitersArr();
            expect(resultValue).toEqual(expectedValue);
        })

        it('should return array with delimiter \\n and default delimiter if entered string contains \\n', () => {
            const inputValue: string = "\n1,2";
            const expectedValue: string[] = ["\n", ","];
            const resultValue: string[] = getDelimitersArr(inputValue);
            expect(resultValue).toEqual(expectedValue);
        })

        it('should return array of delimiter from entered string if it starts with "//delimiter\\n[numbers...]"', () => {
            const inputValue: string = "//:\n1:2:3";
            const expectedValue: string[] = [":"];
            const resultValue: string[] = getDelimitersArr(inputValue);
            expect(resultValue).toEqual(expectedValue);
        })

        it('should return array of delimiter from entered string if it starts with "//[delimiter]\\n[numbers...]"', () => {
            const inputValue: string = "//[==]\n1==2==3";
            const expectedValue: string[] = ["=="];
            const resultValue: string[] = getDelimitersArr(inputValue);
            expect(resultValue).toEqual(expectedValue);
        })
    });

    describe('getArrayFromString', () => {
        it('should return array if string contains delimiters', () => {
            const delimitersArr: string[] = ["\n", "=="];
            const numbersString: string = "1==2\n4==3==4";
            const expectedValue: string[] = numbersString
                .split(delimitersArr[0])
                .reduce(
                    (arr: string[], currStr: string) =>
                        [
                            ...arr,
                            ...(
                                currStr.includes(delimitersArr[1])
                                    ? (currStr.split(delimitersArr[1]))
                                    : [currStr]
                            )
                        ],
                    [])
            const resultValue: string[] = getArrayFromString(numbersString, delimitersArr);
            expect(resultValue).toEqual(expectedValue);
        })
    })
})