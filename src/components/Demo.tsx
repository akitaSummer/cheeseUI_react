import React, { useState } from "react";
import "prismjs";
import "prismjs/themes/prism.css";
import reactElementToJSXString from "react-element-to-jsx-string";

import { Button } from "../lib";

import "./Demo.scss";

const Demo: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [codeVisible, setCodeVisible] = useState(true);
  // @ts-ignore
  const Prism = window.Prism;
  const html = Prism.highlight(
    reactElementToJSXString(children, { showFunctions: true }),
    Prism.languages.html,
    "html"
  );
  return (
    <div className="demo">
      <h2>{title}</h2>
      <div className="demo-component">{children}</div>
      <div className="demo-actions">
        <Button
          onClick={() => {
            setCodeVisible(!codeVisible);
          }}
        >
          {codeVisible ? "隐藏代码" : "查看代码"}
        </Button>
      </div>
      {codeVisible && (
        <div className="demo-code">
          <pre
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></pre>
        </div>
      )}
    </div>
  );
};

export default Demo;
