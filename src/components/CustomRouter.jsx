// CustomRouter.jsx
import React from "react";
import {
  BrowserRouter,
  HashRouter
} from "react-router-dom";

// Detect host and choose router
const CustomRouter = ({ children }) => {
  const isGitHub = window.location.hostname.includes("github.io");
  return isGitHub ? <HashRouter>{children}</HashRouter> : <BrowserRouter>{children}</BrowserRouter>;
};

export default CustomRouter;
