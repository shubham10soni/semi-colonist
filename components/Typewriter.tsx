// components/Typewriter.js
"use client";

import { agy, wind_song } from "@/utils/fonts";
import { useEffect, useState } from "react";

function Typewriter() {
  const [text, setText] = useState("");
  const content =
    "Weelcome to Semicolonised, my personal digital notebook. Here,I document my tech learning journey, insights, and discoveries. Join me as I unlock the fascinating world of technology, one note at a time.";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => prevText + content[index]);
      index++;
      if (index === content.length - 1) clearInterval(interval);
    }, 50); // Adjust the typing speed (in milliseconds)
  }, []);

  return <div className={`typewriter-text  ${agy}`}>{text}</div>;
}

export default Typewriter;
