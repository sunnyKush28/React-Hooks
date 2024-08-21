import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../Store/Store';

const Confirmation = () => {
  const { state, dispatch } = useContext(FormContext);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        step: 'confirmation',
        data: { confirmation: isChecked },
      },
    });
  };

  useEffect(() => {
    console.log('Checked:', checked);
  }, [checked]);

  return (
    <div className="row">
      <h4>Confirmation</h4>
      <form className="col d-flex flex-wrap">
        <div className="col">
          <input
            type="checkbox"
            className="form-check-input"
            name="confirmation"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label className="px-2">All the information are correct</label>
        </div>
      </form>
    </div>
  );
};

export default Confirmation;
