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

export function minmax(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

export function getPercentage(x, y) {
  return Math.round((x / y) * 100);
}

export function removeByIndex(arr, index) {
  return arr.filter((_, i) => i !== index);
}
