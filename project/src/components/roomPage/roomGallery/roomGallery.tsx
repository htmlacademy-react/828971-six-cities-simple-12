import React from 'react';

type GalleryProps = {
  pics: string[];
}

function RoomGallery( { pics }: GalleryProps ): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        { pics.map((image: string): JSX.Element => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomGallery;
