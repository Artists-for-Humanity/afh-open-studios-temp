import axios from 'axios';
import fetch from 'isomorphic-unfetch';

export default function handler(req, res) {
  const { body } = req;
  const { first_name, last_name, review, share_consent } = body;
  res.setHeader('Access-Control-Allow-Origin', '*');

  const currentVersion = new Date().toISOString().substring(0, 10);

  fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${currentVersion}/data/mutate/production`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: 'review',
              first_name,
              last_name,
              review,
              share_consent,
            },
          },
        ],
      }),
    },
  )
    .then((e) => {
      console.log('success');
      console.log(JSON.stringify(e));
    })
    .catch((e) => {
      console.log('error');
      console.log(JSON.stringify(e));
    })
    .finally(res.status(200).send());
}
