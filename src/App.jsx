import React, { useState, useEffect } from "react";
import About from "./components/about/About";
import Concert from "./components/concert/Concert";
import Header from "./components/header/Header";
import Info from "./components/moreinfo/Info";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Social from "./components/social/Social";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true); // Loading holati
  const [progress, setProgress] = useState(0); // Progress foizi

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval); // 100% ga yetganda to'xtatish
          setLoading(false); // Loadingni tugatish
          return 100;
        }
        return oldProgress + 1; // Progressni 1% oshirish
      });
    }, 30); // Har 30ms da foizni yangilash

    return () => clearInterval(interval); // Tozalash
  }, []);

  // Agar yuklanish tugamagan bo'lsa, loading ekranini ko'rsatish
  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}>
          <h1> {progress} %</h1>
        </div>
      </div>
    );
  }

  // Agar yuklanish tugagan bo'lsa, asosiy tarkibni ko'rsatish
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Header />
        <About />
        <Music />
        <Info />
        <Concert />
        <Social />
        <Footer />
      </Router>
    </>
  );
}

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "#000",
    background: 'rgb(41,41,41)',
    background: 'linear-gradient(188deg, rgba(41,41,41,1) 0%, rgba(31,31,31,1) 100%)',
    color: "#fff",
  },
  loader: {
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "23px",
  },
};

export default App;
