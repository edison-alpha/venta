import React, { useEffect, useState } from "react";

export interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ words, interval = 1000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  if (!words || words.length === 0) return null;

  return <span>{words[index]}</span>;
};
