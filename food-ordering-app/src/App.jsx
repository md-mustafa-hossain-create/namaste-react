import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import Offline from "./components/Offline.jsx";
import useOnlineStatus from "./hooks/useOnlineStatus.js";
import appStore from "./store/appStore.js";
import { Provider, useDispatch } from "react-redux";
import Cart from "./pages/Cart.jsx";
import Auth from "./pages/Auth.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.js";
import { logIn, logOut } from "./store/slices/userSlice.js";

const Grocery = lazy(() => import("./pages/Grocery.jsx"));

const AppLayout = () => {
  const dispatch = useDispatch();
  // === THE AUTHENTICATION WATCHMAN ===
  // This useEffect runs once when your app loads.
  // It constantly watches Firebase to see if someone logs in or logs out.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If a user is logged in, we save their info to our Redux Store
        const { uid, email, displayName } = user;
        dispatch(
          logIn({ uid: uid, email: email, name: displayName || "user" }),
        );
      } else {
        // If they log out, we clear the Redux Store
        dispatch(logOut());
      }
    });

    // Cleanup the watchman if the app closes
    return () => unsubscribe();
  }, [dispatch]);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  // Check if current path is login to hide header and footer
  const isLoginPage = location.pathname === "/login";

  if (!onlineStatus) return <Offline />;

  return (
    <div className="app flex flex-col min-h-screen text-swiggy-text-main">
      {!isLoginPage && <Header />}
      <main
        className={`flex-1 ${!isLoginPage ? "pt-20 md:pt-24" : "bg-gray-50 flex items-center justify-center min-h-screen"}`}
      >
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
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
        element: <Home />,
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
      {
        path: "/login",
        element: <Auth />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
