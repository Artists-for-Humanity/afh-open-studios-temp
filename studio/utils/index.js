import ImageURLBuilder from '@sanity/image-url';

import client from '../client';

/**
 * Get image URL from Sanity asset ref.
 *
 * @param {string} source: Sanity asset ref
 *
 * @return {string} image URL
 */
export function getImageUrl(source) {
  const imageURLBuilder = ImageURLBuilder(client);
  return imageURLBuilder.image(source);
}

/**
 * Math.min and Math.max on given value.
 *
 * @param {number} min: lower bound
 * @param {number} value
 * @param {number} max: upper bound
 *
 * @return {number}
 */
export function minmax(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Get percentage of x over y.
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {number} percentage of x over y
 */
export function getPercentage(x, y) {
  return Math.round((x / y) * 100);
}

/**
 * Remove element with given index.
 *
 * @param {any[]} arr
 * @param {number} index
 *
 * @return {any[]}
 */
export function removeByIndex(arr, index) {
  return arr.filter((_, i) => i !== index);
}
