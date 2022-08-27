import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout";

import { useDispatch } from "react-redux";
import { addSharesToState } from "./store/actions/sharesActions";
import { io } from "socket.io-client";

import "./App.css";
import ShareChart from "./components/ShareChart/ShareChart";

const socket = io("http://localhost:4000");

function App() {
  const [shareArray, setShareArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("start", (msg) => console.info("msg"));

    socket.on("ticker", (data) => {
      setShareArray([...data]);
      dispatch(addSharesToState(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <Routes className="rout-section">
      <Route index element={<Navigate to="/My-finances" />} />
      <Route element={<Layout></Layout>}>
        <Route
          path="My-finances"
          element={<HomePage shareArray={shareArray} />}
        />
        <Route path="My-finances/:ticker" element={<ShareChart />} />
      </Route>
    </Routes>
  );
}

export default App;
