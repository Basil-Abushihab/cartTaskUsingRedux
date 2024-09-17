
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Catalouge } from "./pages/user/catalougePage";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Catalouge />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
