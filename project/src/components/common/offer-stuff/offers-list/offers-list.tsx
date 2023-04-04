import React, {useEffect, useState} from 'react';
import CurrentOffer from '../offer-card/offer';
import {Offer} from '../../../../types/offer';
import {useAppDispatch} from '../../../../hooks/use-global-state';
import {setActiveOfferAction} from '../../../../store/actions';
// import {useAppSelector} from '../../../../hooks/use-global-state';
// import {State} from '../../../../types/state';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const dispatch = useAppDispatch();
  // const [, setCardHovered] = useState<Offer|null>(null);
  const [iterable, setIterable] = useState<Offer[]>(offers);

  useEffect(() => {
    const page: string = document.location.pathname;
    if (page.includes('offer')) {
      const closestQuantity = 3;
      const slicedArray: Offer[] = offers.slice(0, closestQuantity);
      setIterable(slicedArray);
    } else {
      setIterable(offers);
    }
  }, [offers]);

  const mouseEnterHandler = (elem: Offer) => dispatch(setActiveOfferAction(elem));
  const mouseLeaveHandler = () => dispatch(setActiveOfferAction(null));

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
