import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Miscellany/Header";
import Footer from "./Components/Miscellany/Footer";
import "./App.css";
import { AuthContext } from "./Store/update-context";
import MenuBar from "./Components/Miscellany/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ListCompany from "./Components/ListCompany";
import ErrorPage from "./pages/ErrorPage";
import EditCompany from "./Components/EditCompany";
import ListEmployee from "./pages/ListEmployee";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/list-company"
          element={<ListCompany />}
          //loader={listCompanyLoader}
        />
        <Route path="/list-company/:idAzienda" element={<EditCompany />} />
        <Route path="/dipendenti" element={<ListEmployee />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <Header />
      <MenuBar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

const Root = () => {
  const [authObj, setAuthObj] = useState({
    loggedIn: false,
    user: {},
    fullName: {},
  });
  return (
    <>
      <AuthContext.Provider value={{ authObj, setAuthObj }}>
        <Header />
        <MenuBar />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </>
  );
};
