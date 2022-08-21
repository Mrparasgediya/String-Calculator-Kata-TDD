import { AdditionMethods } from '../types/StringCalculator';
import { getNumbersArrayFromStringArray, getSumOfElementsByAdditionMethod } from './number'

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
    describe('getSumOfElementsByAdditionMethod', () => {
        const inputValue: number[] = [1, 2, 3, 4];

        it('should return sum of even index numbers if addition method is EVEN', () => {
            const expectedValue: number = 4;
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.EVEN);
            expect(resultValue).toBe(expectedValue);
        })
        it('should return sum of odd index numbers if addition method is ODD', () => {
            const expectedValue: number = 6;
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.ODD);
            expect(resultValue).toBe(expectedValue)
        })
        it('should return sum of all index numbers if addition method is DEFAULT', () => {
            const expectedValue: number = 10;
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.DEFAULT);
            expect(resultValue).toBe(expectedValue)
        })
    })
})