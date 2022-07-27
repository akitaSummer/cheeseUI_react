import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import "./Home.scss";

const Home: React.FC<{}> = () => {
  return (
    <>
      <div className="topnavAndBanner">
        <Topnav toggleMenuButtonVisible={false} />
        <div className="banner">
          <h1>cheese UI</h1>
          <h2>cheese UI</h2>
          <p className="actions">
            <a href="https://github.com/akitaSummer">Github</a>
            <Link to="/doc">开始</Link>
          </p>
        </div>
      </div>
      <div className="features">
        <ul>
          <li>
            <svg className="icon">
              <use xlinkHref="#icon-React"></use>
            </svg>
            <h3>基于 React</h3>
            <p>使用了 React Hooks 编写</p>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#icon-typescript-def"></use>
            </svg>
            <h3>基于 TypeScript</h3>
            <p>源码采用 TypeScript</p>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#icon-flexible-and-easy"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件代码都易于阅读</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
