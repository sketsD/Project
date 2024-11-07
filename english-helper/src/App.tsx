import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import LoginPage from "./features/auth/LoginPage";
import SignupPage from "./features/auth/SignupPage";
import ResetPassword from "./features/auth/ResetPassword";
import BuisnessPage from "./features/buisness/BuisnessPage";
import TutorPage from "./features/tutor/TutorPage";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import ProtectedRoute from "./ui/ProtectedRoute";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import AdminDashboard from "./features/admin/AdminDashboard";
import TutorDashboard from "./features/tutor/TutorDashboard";
import StudentDashboard from "./features/student/StudentDashboard";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/reset_password", element: <ResetPassword /> },

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
  {
    element: (
      <ProtectedRoute allowdRoles="tutor">
        <TutorDashboard />
      </ProtectedRoute>
    ),
    path: "/tutor-cabinet",
  },
  {
    element: (
      <ProtectedRoute allowdRoles="student">
        <StudentDashboard />
      </ProtectedRoute>
    ),
    path: "/student-cabinet",
  },
  {
    element: (
      <ProtectedRoute allowdRoles="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    path: "/admin-cabinet",
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<SpinnerFullPage />} />
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
