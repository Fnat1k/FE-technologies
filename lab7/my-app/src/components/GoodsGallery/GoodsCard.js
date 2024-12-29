import React from 'react';
import './GoodsGallery.css'; // Використовуйте спільний файл стилів

const GoodsCard = ({ image, name, price }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-card-image" />
      <h3 className="goods-card-name">{name}</h3>
      <p className="goods-card-price">{price} грн</p>
    </div>
  );
};

export default GoodsCard;
