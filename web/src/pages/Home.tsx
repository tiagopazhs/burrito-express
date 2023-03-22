import React from 'react';
import TopBar from '../components/TopBar';
import { SIZES } from '../constants';

function Home(): JSX.Element {
  return (
    <>
      <div style={{padding: SIZES.padding2}}>
        <TopBar />
        <div style={{ height: '80vh' }} >
          This is Home page
        </div>
      </div>
    </>
  );
}

export default Home;
