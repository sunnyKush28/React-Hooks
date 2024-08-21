import { createContext, useReducer } from 'react';

const initialState = {
  personalInfo: {
    fullname: '',
    dob: '',
    fatherName: '',
    motherName: '',
    education: '',
  },
  contactDetails: {
    email: '',
    mobile: '',
    address: '',
  },
  confirmation: false,
  currentStep: false,
};
const FormContext = createContext(initialState);

const formReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      state.currentStep = false;
      state.error = null;
      if (action.payload.step === 'personalInfo') {
        for (let key in state.personalInfo) {
          if (state.personalInfo[key] === '') {
            return {
              ...state,
              error: `${key} field is requried`,
              currentStep: false,
            };
          }
        }
      } else if (action.payload.step === 'contactDetails') {
        for (let key in state.contactDetails) {
          if (state.contactDetails[key] === '') {
            return {
              ...state,
              error: `${key} field is requried`,
              currentStep: false,
            };
          }
        }
      }

      return { ...state, currentStep: true, error: null };

    case 'UPDATE_FORM':
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          ...action.payload.data,
        },
      };
    case 'SUBMIT_FORM':
      return state;
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
