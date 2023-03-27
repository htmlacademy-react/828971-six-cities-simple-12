import React, {useEffect, useState} from 'react';
import CurrentOffer from '../offer-card/offer';
import {Offer} from '../../../../types/offer';
import {useAppSelector} from '../../../../hooks/use-global-state';
import {State} from '../../../../types/state';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const currentOffers = useAppSelector((state: State) => state.offers);
  const [, setCardHovered] = useState<Offer|null>(null);
  const [iterable, setIterable] = useState<Offer[]>(currentOffers);

  useEffect(() => {
    const page: string = document.location.pathname;
    if (page.includes('offer')) {
      const closestQuantity = 3;
      const slicedArray: Offer[] = currentOffers.slice(0, closestQuantity);
      setIterable(slicedArray);
    } else {
      setIterable(currentOffers);
    }
  }, [currentOffers]);

  const mouseEnterHandler = (elem: Offer) => setCardHovered(elem);
  const mouseLeaveHandler = () => setCardHovered(null);


  return(
    <>
      { iterable.map((offer: Offer): JSX.Element => (
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
