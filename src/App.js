import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Counter from './components/counter-useState_useEffect/Counter';
import Todo from './components/TodoList-useRef_useReducer/Todo';
import WeatherApp from './components/weather/WeatherApp';
import MultiStrpForm from './components/Multi-Step_form-useContecxt_useReducer/MultiStrpForm';
import { FormProvider } from './Store/Store';
import Theme from './components/TheamComponent/Theme';
import { TheamProvider } from './Store/TheamStore';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
  return (
    <div className="container-fluid mx-md-0 px-md-0" style={{ height: '90vh' }}>
      <div className="container h-100">
        <Navbar />
        <div className="row d-flex justify-content-center align-items-center h-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/count" element={<Counter />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route
              path="/mutipleform"
              element={
                <FormProvider>
                  <MultiStrpForm />
                </FormProvider>
              }
            />
            <Route
              path="/theme"
              element={
                <TheamProvider>
                  <Theme />
                </TheamProvider>
              }
            />
            <Route path="/searchFilter" element={<SearchFilter />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
