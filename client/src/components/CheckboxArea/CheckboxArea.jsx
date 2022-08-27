import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CheckboxItem from "../CheckboxItem/CheckboxItem";

import "./CheckboxArea.css";

export default function CheckboxArea({ shareArray }) {
  
  const mapShareList = useMemo(() => {
    return shareArray.map((el) => {
      return <CheckboxItem key={el.ticker} ticker={el.ticker} />;
    });
  }, [shareArray]);

  return <div className="checkbox_area">{mapShareList}</div>;
}

CheckboxArea.propTypes = {
  shareArray: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string,
    })
  ),
};
