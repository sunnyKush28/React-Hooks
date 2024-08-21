import React, { useContext } from 'react';
import { FormContext } from '../../Store/Store';

const PersonalInfo = () => {
  const { state, dispatch } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        step: 'personalInfo',
        data: { [name]: value },
      },
    });
  };
  return (
    <div className="row ">
      <h3>Personal Information</h3>
      <form className="col d-flex flex-wrap">
        <div className="col-6 mb-3 px-3">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            className="form-control rounded-0"
            onChange={handleChange}
            value={state.personalInfo.fullname || ''}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="date"
            placeholder="Date of birth"
            name="dob"
            className="form-control rounded-0"
            onChange={handleChange}
            value={state.personalInfo.dob || ''}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="text"
            placeholder="Fathers Name"
            name="fatherName"
            className="form-control rounded-0"
            onChange={handleChange}
            value={state.personalInfo.fatherName || ''}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="text"
            placeholder="Mothers Name"
            name="motherName"
            className="form-control rounded-0"
            onChange={handleChange}
            value={state.personalInfo.motherName || ''}
          />
        </div>

        <div className="col-6 mb-3 px-3">
          <input
            type="text"
            placeholder="Education"
            name="education"
            className="form-control rounded-0"
            onChange={handleChange}
            value={state.personalInfo.education || ''}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
