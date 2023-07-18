import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, AboutUs, JoinUs, Members, Login, NotFound,  } from "./pages";
import Footer from "./pages/globalComponents/footer/Footer";
import ContactForm from "./pages/contactForm/ContactForm";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route path="/#about-us" element={<AboutUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Route>
                    <Route path="/contact-us" element={<ContactForm/>} />
                    <Route path="/join-us" element={<JoinUs />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/login" element={<Login />} />
                    {/* The Below Route is for 404 #PageNotFound, Make sure to Place this route at the end of all Route [if want to add other Route, add Route above 404 Route] */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
