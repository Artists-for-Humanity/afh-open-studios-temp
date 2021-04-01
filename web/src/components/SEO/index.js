import React from 'react';
import Head from 'next/head';

import { getImageUrl } from '@utils';
import s from './styles.module.scss';

const Title = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
    </Head>
  );
};

const Description = ({ description }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

const Image = ({ image }) => {
  return (
    <Head>
      <meta property="twitter:image" content={image} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

const SEO = ({ className, seo }) => {
  const { title, description, imageRef } = seo;
  const image = getImageUrl(imageRef);

  return (
    <>
      {title && <Title title={title} />}
      {description && <Description description={description} />}
      {image && <Image image={image} />}
    </>
  );
};

export default SEO;
