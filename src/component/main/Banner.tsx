import React from 'react';

export const Banner = ({ url, img }: { url: string; img: string }) => {
  return (
    <a href={url}>
      <img
        className="mb-6 w-full"
        src={img}
        alt="banner"
      />
    </a>
  );
};
