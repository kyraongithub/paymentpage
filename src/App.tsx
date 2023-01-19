import { GlobalContextProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((item: any) => {
            return <Route path={item?.path} element={<item.element />} />;
          })}
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
