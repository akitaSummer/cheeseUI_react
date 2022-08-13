import React, { useEffect } from "react";
import Topnav from "../components/Topnav";
import ButtonDemo from "../components/ButtonDemo/ButtonDemo";
import DialogDemo from "../components/DialogDemo/DialogDemo";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./Doc.scss";
import { ReactComponent as Intro } from "../markdown/intro.md";
import { ReactComponent as Install } from "../markdown/install.md";
import { ReactComponent as GetStarted } from "../markdown/get-started.md";

const Doc: React.FC<{}> = () => {
  const location = useLocation();
  return (
    <>
      <Topnav className="nav" toggleMenuButtonVisible={true} />
      <div className="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li
              style={
                location.pathname === "/doc" ? { background: "white" } : {}
              }
            >
              <Link to="/doc">介绍</Link>
            </li>
            <li
              style={
                location.pathname === "/doc/install"
                  ? { background: "white" }
                  : {}
              }
            >
              <Link to="/doc/install">安装</Link>
            </li>
            <li
              style={
                location.pathname === "/doc/get-started"
                  ? { background: "white" }
                  : {}
              }
            >
              <Link to="/doc/get-started">开始使用</Link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li
              style={
                location.pathname === "/doc/switch"
                  ? { background: "white" }
                  : {}
              }
            >
              <Link to="/doc/switch">Switch 组件</Link>
            </li>
            <li
              style={
                location.pathname === "/doc/button"
                  ? { background: "white" }
                  : {}
              }
            >
              <Link to="/doc/button">Button 组件</Link>
            </li>
            <li
              style={
                location.pathname === "/doc/dialog"
                  ? { background: "white" }
                  : {}
              }
            >
              <Link to="/doc/dialog">Dialog 组件</Link>
            </li>
            <li
              style={
                location.pathname === "/doc/tabs" ? { background: "white" } : {}
              }
            >
              <Link to="/doc/tabs">Tabs 组件</Link>
            </li>
          </ol>
        </aside>
        <main className={"markdown-body"}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/install" element={<Install />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/dialog" element={<DialogDemo />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Doc;
