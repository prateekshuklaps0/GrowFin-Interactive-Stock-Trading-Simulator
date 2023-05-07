import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function Card() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    if (index === activeIndex) {
      return `
        background-color: red;
        transform: scale(1.2);
        transition: transform 0.5s ease-in-out;
      `;
    } else if (
      index === (activeIndex + 1) % cards.length ||
      index === (activeIndex - 1 + cards.length) % cards.length
    ) {
      return `
        background-color: green;
        transform: scale(0.8);
        transition: transform 0.5s ease-in-out;
      `;
    } else {
      return `
        background-color: blue;
        transform: scale(0.8);
        transition: transform 0.5s ease-in-out;
      `;
    }
  };

  return (
    <Box>
      {cards.map((card, index) => (
        <Box
          key={card.id}
          css={`
            ${getCardStyle(index)}
            margin: 10px;
            padding: 10px;
            text-align: center;
            display: inline-block;
            width: 200px;
            height: 300px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
          `}
        >
          <Text>{card.text}</Text>
          <Button>Button</Button>
        </Box>
      ))}
    </Box>
  );
}

export default Card;
