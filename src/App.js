
import AppRouter from './router';
import { Provider } from "react-redux";
import { myStore } from "./redux/Store/store";

function App() {

 
  return (
    <Provider store={myStore}>
      <AppRouter />    
   </Provider>
  );
}

export default App;
