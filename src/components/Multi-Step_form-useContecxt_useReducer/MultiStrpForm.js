import React, { useContext, useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ContactDetails from './ContactDetails';
import Confirmation from './Confirmation';
import { FormContext } from '../../Store/Store';

const MultiStrpForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState(false);

  const { state, dispatch } = useContext(FormContext);

  const nextStep = async () => {
    if (formStep === 0) {
      dispatch({
        type: 'NEXT_STEP',
        payload: { step: 'personalInfo' },
      });

      if (state.currentStep) {
        setFormStep((prev) => prev + 1);
      } else {
        if (state.error != null) {
          alert(state.error);
        }
      }
    } else if (formStep === 1) {
      dispatch({
        type: 'NEXT_STEP',
        payload: { step: 'contactDetails' },
      });

      if (!state.currentStep) {
        if (state.error != null) {
          alert(state.error);
        }
      } else {
        setFormStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    setFormStep((prev) => {
      return prev - 1;
    });
  };

  const submitForm = () => {
    dispatch({
      type: 'SUBMIT_FORM',
    });

    setFormData(true);
  };

  return (
    <div className="col">
      {formData ? (
        <table className="table my-3">
          <thead>
            <th colSpan={2}>
              <h3>Personal Detals</h3>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Fullname</td>
              <td>{state.personalInfo.fullname}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{state.personalInfo.dob}</td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td>{state.personalInfo.fatherName}</td>
            </tr>
            <tr>
              <td>Mother's Name</td>
              <td>{state.personalInfo.motherName}</td>
            </tr>
            <tr>
              <td>Education</td>
              <td>{state.personalInfo.education}</td>
            </tr>
          </tbody>
          <thead>
            <th colSpan={2}>
              <h3>Contact Detals</h3>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Email Address</td>
              <td>{state.contactDetails.email}</td>
            </tr>
            <tr>
              <td>Mobile No.</td>
              <td>{state.contactDetails.mobile}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{state.contactDetails.address}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="row">
          <div className="col-auto ms-auto">
            <button
              className="btn btn-outline-success border-2 mx-3"
              onClick={prevStep}
              disabled={formStep === 0}
            >
              Previous
            </button>

            {formStep < 2 ? (
              <button
                className="btn btn-outline-success border-2"
                onClick={nextStep}
                disabled={formStep === 2}
              >
                Next
              </button>
            ) : (
              <button
                className="btn btn-outline-success border-2"
                onClick={submitForm}
              >
                Submit
              </button>
            )}
          </div>

          {formStep === 0 && <PersonalInfo />}
          {formStep === 1 && <ContactDetails />}
          {formStep === 2 && <Confirmation />}
        </div>
      )}
    </div>
  );
};

export default MultiStrpForm;
