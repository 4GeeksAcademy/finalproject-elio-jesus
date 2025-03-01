import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home.jsx";
import Exercises from "./pages/exercises.jsx";
import { Register } from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Profile from "./pages/profile.jsx";
import EditProfile from "./pages/editProfile.jsx";
import { ChestExercises } from "./pages/chestExercises.jsx";
import { BackExercises } from "./pages/backExercises.jsx";
import { ArmsExercises } from "./pages/armsExercises.jsx";
import { AbdomenExercises } from "./pages/abdomenExercises.jsx";
import { LegsExercises } from "./pages/legsExercises.jsx";
import { ShouldersExercises } from "./pages/shouldersExercises.jsx";
import Service from "./pages/service.jsx";
import ServiceDetail from "./pages/serviceDetail.jsx";
import { Administrator } from "./pages/administrator.jsx";
import ResetPassword from "./pages/resetPassword.jsx";
import UpdatePassword from "./pages/updatePassword.jsx";
import Payment from "./pages/payment.jsx";
import { Trainer } from "./pages/trainer.jsx";
import { Fisio } from "./pages/fisio.jsx";
import { Nutritionist } from "./pages/nutritionist.jsx"

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import formWallet from "./component/formWallet.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Service />} path="/service" />
                        <Route element={<ServiceDetail />} path="/service_detail/:id" />
                        <Route element={<Exercises />} path="/exercises" />
                        <Route element={<ArmsExercises />} path="/arms_exercises" />
                        <Route element={<ChestExercises />} path="/chest_exercises" />
                        <Route element={<BackExercises />} path="/back_exercises" />
                        <Route element={<AbdomenExercises />} path="/abdomen_exercises" />
                        <Route element={<LegsExercises />} path="/legs_exercises" />
                        <Route element={<ShouldersExercises />} path="/shoulders_exercises" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<EditProfile />} path="/edit_profile" />
                        <Route element={<Administrator />} path="/administrator" />
                        <Route element={<ResetPassword />} path="/reset_password" />
                        <Route element={<UpdatePassword />} path="/update_password" />
                        <Route element={<Trainer />} path="/trainer" />
                        <Route element={<Fisio />} path="/fisio" />
                        <Route element={<Nutritionist  />} path="/nutritionist" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
