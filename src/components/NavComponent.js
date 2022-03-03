import React from "react";
import './NavComponent.css'

const NavComponent = ({metadata}) => {
  const { channelName, subscribersCount, videoCount, thumbnailUrl } = metadata;
  const useStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/stats_bg.svg"})`,
    backgroundRepeat: "no-repeat",
    width: "360px",
    height: "196px",
    marginBottom: "72px",
  };
  return (
    <nav style={useStyle}>
      <div className="background-header">
        <div>
          <img src="/images/ArrowLeft.svg" alt="ArrowLeft" />
        </div>
        <div className="background-header__title">
          <span>Youtube Stats</span>
          <img src="/images/YouTube - Original.svg" alt="YouTube" />
        </div>
      </div>
      <div className="sub-header">
        <img className="sub-header__image" src={thumbnailUrl} alt="Avatar" />
        <div>
          <div className="sub-header__title">{channelName}</div>
          <div className="sub-header__info">
            {subscribersCount} subscribers &bull; {videoCount} videos
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
