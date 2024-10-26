import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import StartPage from "./Pages/StartPage";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import GenderPage from "./Pages/GenderPage";
import BodyParametersPage from "./Pages/BodyParametersPage";
import YourActivityPage from "./Pages/YourActivityPage";
import YourGoalPage from "./Pages/YourGoalPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<StartPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/genders" element={<GenderPage />} />
          <Route path="/parameters" element={<BodyParametersPage />} />
          <Route path="/activities" element={<YourActivityPage />} />
          <Route path="/goals" element={<YourGoalPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
