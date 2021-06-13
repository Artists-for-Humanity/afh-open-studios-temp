import axios from 'axios';

export default function handler(req, res) {
  const { body } = req;
  const {
    first_name,
    last_name,
    email_address,
    hear_about_tour,
    opt_in_newsletter,
  } = body;

  const currentVersion = new Date().toISOString().substring(0, 10);

  axios
    .post(
      `gethttps://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v${currentVersion}/data/mutate/production`,
      {
        mutations: [
          {
            create: {
              _type: 'visitorRecord',
              first_name,
              last_name,
              email_address,
              hear_about_tour,
              opt_in_newsletter,
              date_time: new Date().toISOString(),
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
