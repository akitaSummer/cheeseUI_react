import React, { useState } from "react";
import Demo from "../Demo";
import { Button, Dialog } from "../../lib";

import "./DialogDemo.scss";

const DialogDemo: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <h1>Dialog 组件示例</h1>
      <Demo title="示例1">
        <React.Fragment>
          <Button
            onClick={() => {
              setVisible(true);
            }}
          >
            hello
          </Button>
          <Dialog
            title="title"
            visible={visible}
            onClickOverlay={() => {
              setVisible(false);
            }}
            ok={() => {
              setVisible(false);
            }}
            cancel={() => {
              setVisible(false);
            }}
          >
            <div>hello</div>
          </Dialog>
        </React.Fragment>
      </Demo>
    </React.Fragment>
  );
};

export default DialogDemo;
