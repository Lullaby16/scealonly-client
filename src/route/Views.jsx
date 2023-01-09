import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import { AccountContext } from "../context/AccountContext";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Donation from "../pages/Donation";
import Loading from "../components/Loading";

const Views = () => {
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <Loading /> //loading screen here
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:post_id" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donation" element={<Donation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Views;
