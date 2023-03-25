import React from 'react';
import { SIZES } from '../constants';
import TopBar from '../components/TopBar';
import CategoryList from '../components/CategoryList';
import OrderList from '../components/OrderList';
import BackgroundImage from '../components/BackgroundImage';


function Home(): JSX.Element {
  return (
    <>
      <TopBar />
      <BackgroundImage />
      <div style={{ padding: SIZES.padding2 }}>
        <CategoryList />
        <OrderList />
      </div>
    </>
  );
}

export default Home;
