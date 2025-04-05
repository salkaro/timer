export function validateNumber(value: string): boolean {
    const regex = /^[0-9]+$/;
    return regex.test(value);
}