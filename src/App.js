import Home from "./screens/Home/Home";
import Navbar from "./screens/Navbar/Navbar";
import Restaurant from "./screens/Restaurant/Restaurant";
import { Provider } from "react-redux";
import { myStore } from "./redux/Store/store";

function App() {

 
  return (
    <Provider store={myStore}>

    <>
   <Navbar />
   <Home />
   {/* <Restaurant /> */}
   </>
   </Provider>
  );
}

export default App;
