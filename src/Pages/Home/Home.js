import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import NewsDashboard from "./NewsDashboard";

const Home = () => {
  return (
    <div>
      <Banner />
      <NewsDashboard />
      <Footer />
    </div>
  );
};

export default Home;
