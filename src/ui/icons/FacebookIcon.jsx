import React from "react";

function FacebookIcon({ iconWidth, iconHeight, iconColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 155.139 155.139"
    >
      <path
        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
        fill={iconColor ?? "#010002"}
        data-original={iconColor ?? "#010002"}
      ></path>
    </svg>
  );
}

export default FacebookIcon;
