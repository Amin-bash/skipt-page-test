// src/app/App.tsx

import { Provider } from "react-redux";
import { store } from "./features/multi-step-skip-form/store/store";
import MultiStepSkipForm from "./features/multi-step-skip-form/MultiStepSkipForm";

function App() {
  return (
    <Provider store={store}>
      <MultiStepSkipForm />          
    </Provider>
  );
}

export default App;
