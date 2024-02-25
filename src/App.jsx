import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          const Layout = route.layout || <></>;
          return (
            <Route key={index} {...rest} element={<Layout>{element}</Layout>} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
