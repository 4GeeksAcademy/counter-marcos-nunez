import "./App.css";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import { useState } from "react";
import HomePageHeader from "./components/HomePage/HomePageHeader";

const App = () => {
  const [page, setPage] = useState("HomePage");
  const components = {
    HomePage: <HomePage />,
    CounterPage: <CounterPage />,
  };
  return (
    <>
      <HomePageHeader pageSetter={setPage} />
      {components[page]}
    </>
  );
};

export default App;
