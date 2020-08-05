import React, { forwardRef } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const ConditionalTag = forwardRef((props, ref) => {
  if (props.multiline) {
    return <TextareaAutosize ref={ref} {...props} />;
  }

  return <input ref={ref} {...props} />;
});

export default ConditionalTag;
