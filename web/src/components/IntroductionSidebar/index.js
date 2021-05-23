import React from 'react';
import { Sidebar } from '@components';

const IntroductionSidebar = ({ className, title, description, cta }) => {
  return (
    <Sidebar
      className={className}
      title={title}
      description={description}
      cta={cta}
      ctaHref="/studios"
    />
  );
};

export default IntroductionSidebar;
