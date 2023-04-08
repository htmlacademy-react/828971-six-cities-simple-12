import React, {useEffect, useState} from 'react';
import CurrentOffer from '../offer-card/offer';
import {Offer} from '../../../../types/offer';
import {useAppDispatch} from '../../../../hooks/use-global-state';
import {outputData} from '../../../../store/output-data/output-data.slice';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const dispatch = useAppDispatch();
  // const [, setCardHovered] = useState<Offer|null>(null);
  const [iterable, setIterable] = useState<Offer[]>(offers);

  //toDO эту бредятину нужно убрать и нормальные данные подтянуть
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

  const mouseEnterHandler = (elem: Offer) => dispatch(outputData.actions.setActiveOfferAction(elem));
  const mouseLeaveHandler = () => dispatch(outputData.actions.setActiveOfferAction(null));

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
