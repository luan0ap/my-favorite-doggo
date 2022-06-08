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

/**
 * Get Computed style of an element
 * @param {Element} $el
 * @returns CSSStyleDeclaration
 */
export const getComputedStyle = ($el = document.documentElement) => window.getComputedStyle($el)

/**
 * Get variable from computed style
 * @param {CSSStyleDeclaration} style
 * @param {String} variable
 * @returns
 */
export const getStyleVariable = (style, variable) => style.getPropertyValue(variable)
