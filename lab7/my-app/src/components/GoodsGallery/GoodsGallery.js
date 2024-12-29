import React from 'react';
import GoodsCard from './GoodsCard';
import './GoodsGallery.css';

const GoodsGallery = () => {
  const goods = [
    {
      id: 1,
      image: 'https://static.wikia.nocookie.net/create_mod/images/0/00/Copper_Ingot.png/',
      name: 'Copper',
      price: 500,
    },
    {
      id: 2,
      image: 'https://e7.pngegg.com/pngimages/618/795/png-clipart-minecraft-gold-bar-ingot-ore-ingots-angle-rectangle-thumbnail.png',
      name: 'Iron',
      price: 750,
    },
    {
      id: 3,
      image: 'https://ih1.redbubble.net/image.5551333647.2646/st,small,507x507-pad,600x600,f8f8f8.webp',
      name: 'Emerald',
      price: 1200,
    },
    {
      id: 4,
      image: 'https://static.wikia.nocookie.net/minecraft-101/images/6/61/Coal_icon32.png/',
      name: 'Coal',
      price: 300,
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/a8/4a/16/a84a16165c1601da84540f62827a4760.jpg',
      name: 'Diamond',
      price: 1500,
    },
    {
      id: 6,
      image: 'https://e7.pngegg.com/pngimages/978/211/png-clipart-minecraft-story-mode-gold-bar-ingot-minecraft-angle-rectangle-thumbnail.png',
      name: 'Gold',
      price: 1000,
    },
  ];

  return (
    <div className="goods-gallery">
      {goods.map((good) => (
        <GoodsCard
          key={good.id}
          image={good.image}
          name={good.name}
          price={good.price}
        />
      ))}
    </div>
  );
};

export default GoodsGallery;
