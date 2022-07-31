import React, { useState } from "react";
import Demo from "../Demo";
import { Button } from "../../lib";

import "./ButtonDemo.scss";

const ButtonDemo: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <h1>Button 组件示例</h1>
      <Demo title="示例1">
        <React.Fragment>
          <Button>hello</Button>
          <Button theme="button">hello</Button>
          <Button theme="link">hello</Button>
          <Button theme="text">hello</Button>
        </React.Fragment>
      </Demo>
      <Demo title="示例2">
        <React.Fragment>
          <Button>hello</Button>
          <Button size="big">hello</Button>
          <Button size="small">hello</Button>
        </React.Fragment>
      </Demo>
      <Demo title="示例3">
        <React.Fragment>
          <div>
            <div>
              <Button level="main">主要按钮</Button>
              <Button>普通按钮</Button>
              <Button level="danger">危险按钮</Button>
            </div>
            <div>
              <Button theme="link" level="main">
                主要链接按钮
              </Button>
              <Button theme="link">普通链接按钮</Button>
              <Button theme="link" level="danger">
                危险链接按钮
              </Button>
            </div>
            <div>
              <Button theme="text" level="main">
                主要文字按钮
              </Button>
              <Button theme="text">普通文字按钮</Button>
              <Button theme="text" level="danger">
                危险文字按钮
              </Button>
            </div>
          </div>
        </React.Fragment>
      </Demo>
      <Demo title="示例4">
        <React.Fragment>
          <Button disabled>禁用按钮</Button>
          <Button theme="link" disabled>
            禁用链接按钮
          </Button>
          <Button theme="text" disabled>
            禁用按钮
          </Button>
        </React.Fragment>
      </Demo>
      <Demo title="示例5">
        <React.Fragment>
          <div>
            <Button loading>加载中</Button>
            <Button>加载完毕</Button>
          </div>
        </React.Fragment>
      </Demo>
    </React.Fragment>
  );
};

export default ButtonDemo;
