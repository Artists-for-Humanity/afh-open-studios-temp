import get from 'lodash.get';

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
  return get(l, `0.${attr}`);
}
