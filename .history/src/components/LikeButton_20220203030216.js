import React, { useState } from "react";
import cn from "classnames";
import Hand from '../hand.svg.png'
import setClicked from 'react'

import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(null);

  return (
    <button
      onClick={() => setLiked(!liked)}
      onAnimationEnd={() => setClicked(false)}
      className={cn("like-button-wrapper", {
        liked,
      })}
    >
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
  );
};

export default LikeButton;