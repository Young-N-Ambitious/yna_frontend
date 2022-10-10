import "./App.css";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {[
          "aboutus",
          "about-us",
          "AboutUS",
          "AboutUs",
          "ABOUTUS",
          "about",
          "ABOUT",
        ].map((path) => (
          <Route path={path} element={<AboutUs />} />
        ))}
        {[
          "contactus",
          "contact-us",
          "ContactUS",
          "ContactUs",
          "CONTACTUS",
          "contact",
          "CONTACT",
        ].map((path) => (
          <Route path={path} element={<ContactUs />} />
        ))}
        {[
          "joinus",
          "join-us",
          "JOinUS",
          "JoinUs",
          "JOINUS",
          "join",
          "JOIN",
        ].map((path) => (
          <Route path={path} element={<JoinUs />} />
        ))}
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/login" element={<Login />} />
        {/* The Below Route is for 404 #PageNotFound, Make sure to Place this route at the end of all Route [if want to add other Route, add Route above 404 Route] */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <header className="flex justify-center items-center h-screen">
        <p className="text-blue-500">tailwind added</p>
      </header>
    </div>
  );
}

export default App;