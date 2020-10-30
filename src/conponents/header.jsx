import "../App.css";
import React from "react";
import { Button } from "./button";

export const Layout = ({ headerRef }) => {
  return (
    <header className="header">
      <Button ref={headerRef} />
    </header>
  );
};
