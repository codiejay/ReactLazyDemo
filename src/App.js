import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Sheeps = React.lazy(() => import("./sheeps"));
const Cows = React.lazy(() => import("./cows"));
const Cats = React.lazy(() => import("./cats"));

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="sheep">sheep</Link>
        </li>
        <li>
          <Link to="cows">cows</Link>
        </li>
        <li>
          <Link to="cats">cats</Link>
        </li>
      </ul>

      <hr />

      <React.Suspense fallback={() => <p>loading...</p>}>
        <Routes>
          <Route exact path="sheep" element={<Sheeps />} />
          <Route exact path="cows" element={<Cows />} />
          <Route exact path="cats" element={<Cats />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}
