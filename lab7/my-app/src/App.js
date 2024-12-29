import React from 'react';
import './App.css';
import Header from './components/FirstTask/Header';
import Content from './components/FirstTask/Content';
import Image from './components/FirstTask/Image';
import GoodsGallery  from './components/GoodsGallery/GoodsGallery';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <GoodsGallery/>
    </div>
  );
};

export default App;
