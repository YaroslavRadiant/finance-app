import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  addCheckboxToState,
  changeOneCheckboxStatus,
} from "../../store/actions/checkboxActions";

export default function CheckboxItem({ ticker }) {
  const [checkboxStatus, setCheckboxStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCheckboxToState({ [ticker]: checkboxStatus }));
  }, []);

  const checkboxChange = (event) => {
    setCheckboxStatus(!checkboxStatus);
    dispatch(changeOneCheckboxStatus({ [ticker]: !checkboxStatus }));
  };

  return (
    <div className="checkbox_item">
      {ticker}
      <input
        data-test-id="custom-element"
        type="checkbox"
        id="scales"
        name="scales"
        checked={checkboxStatus}
        value="status"
        onChange={checkboxChange}
      />
    </div>
  );
}

CheckboxItem.propTypes = {
  ticker: PropTypes.string,
};
