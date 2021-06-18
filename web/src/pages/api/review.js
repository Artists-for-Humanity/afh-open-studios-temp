import axios from 'axios';

export default function handler(req, res) {
  const { body } = req;
  const { first_name, last_name, review, share_consent } = body;
  res.setHeader('Access-Control-Allow-Origin', '*');

  const currentVersion = new Date().toISOString().substring(0, 10);

  axios
    .post(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${currentVersion}/data/mutate/production`,
      {
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
      },
      {
        headers: { Authorization: `Bearer ${process.env.SANITY_API_TOKEN}` },
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
