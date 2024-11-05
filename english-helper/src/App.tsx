import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import LoginPage from "./features/user/LoginPage";
import BuisnessPage from "./features/buisness/BuisnessPage";
import TutorPage from "./features/tutor/TutorPage";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SignupPage from "./features/user/SignupPage";
import ForgotPassword from "./features/user/ForgotPassword";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/forgot_password", element: <ForgotPassword /> },

      {
        path: "/buisness",
        element: <BuisnessPage />,
      },
      { path: "/tutor", element: <TutorPage /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/support", element: <Support /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/cookiespolicy", element: <CookiePolicy /> },
      { path: "/termsofuse", element: <TermsOfUse /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
