import React from 'react';
import PropTypes from 'prop-types';

import { withDocument } from 'part:@sanity/form-builder';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const Content = React.forwardRef((props, ref) => {
  console.log(props.document);
  return <div ref={ref}>Title</div>;
});

Content.focus = () => {
  this._inputElement.focus();
};

export default withDocument(Content);
