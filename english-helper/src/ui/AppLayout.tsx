import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";
// type AppLayoutProps = {
//   children: ReactNode;
// };

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="bg-stone-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
