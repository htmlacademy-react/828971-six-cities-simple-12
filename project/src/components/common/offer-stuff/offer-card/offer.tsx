import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import {Offer} from '../../../../types/offer';
import RatingStars from '../../rating-stars/rating-stars';

type CurrentOfferProps = {
  myProperty: Offer;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
}

function CurrentOffer({myProperty, onMouseEnter, onMouseLeave}: CurrentOfferProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave }>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={ myProperty.previewImage } width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ myProperty.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <RatingStars rating={ myProperty.rating } specifyClassWord={ 'place-card' } />
        <h2 className="place-card__name">
          <Link to={`/offer/${myProperty.id.toString()}`}>
            { myProperty.title }
          </Link>
        </h2>
        <p className="place-card__type">{ myProperty.type }</p>
      </div>
    </article>
  );
}

export default CurrentOffer;
