
export const getDelimitersArr = (string: string = '', defaultDelimiter: string = ","): string[] => {
    const delimitersArr: string[] = [defaultDelimiter];
    if (string.includes("\n")) {
        delimitersArr.push('\n');
    }
    return delimitersArr;
} 