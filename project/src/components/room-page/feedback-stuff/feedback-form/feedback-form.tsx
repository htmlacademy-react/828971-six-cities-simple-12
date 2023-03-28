import React, {FormEvent, Fragment, useState} from 'react';

type FeedbackSettings = {
  rating: number;
  description: string;
  submitSwitcher: boolean;
}

type RatingLegend = {
  title: string;
  rating: number;
};

const ratingLegend: RatingLegend[] = [
  {
    title: 'perfect',
    rating: 5
  },
  {
    title: 'good',
    rating: 4
  },
  {
    title: 'not bad',
    rating: 3
  },
  {
    title: 'badly',
    rating: 2
  },
  {
    title: 'terribly',
    rating: 1
  }];

function FeedbackForm(): JSX.Element {
  const [state, setState] = useState<FeedbackSettings>({
    rating: 0,
    description: '',
    submitSwitcher: true
  });

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setState({
      rating: 0,
      description: '',
      submitSwitcher: false});
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, rating: +evt.currentTarget.value});
    if (state.description !== null && state.description.length > 50 ) {
      setState({...state, submitSwitcher: false});
    }
  };

  const onChangeTAHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = evt.currentTarget.value;
    if (text.length > 50 && state.rating ) {
      setState({...state, submitSwitcher: false});
    } else {
      setState({...state, submitSwitcher: true});
    }
    setState({...state, description: text });
  };

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={ onSubmitHandler }>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { ratingLegend.map((star: RatingLegend): JSX.Element => (
          <Fragment key={ star.title }>
            <input className="form__rating-input visually-hidden" name="rating" value={ star.rating.toString() } id={`${star.rating.toString()}-stars`} type="radio" onChange={ onChangeHandler }/>
            <label htmlFor={`${star.rating.toString()}-stars`} className="reviews__rating-label form__rating-label" title={ star.title }>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={ onChangeTAHandler } />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ state.submitSwitcher }>Submit</button>
      </div>
    </form>
  );
}


export default FeedbackForm;
