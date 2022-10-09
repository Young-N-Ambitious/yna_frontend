import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test("Testing Home Route", () => {
  render(<App />, { initialRoutes: ["/"] });
  const HomePage = screen.getByRole("heading", { name: /Home/i });
  expect(HomePage).toBeInTheDocument();
});

test("Testing About Us Route", () => {
  render(<App />, { initialRoutes: ["/about-us"] });
  const AboutUs = screen.getByRole("heading", { name: /About/i });
  expect(AboutUs).toBeInTheDocument();
});

test("Testing Contact Us Route", () => {
  render(<App />, { initialRoutes: ["/contact-us"] });
  const ContactUs = screen.getByRole("heading", { name: /Contact/i });
  expect(ContactUs).toBeInTheDocument();
});

test("Testing Join Us Route", () => {
  render(<App />, { initialRoutes: ["/join-us"] });
  const JoinUS = screen.getByRole("heading", { name: /Join/i });
  expect(JoinUS).toBeInTheDocument();
});
test("Testing Members Route", () => {
  render(<App />, { initialRoutes: ["/members"] });
  const Members = screen.getByRole("heading", { name: /Members/i });
  expect(Members).toBeInTheDocument();
});

test("Testing Login Route", () => {
  render(<App />, { initialRoutes: ["/login"] });
  const Login = screen.getByRole("heading", { name: /Login/i });
  expect(Login).toBeInTheDocument();
});

test("Testing Not Found Routes", () => {
  render(<App />, { initialRoutes: ["/Unknown"] });
  const NotFound = screen.getByRole("heading", { name: /Not Found/i });
  expect(NotFound).toBeInTheDocument();
});
