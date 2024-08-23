import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./assets/styles/custom.css";
import history from "./mangers/history";

const WebApp = () => {
  return (
    <HistoryRouter history={history}>
      <Routes />
    </HistoryRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WebApp />);
