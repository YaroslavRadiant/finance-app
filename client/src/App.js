import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout";

import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes className="rout-section">
        <Route path="/" element={<Navigate to="/My-finances" />} />
        <Route path="/" element={<Layout></Layout>}>
          <Route path="My-finances" element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
