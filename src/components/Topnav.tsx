import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Topnav.scss";

const Topnav: React.FC<{
  toggleMenuButtonVisible: boolean;
  className?: string;
}> = ({ toggleMenuButtonVisible = false, className }) => {
  const Navigate = useNavigate();
  return (
    <div className={`topnav ${className || ""}`}>
      <svg
        className="icon"
        style={{ cursor: "pointer" }}
        onClick={() => {
          Navigate("/");
        }}
      >
        <use xlinkHref="#icon-Cheese"></use>
      </svg>
      <ul className="menu">
        <Link to="/doc">文档</Link>
      </ul>
      {toggleMenuButtonVisible && (
        <svg className="toggleAside">
          <use xlinkHref="#icon-menu"></use>
        </svg>
      )}
    </div>
  );
};

export default Topnav;
