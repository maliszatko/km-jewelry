import React, { useState } from "react";
import NavBar from "./NavigationBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HomePage/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import CreateNewProduct from "./CreateProduct/CreateNewProduct";
import ProductView from "./ProductPage/ProductView";
import CardStack from "./ProductPage/CardStack";
import SignIn from "./CreateProduct/SignIn";
import { createGlobalStyle } from 'styled-components'
import { Footer } from './Footer/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    font-family: "Montserrat", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    min-height: 100%;
    position: absolute;
  }
`

function App() {
  const [isSigned, setIsSigned] = useState(false);
  function handleSignIn(val) {
    setIsSigned(val);
  }
  console.log(isSigned);
  return (
    <Router>
        <div>
          <GlobalStyle />
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
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
