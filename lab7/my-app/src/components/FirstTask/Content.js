import React, { useState } from 'react';

const Content = () => {
  const n = 169;
  const targetIndex = n % 10;

  const [colorStates, setColorStates] = useState(Array(10).fill(""));

  const elements = [
    { type: "p", content: "Дата і місце народження: 29 квітня 2005 року, м. Олександрія." },
    { type: "p", content: "Освіта: " },
    { type: "p", content: "Ліцей 11" },
    { type: "p", content: "КПІ ім. Ігоря Сікорського." },
    { type: "h3", content: "Мої хобі" },
    { type: "ul", content: ["Програмування", "Гра на гітарі", "Музика"] },
    { type: "h3", content: "Мої улюблені книги та фільми" },
    { type: "ol", content: ["Фільм: \"Темний лицар\"", "Фільм: \"Інтерстеллар\"", "Фільм: \"Вбити Білла\""] },
    { type: "h3", content: "Моє улюблене місто" },
    { type: "p", content: "Моє улюблене місто - Львів. Це місто зачаровує своєю атмосферою, архітектурою та кав'ярнями." },
    { type: "p", content: "Тут дуж гарно" },
  ];

  const handleClick = (index) => {
    setColorStates((prev) => {
      const newStates = [...prev];
      if (index === targetIndex) {
        newStates[index] = newStates[index] === "blue-background" ? "" : "blue-background";
      } else if (index === targetIndex + 1) {
        newStates[index] = newStates[index] === "green-background" ? "" : "green-background";
      }
      return newStates;
    });
  };

  return (
    <div>
      {elements.map((el, idx) => {
        if (el.type === "ul" || el.type === "ol") {
          return React.createElement(
            el.type,
            { key: idx },
            el.content.map((item, subIdx) => (
              <li
                key={subIdx}
                className={colorStates[idx]}
                onClick={() => handleClick(idx)}
              >
                {item}
              </li>
            ))
          );
        }

        return React.createElement(
          el.type,
          {
            key: idx,
            id: idx === targetIndex ? "target" : undefined,
            className: colorStates[idx],
            onClick: () => handleClick(idx),
          },
          el.content
        );
      })}
    </div>
  );
};

export default Content;
