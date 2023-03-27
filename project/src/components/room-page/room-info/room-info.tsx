import React from 'react';
import {Offer} from '../../../types/offer';
import RatingStars from '../../common/rating-stars/rating-stars';

type RoomInfoProps = {
  property: Offer;
};

function RoomInfo( { property }: RoomInfoProps ): JSX.Element {
  return (
    <>
      { property.isPremium && <div className="property__mark"><span>Premium</span></div> }
      <div className="property__name-wrapper">
        <h1 className="property__name">
          { property.title }
        </h1>
      </div>
      <RatingStars rating={ property.rating } specifyClassWord={ 'property' } />
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          { property.type }
        </li>
        <li className="property__feature property__feature--bedrooms">
          { property.bedrooms } Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max { property.maxAdults } adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{ property.price }</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          { property.goods.map((feature: string): JSX.Element => (
            <li className="property__inside-item" key={ feature }>
              { feature }
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RoomInfo;
