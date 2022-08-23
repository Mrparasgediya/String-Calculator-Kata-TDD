import { AdditionMethods } from '../types/StringCalculator';
import { getNumbersArrayFromStringArray, getSumOfElementsByAdditionMethod } from './number'

describe('number utils', () => {
    describe('getNumbersArrayFromStringArray', () => {
        it.each([
            [["1", "2", "3"], [1, 2, 3]],
            [["5", "9", "10"], [5, 9, 10]],
            [["100", "2000", "30000"], [100, 2000, 30000]]
        ])('should return number array of entered string numbers array', (inputValue: string[], expectedValue: number[]) => {
            const resultValue: number[] = getNumbersArrayFromStringArray(inputValue);
            expect(resultValue).toEqual(expectedValue);
            expect(typeof resultValue[0]).toBe('number');
        })

        it.each([
            [["1", "a", "b"], [1, 1, 2]],
            [["10", "z", "c"], [10, 26, 3]],
            [["100000", "e", "d"], [100000, 5, 4]],
        ])('should returned array contains position values of alphabets if entered string array contains alphabets in lowercase', (inputValue: string[], expectedValue: number[]) => {
            const resultValue: number[] = getNumbersArrayFromStringArray(inputValue);
            expect(resultValue).toEqual(expectedValue);
            expect(typeof resultValue[1]).toBe('number');
        })
    })
    describe('getSumOfElementsByAdditionMethod', () => {

        it.each([
            [[1, 2, 3, 4], 4],
            [[10, 50, 20, 100], 30],
            [[1000, 2000, 4000, 12], 5000],
        ])('should return sum of even index numbers if addition method is EVEN', (inputValue: number[], expectedValue: number) => {
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.EVEN);
            expect(resultValue).toBe(expectedValue);
        })

        it.each([
            [[1, 2, 3, 4], 6],
            [[10, 50, 20, 100], 150],
            [[1000, 2000, 4000, 12], 2012],
        ])('should return sum of odd index numbers if addition method is ODD', (inputValue: number[], expectedValue: number) => {
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.ODD);
            expect(resultValue).toBe(expectedValue)
        })

        it.each([
            [[1, 2, 3, 4], 10],
            [[10, 50, 20, 100], 180],
            [[1000, 2000, 4000, 12], 7012],
        ])('should return sum of all index numbers if addition method is DEFAULT', (inputValue: number[], expectedValue: number) => {
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.DEFAULT);
            expect(resultValue).toBe(expectedValue)
        })
        it.each([
            [[1, 2, 1002, 5000], 3],
            [[10, 50, 20, 1001], 80],
            [[1000, 2000, 4000, 12], 1012],
        ])('should return sum of numbers if hasMaxValue is entered then less and equal then maxValue', (inputValue: number[], expectedValue: number) => {
            const resultValue: number = getSumOfElementsByAdditionMethod(inputValue, AdditionMethods.DEFAULT, true, 1000);
            expect(resultValue).toBe(expectedValue)
        })
    })
})