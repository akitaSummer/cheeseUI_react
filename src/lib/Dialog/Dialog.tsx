import React, { useState } from "react";
import { createPortal, render } from "react-dom";

import { Button } from "../index";

import "./Dialog.scss";

interface DialogProps {
  visible: boolean;
  title?: string;
  onClickOverlay?: () => void;
  ok?: () => void;
  close?: () => void;
  cancel?: () => void;
}

const Dialog: React.FC<DialogProps & React.HTMLAttributes<HTMLDivElement>> = ({
  visible,
  onClickOverlay,
  ok,
  cancel,
  close,
  title,
  children,
}) => {
  const container = document.createElement("div");
  console.log(visible, "visible");
  return createPortal(
    visible ? (
      <>
        <div
          className="cheese-dialog-overlay"
          onClick={() => {
            onClickOverlay && onClickOverlay();
          }}
        ></div>
        <div className="cheese-dialog-wrapper">
          <div className="cheese-dialog">
            <header>
              <div className="title">{title || "提示"}</div>
              <span
                className="cheese-dialog-close"
                onClick={() => {
                  close && close();
                }}
              ></span>
            </header>
            <main>{children}</main>
            <footer>
              <Button
                level="main"
                onClick={() => {
                  ok && ok();
                }}
              >
                OK
              </Button>
              <Button
                onClick={() => {
                  cancel && cancel();
                }}
              >
                Cancel
              </Button>
            </footer>
          </div>
        </div>
      </>
    ) : (
      <></>
    ),
    container
  );
};

export default Dialog;
