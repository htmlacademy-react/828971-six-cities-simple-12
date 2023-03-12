import React, { MouseEventHandler } from 'react';
import {Offer} from '../../types/offer';

type CurrentOfferProps = {
  myProperty: Offer;
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ myProperty.title }</a>
        </h2>
        <p className="place-card__type">{ myProperty.type }</p>
      </div>
    </article>
  );
}

export default CurrentOffer;
