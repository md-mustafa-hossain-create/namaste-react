import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Poster from "./components/Poster.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Offline from "./components/Offline.jsx";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <Offline />;

  return (
    <div className="app flex flex-col min-h-screen text-swiggy-text-main">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <Outlet />
      </main>
      <Poster />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
// Rendering the App to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
