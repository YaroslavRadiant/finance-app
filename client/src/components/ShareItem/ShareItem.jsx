import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  getСhangeSharePriceSelector,
  getСhangeOfPercentSelector,
} from "../../store/reducers/selectors";

import "./ShareItem.css";

export default function ShareItem({ ticker, price }) {
  const shares = useSelector((state) => state.shares);
  const checks = useSelector((state) => state.sharesStatus);

  const renderFromStatus = () => {
    if (checks.length) {
      let checkboxStatus = checks.find(
        (item) => Object.keys(item)[0] === ticker
      );
      if (Object.values(checkboxStatus)[0]) {
        return true;
      } else if (!Object.values(checkboxStatus)[0]) {
        return false;
      }
    }
  };
  renderFromStatus();
  const renderItemPriceChange = () => {
    return typeof getСhangeSharePriceSelector(shares, ticker) === "string"
      ? getСhangeSharePriceSelector(shares, ticker) + "$"
      : "Loading data...";
  };

  const setArrowColorClass = () => {
    if (
      getСhangeSharePriceSelector(shares, ticker) &&
      getСhangeSharePriceSelector(shares, ticker) > 0
    ) {
      return "share_item__arrow_green";
    } else if (
      getСhangeSharePriceSelector(shares, ticker) &&
      getСhangeSharePriceSelector(shares, ticker) < 0
    ) {
      return "share_item__arrow_red";
    } else if (getСhangeSharePriceSelector(shares, ticker)) {
      return;
    }
  };

  const setTextColorClass = () => {
    if (
      typeof getСhangeSharePriceSelector(shares, ticker) === "string" &&
      getСhangeSharePriceSelector(shares, ticker) > 0
    ) {
      return "share_item__text_green";
    } else if (
      typeof getСhangeSharePriceSelector(shares, ticker) === "string" &&
      getСhangeSharePriceSelector(shares, ticker) < 0
    ) {
      return "share_item__text_red";
    } else if (getСhangeSharePriceSelector(shares, ticker)) {
      return;
    }
  };

  return renderFromStatus() ? (
    <div className="share_item">
      <p className="share_item__ticker">{ticker}</p>
      <p className="share_item__price">{price} $</p>
      <p className={`share_item__change ${setTextColorClass()}`}>
        {renderItemPriceChange()}
      </p>
      <div className={`share_item__change_percent`}>
        <p className={`change_percent__text ${setArrowColorClass()}`}>
          {getСhangeOfPercentSelector(shares, ticker, price)}
        </p>
      </div>
    </div>
  ) : null;
}

ShareItem.propTypes = {
  ticker: PropTypes.string,
  price: PropTypes.string,
};
