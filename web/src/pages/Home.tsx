import React from 'react';
import TopBar from '../components/TopBar';
import CategoryList from '../components/CategoryList';
import OrderList from '../components/OrderList';
import BackgroundImage from '../components/BackgroundImage';


function Home(): JSX.Element {
  return (
    <>
      <TopBar />
      <BackgroundImage />
      <CategoryList />
      <OrderList />
    </>
  );
}

export default Home;
