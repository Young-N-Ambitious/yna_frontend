import "./App.css";
import Footer from "./pages/globalComponents/footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  HomePage,
  AboutUs,
  ContactUs,
  JoinUs,
  Members,
  Login,
  NotFound,
} from "./pages";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/about-us" element={<AboutUs />} />
        <Route  path="/contact-us" element={<ContactUs />} />
        <Route  path="/join-us" element={<JoinUs />} />
        <Route  path="/members" element={<Members />} />
        <Route  path="/login" element={<Login />} />
        {/* The Below Route is for 404 #PageNotFound, Make sure to Place this route at the end of all Route [if want to add other Route, add Route above 404 Route] */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      <header className="flex justify-center items-center h-screen">
        <p className="text-blue-500">tailwind added</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
