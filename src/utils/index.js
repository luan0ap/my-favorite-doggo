/**
 * Fill an array with zeros
 * @param n - expected array length
 * @returns Array
 */
export const filledEmptyArray = (n) => {
  const zerosArray = new Array(n)

  for (let i = 0; i < n; ++i) {
    zerosArray[i] = 0
  }

  return zerosArray
}
