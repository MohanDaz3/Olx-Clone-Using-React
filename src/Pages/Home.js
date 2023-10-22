import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import MenuBar from '../Components/SubHeader/menuBar'
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <MenuBar/>
      <Banner />
      <Posts />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
 
