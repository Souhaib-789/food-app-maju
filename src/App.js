
import AppRouter from './router';
import { Provider } from "react-redux";
import { myStore, persistor } from "./redux/Store/store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
