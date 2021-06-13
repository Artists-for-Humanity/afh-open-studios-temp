import axios from 'axios';

export default function handler(req, res) {
  const { body } = req;
  const { first_name, last_name, review, share_consent } = body;

  const currentVersion = new Date().toISOString().substring(0, 10);

  axios
    .post(
      `gethttps://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${currentVersion}/data/mutate/production`,
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
    .catch(console.log);

  res.status(200).send();
}
