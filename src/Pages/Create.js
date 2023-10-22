import React, { Fragment } from 'react';
import Header from '../Components/Header/Header';
import MenuBar from '../Components/SubHeader/menuBar';
import Create from '../Components/Create/Create';


const CreatePage = () => {
  return (
    <Fragment>
      <Header />
      <Create/>
      <MenuBar/>
    </Fragment>
  );
};

export default CreatePage;
