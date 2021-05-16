import React from 'react';
import { Sidebar } from '@components';

const IntroductionSidebar = ({ className, title, description, cta }) => {
  return (
    <Sidebar
      title={title}
      description={description}
      cta={cta}
      ctaHref="/studios"
    />
  );
};

export default IntroductionSidebar;
