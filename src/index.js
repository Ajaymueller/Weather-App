
import React from "react";
import "./index.css";
import { render } from "react-dom";
import App from "./components/app";
import { location } from './data/forecast.json';


render(<App location={location} />, document.getElementById("root"));