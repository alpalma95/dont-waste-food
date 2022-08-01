import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ShoppingList from "./component/ShoppingList";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import UserSettings from "./pages/UserSettings.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  return (
    <div className={`layout ${store.showModal ? "body--modal-open" : ""}`}>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Signup />} exact path="/signup" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<ShoppingList />} exact path="/shoppinglist" />
            <Route element={<Search />} exact path="/search" />
            <Route element={<Favorites />} exact path="/favorites" />
            <Route element={<UserSettings />} exact path="/settings" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
