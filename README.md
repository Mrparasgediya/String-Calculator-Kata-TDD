# String Calculator
It is string calculator programme which is developed with Test Driven Development in Typescript

## Methods

**add(numbers: string):** This method returns addition of entered numbers seperated by delimiter in string 

**default delimiter : "," (comma)**

This method has following features
- You can use lower case alphabets for addition and here number value for alphabets is its position.
- It throws error "Negatives not allowed : [negativeNumbers]" if entered numbers has any negative numbers
- Here numbers which are greater then 1000 will be ignored in addition of numbers
- You can add you custom addition in format "//[delimiter]\n[numbers...]".
  - **note: Don’t use alphabets and numbers as delimiters.**
- You can also do addition of even/odd index numbers.
  - If numbers string starts with "0//" then it will do addition of odd index numbers
  -  If numbers string starts with "1//" then it will do addition of even index numbers
  -  Default it will do addition of all numbers

## Examples

### Do addition of all numbers
```
const calculator: StringCalculator = new StringCalculator();
let output: number = calculator.add("1,2,3");
console.log(output); // it will be 6
```

### Use custom delimiter
```
const calculator: StringCalculator = new StringCalculator();
let output: number = calculator.add("//;\n1;2;3");
console.log(output); // it will be 6
```

### Use custom delimiter with more then one character
```
const calculator: StringCalculator = new StringCalculator();
let output: number = calculator.add("//[***]\n1***2***3");
console.log(output); // it will be 6
```

### Do Even index numbers addition
```
const calculator: StringCalculator = new StringCalculator();
let output: number = calculator.add("1//;\n1;2;3");
console.log(output); // it will be 4
```

### Do Odd index numbers addition
```
const calculator: StringCalculator = new StringCalculator();
let output: number = calculator.add("0//;\n1;2;3");
console.log(output); // it will be 2
```

