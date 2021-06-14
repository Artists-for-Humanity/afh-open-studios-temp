import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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

/**
 * Get next studio given current one.
 *
 * @param {string} current: slug of current studio
 * @param {array} studios: ordered list of all studios
 *
 * @return {object} next studio
 */
export function getNextStudio(current, studios) {
  let isNext = false;

  for (const s of studios) {
    const slug = s.slug.current;

    if (isNext) {
      return {
        title: s.short_title,
        path: `/studios/${slug}`,
      };
    }

    if (slug === current) {
      isNext = true;
    }
  }

  return {
    title: 'Gallery',
    path: '/gallery',
  };
}

export function isLastVisitOutdated() {
  const lastVisit = window.localStorage.getItem('lastVisit');

  if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const now = new Date();

    const timeDifference = now.getTime() - lastVisitDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference > 6;
  }

  return true;
}

export function useCheckIn() {
  const router = useRouter();

  useEffect(() => {
    if (isLastVisitOutdated()) {
      router.replace('/check-in');
    }
  }, []);
}
