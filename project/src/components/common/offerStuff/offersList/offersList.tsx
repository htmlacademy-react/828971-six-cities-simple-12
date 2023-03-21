import React, { useState } from 'react';
import CurrentOffer from '../offerCard/offer';
import {Offer} from '../../../../types/offer';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setCardHovered] = useState<Offer|null>(null);

  const mouseEnterHandler = (elem: Offer) => setCardHovered(elem);
  const mouseLeaveHandler = () => setCardHovered(null);

  return(
    <>
      { offers.map((offer: Offer): JSX.Element => (
        <CurrentOffer
          key={ offer.id }
          myProperty= { offer }
          onMouseEnter={ () => mouseEnterHandler(offer) }
          onMouseLeave={ mouseLeaveHandler }
        />
      ))}
    </>
  );
}

export default OffersList;
