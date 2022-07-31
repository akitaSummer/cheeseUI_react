import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export const injectSourceCode = <T>(fn: React.FC<T>) => {
  // @ts-ignore
  fn.__sourceCode = reactElementToJSXString(fn);
  return fn;
};
