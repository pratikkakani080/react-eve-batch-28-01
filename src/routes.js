import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import About from "./common/modules/about";
import Home from "./common/modules/home";
import ContactUs from "./common/modules/contactUs";
import CardDetails from "./common/components/card/cardDetails";

function RouteContainer() {
  const routingList = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/privacy-policy", element: <div></div> },
    { path: "/card-details/:id", element: <CardDetails /> },
  ]);
  return (
    <RouterProvider router={routingList}></RouterProvider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact-us" element={<ContactUs />} />
    //     <Route path="/privacy-policy" element={<div></div>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default RouteContainer;
