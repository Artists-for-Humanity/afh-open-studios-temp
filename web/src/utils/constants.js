const EXCLUDE_DRAFTS = `!(_id in path('drafts.**'))`;

const STUDIOS_LIST = `
    *[_type == 'studio' && ${EXCLUDE_DRAFTS}] {
      short_title,
      slug
    }
  `;

export const GROQ = {
  EXCLUDE_DRAFTS,
  STUDIOS_LIST,
};
