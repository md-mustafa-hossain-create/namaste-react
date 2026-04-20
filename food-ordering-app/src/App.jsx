import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Poster from "./components/Poster.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Offline from "./components/Offline.jsx";
import useOnlineStatus from "./hooks/useOnlineStatus.js";
import appStore from "./store/appStore.js";
import { Provider } from "react-redux";
import Cart from "./components/Cart.jsx";

const Grocery = lazy(() => import("./Grocery/Grocery.jsx"));
const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  // Graceful degradation logic: Intercept rendering to provide a fallback Offline UI when network connectivity is lost
  if (!onlineStatus) return <Offline />;

  return (
    <Provider store={appStore}>
      <div className="app flex flex-col min-h-screen text-swiggy-text-main">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery Store...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
