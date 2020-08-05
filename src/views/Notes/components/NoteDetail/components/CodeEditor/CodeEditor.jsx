import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-kuroir";

import './CodeEditor.scss';

const CodeEditor = () => {
  const editorChangeHandler = (value) => {};

  return (
    <AceEditor
      mode="javascript"
      theme="kuroir"
      onChange={editorChangeHandler}
      name="NOTE_CODE_EDITOR"
      width="100%"
      height="194px"
      fontSize="14px"
      className="code-editor"
    />
  );
};

export default CodeEditor;
