export const getAllCount = (value1: string, value2: string): string => {
    if (value1 === '' || value2 === '') return '';

    const num1 = value1.slice(0, value1.length - 1);
    const num2 = value2.slice(0, value2.length - 1);
 
    return (+num1 + +num2).toString() + '개';
}