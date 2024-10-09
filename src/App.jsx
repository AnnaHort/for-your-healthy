import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import StartPage from "./Pages/StartPage";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<StartPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
