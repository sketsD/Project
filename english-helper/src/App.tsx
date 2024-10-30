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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/buisness",
        element: <BuisnessPage />,
      },
      { path: "/tutor", element: <TutorPage /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/support", element: <Support /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
