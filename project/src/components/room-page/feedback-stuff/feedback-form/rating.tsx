import {RATING_LEGEND} from '../../../../constants';
import {RatingLegend} from '../../../../types/rating-legend';
import {ChangeEventHandler, Fragment, MutableRefObject} from 'react';

type RatingProps = {
  ratingRef: MutableRefObject<HTMLInputElement[]>;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

function Rating({ratingRef, onChangeHandler}: RatingProps) {
  return(
    <div className="reviews__rating-form form__rating">
      { RATING_LEGEND.map((star: RatingLegend, index: number): JSX.Element => (
        <Fragment key={ star.title }>
          <input ref={(el: HTMLInputElement) => (ratingRef.current[index] = el)} className="form__rating-input visually-hidden" name="rating" value={ star.rating.toString() } id={`${star.rating.toString()}-stars`} type="radio" onChange={ onChangeHandler }/>
          <label htmlFor={`${star.rating.toString()}-stars`} className="reviews__rating-label form__rating-label" title={ star.title }>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default Rating;
