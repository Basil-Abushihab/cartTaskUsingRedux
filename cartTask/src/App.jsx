import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Catalouge } from "./pages/catalougePage";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Catalouge />
      </Provider>
    </>
  );
}

export default App;
