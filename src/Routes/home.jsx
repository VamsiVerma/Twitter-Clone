import React from "react";
import Footer from "../components/Footer/footer";
import "./styles/home.css";

function Home() {
  return (
    <div className="home d-flex">
      <div id="newsfeed" className={`m-2 flex-column `}>
        News Feed
      </div>
      <div id="footer" className={`m-2 flex-column`}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
