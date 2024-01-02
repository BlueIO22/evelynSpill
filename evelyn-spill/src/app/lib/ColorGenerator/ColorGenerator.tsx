"use client";

import { useState } from "react";
import { tailwindColors } from "./colors";

const findColor = (keys: string[]) => {
  const randomColorNumber = randomIntFromInterval(0, keys.length);

  return randomColorNumber !== undefined &&
    tailwindColors[keys[randomColorNumber] as keyof {}] !== undefined
    ? tailwindColors[keys[randomColorNumber] as keyof {}]
    : tailwindColors.blue;
};

const findColorAccent = (chosenColor: any) => {
  const randomColorAccentNumber = randomIntFromInterval(
    0,
    Object.keys(chosenColor).length
  );

  const foundKey = Object.keys(chosenColor)[randomColorAccentNumber];

  return randomColorAccentNumber !== undefined &&
    chosenColor[foundKey] !== undefined
    ? chosenColor[foundKey]
    : tailwindColors.blue["400"];
};

const getRandomBackgroundColor = () => {
  const chosenColor = findColor(Object.keys(tailwindColors));
  const chosenColorAccent = findColorAccent(chosenColor);
  return chosenColorAccent;
};

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ColorGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-black");
  return (
    <div
      onClick={() => {
        setBackgroundColor(getRandomBackgroundColor());
      }}
      onDrag={() => {
        setBackgroundColor(getRandomBackgroundColor());
      }}
      onScroll={() => {
        setBackgroundColor(getRandomBackgroundColor());
      }}
      onTouchMove={() => {
        setBackgroundColor(getRandomBackgroundColor());
      }}
      style={{
        backgroundColor: backgroundColor,
        transition: ".5s ease",
      }}
      className={`w-full h-[100vh] hover:cursor-pointer`}
    ></div>
  );
};

export default ColorGenerator;
