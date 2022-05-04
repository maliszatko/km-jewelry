import React, { Suspense, useState } from "react";
import NavBar from "./NavigationBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HomePage/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import CreateNewProduct from "./CreateProduct/CreateNewProduct";
import { CircularProgress } from "@mui/material";

const ProductView = React.lazy(() => import("./ProductPage/ProductView"));
const CardStack = React.lazy(() => import("./ProductPage/CardStack"));
const SignIn = React.lazy(() => import("./CreateProduct/SignIn"));

function App() {
  const [isSigned, setIsSigned] = useState(false);
  function handleSignIn(val) {
    setIsSigned(val);
  }
  console.log(isSigned);
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ positon: "absolute", top: "50%", left: "50%" }}>
            <CircularProgress />
          </div>
        }
      >
        <div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ParallaxProvider>
                  <Hero />
                </ParallaxProvider>
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/kolczyki"
              element={<CardStack for="kolczyki" />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/naszyjniki"
              element={<CardStack for="naszyjniki" />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/pierscionki"
              element={<CardStack for="pierścionki" />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/kasia"
              element={
                isSigned ? (
                  <CreateNewProduct />
                ) : (
                  <SignIn isSigned={handleSignIn} />
                )
              }
            />
          </Routes>
          <Routes>
            <Route exact path="/:product/:id" element={<ProductView />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
