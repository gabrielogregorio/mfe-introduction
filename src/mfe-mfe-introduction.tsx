import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./index";
import "./tailwind.css";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: any) => {
    return <App />;
  },
  errorBoundary() {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
