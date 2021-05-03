import get from 'lodash.get';
import ImageURLBuilder from '@sanity/image-url';

import client from '@client';

/**
 * Get given attribute from first element
 * in list.
 *
 * @param {any[]} l: list of elements
 * @param {string} attr: attribute to extract value from
 *
 * @return {any}
 */
export function getAttrFromFirst(l, attr) {
  for (const el of l) {
    const attribute = get(el, attr);

    if (attr) {
      return attribute;
    }
  }

  return null;
}

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
