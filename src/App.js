import "./App.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import MainDashboard from "./Pages/MainDashboard";
import AnalysisBoard from "./Pages/AnalysisBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllAnalysisboardcomponent from "./Components/AllAnalysisBoardComponents/AllAnalysisboardcomponent";
import Footer from "./Components/Footer";
import List from "./Pages/List";
import SigninPage from "./Pages/SigninPage";

export const Layout = ({ children }) => {
  return (
    <>
      {/* <div className="appcontainer  flex justify-between "> */}
      <div className="container">
        <ResponsiveAppBar />
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* route for mainpage */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <MainDashboard />
              </Layout>
            }
          ></Route>
          <Route
            path="/analysisboard"
            element={
              <Layout>
                <AnalysisBoard />
              </Layout>
            }
          ></Route>
          <Route
            path="/allanalysis"
            element={
              <Layout>
                <List />
              </Layout>
            }
          ></Route>
          <Route
            path="/"
            element={
              // <Layout>
              <SigninPage />
              // </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
