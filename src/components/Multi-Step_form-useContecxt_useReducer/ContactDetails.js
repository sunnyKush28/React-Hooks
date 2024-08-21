import React, { useContext } from 'react';
import { FormContext } from '../../Store/Store';

const ContactDetails = () => {
  const { state, dispatch } = useContext(FormContext);
  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        step: 'contactDetails',
        data: { [name]: value },
      },
    });
  };

  return (
    <div className="row">
      <h3>Contact Details</h3>
      <form className="col d-flex flex-wrap">
        <div className="col-6 mb-3 px-3">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            className="form-control rounded-0"
            value={state.contactDetails.email || ''}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="number"
            placeholder="Mobile no."
            name="mobile"
            className="form-control rounded-0"
            value={state.contactDetails.mobile || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="text"
            placeholder="Home Address"
            name="address"
            className="form-control rounded-0"
            value={state.contactDetails.address || ''}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
