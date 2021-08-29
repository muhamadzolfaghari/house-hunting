/**
 * Add zeros digits to the passed number with minimum digits.
 * @param num
 * @param minDigits
 */
const getNumWithMinDigits = (num: number | string) =>
  num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });



export default getNumWithMinDigits;
