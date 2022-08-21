import { getDelimitersArr, getArrayFromString, getAdditionMethod } from './string'
import { AdditionMethods } from '../types/StringCalculator'

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
        it('should return array contains only entered string if delimiter is no matched', () => {
            const delimitersArr: string[] = ["\n", "=="];
            const numbersString: string = "1=2=4=3=4";
            const expectedValue: string[] = [numbersString];
            const resultvalue: string[] = getArrayFromString(numbersString, delimitersArr);
            expect(resultvalue).toEqual(expectedValue);
        })
    })

    describe('getAdditionMethod', () => {
        it('should return ODD addition method if entered string starts with "0//"', () => {
            const inputValue: string = "0//";
            const expectedValue: AdditionMethods = AdditionMethods.ODD;
            const resultValue: AdditionMethods = getAdditionMethod(inputValue);
            expect(resultValue).toBe(expectedValue);
        })
        it('should return EVEN addition method if entered string starts with "1//"', () => {
            const inputValue: string = "1//";
            const expectedValue: AdditionMethods = AdditionMethods.EVEN;
            const resultValue: AdditionMethods = getAdditionMethod(inputValue);
            expect(resultValue).toBe(expectedValue);
        })
    })
})