import React from 'react';
import TopBar from '../components/TopBar';
import CategoryList from '../components/CategoryList';
import { SIZES } from '../constants';
import OrderList from '../components/OrderList';

function Home(): JSX.Element {
  return (
      <div style={{padding: SIZES.padding2}}>
        <TopBar />
        <CategoryList />
        <OrderList />
      </div>
  );
}

export default Home;
