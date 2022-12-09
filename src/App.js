import { Routes, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
