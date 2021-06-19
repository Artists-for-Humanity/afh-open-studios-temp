import fetch from 'isomorphic-unfetch';

const CURRENT_VERSION = new Date().toISOString().substring(0, 10);
const SANITY_MUTATE_URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${CURRENT_VERSION}/data/mutate/production`;

export async function post(type, data) {
  fetch(SANITY_MUTATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      ['Content-Type']: 'application/json',
    },
    body: JSON.stringify({
      mutations: [
        {
          create: {
            _type: type,
            ...data,
          },
        },
      ],
    }),
  });
}
