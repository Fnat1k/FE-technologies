import React, { useState } from 'react';

const Image = () => {
  const [images, setImages] = useState([]);
  const [size, setSize] = useState(600);

  const addImage = () => {
    setImages((prev) => [...prev, { src: 'https://lviv.travel/image/seo/dc/6c/dc6ce62c2a8202d913e5a1221e83883db65f4ae6_1711617801.jpg?crop=5985%2C3142%2C-6%2C858&w=1200&h=630', size }]);
  };

  const increaseSize = () => {
    setSize((prev) => prev + 50);
  };

  const decreaseSize = () => {
    setSize((prev) => (prev > 50 ? prev - 50 : prev));
  };

  const removeImage = () => {
    setImages((prev) => prev.slice(0, -1));
  };

  return (
    <div>
      <div>
        <button onClick={addImage}>Додати зображення</button>
        <button onClick={increaseSize}>Збільшити зображення</button>
        <button onClick={decreaseSize}>Зменшити зображення</button>
        <button onClick={removeImage}>Видалити зображення</button>
      </div>
      <div id="image-container">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Image ${idx}`}
            style={{ width: img.size }}
          />
        ))}
      </div>
    </div>
  );
};

export default Image;
