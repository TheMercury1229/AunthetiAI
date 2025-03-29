import { Route, Routes } from "react-router";
import LandingPage from "@/pages/landing-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
