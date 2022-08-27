import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import ShareItem from "../../components/ShareItem/ShareItem";
import CheckboxArea from "../../components/CheckboxArea/CheckboxArea";

export default function HomePage({ shareArray }) {
  const renderShareArray = useMemo(() => {
    return shareArray.map((el) => {
      return (
        <Link key={el.ticker} to={`${el.ticker}`} ticker={el.ticker}>
          <ShareItem price={el.price} ticker={el.ticker} />
        </Link>
      );
    });
  }, [shareArray]);

  return (
    <div className="page_wrapper">
      <CheckboxArea shareArray={shareArray} />
      {shareArray ? renderShareArray : <div>Nothing</div>}
    </div>
  );
}
