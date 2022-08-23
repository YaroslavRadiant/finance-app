import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSharesToState } from "../../store/actions/sharesActions";
import { io } from "socket.io-client";

import ShareItem from "../../components/ShareItem/ShareItem";
import CheckboxArea from "../../components/CheckboxArea/CheckboxArea";

const socket = io("http://localhost:4000");

export default function HomePage() {
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

  const renderShareArray = () => {
    return shareArray.map((el) => {
      return <ShareItem key={el.ticker} price={el.price} ticker={el.ticker} />;
    });
  };
  return (
    <div className="page_wrapper">
      <CheckboxArea shareArray={shareArray} />
      {shareArray ? renderShareArray() : <div>Nothing</div>}
    </div>
  );
}
