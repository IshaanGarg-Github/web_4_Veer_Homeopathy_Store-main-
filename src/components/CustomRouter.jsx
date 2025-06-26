import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";

const hostname = window.location.hostname;
const pathname = window.location.pathname;

// GitHub Pages → HashRouter
const isGitHubPages = hostname.endsWith("github.io");

// Local test for GitHub Pages structure (e.g. localhost:5173/web_.../)
const isLocalGitHubStyle = hostname === "localhost" && pathname.includes("/web_");

// Final router
const useHashRouter = isGitHubPages || isLocalGitHubStyle;

const CustomRouter = ({ children }) => {
  return useHashRouter ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

export default CustomRouter;
