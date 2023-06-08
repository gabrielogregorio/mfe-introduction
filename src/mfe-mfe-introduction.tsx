import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./index";
import { AcceptAudioProvider } from "./contexts/acceptAudio";
import "./tailwind.css";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => {
    return (
      <AcceptAudioProvider>
        <App />;
      </AcceptAudioProvider>
    );
  },
  errorBoundary() {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
