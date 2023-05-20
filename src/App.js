import { useEffect } from "react";
import Home from "./screens/Home/Home";
import Navbar from "./screens/Navbar/Navbar";
import Aos from "aos";
import Restaurant from "./screens/Restaurant/Restaurant";

function App() {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[]);
  return (
    <>
   <Navbar />
   {/* <Home /> */}
   <Restaurant />
   </>
  );
}

export default App;
