import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          const Layout = route.layout || React.Fragment;
          return (
            <Route key={index} {...rest} element={<Layout>{element}</Layout>} />
          );
        })}
      </Routes>
    </Router>
  );
}
