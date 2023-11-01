
import AppRouter from './router';
import { Provider } from "react-redux";
import { myStore } from "./redux/Store/store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Provider store={myStore}>
      <AppRouter />    
   </Provider>
  );
}

export default App;
