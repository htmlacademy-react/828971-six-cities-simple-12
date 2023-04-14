import React, {FormEvent, Fragment, useEffect, useRef, useState} from 'react';
import {fetchFeedback, sendFeedbackAction} from '../../../../store/api-actions';
import {FeedbackData} from '../../../../types/feedback';
import {useAppDispatch, useAppSelector} from '../../../../hooks/use-global-state';
import {getFeedback} from '../../../../store/loading-data/loading-data.selectors';
import {COMMENT_LENGTH, RATING_LEGEND} from '../../../../constants';
import {RatingLegend} from '../../../../types/rating-legend';
import Rating from './rating';

type FeedbackSettings = {
  rating: number;
  description: string;
  submitSwitcher: boolean;
}

type FeedbackFormProps = {
  id: string;
};

function FeedbackForm({id}: FeedbackFormProps): JSX.Element {
  const ratingRef = useRef<HTMLInputElement[]>([]);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const feedbacks = useAppSelector(getFeedback);

  const [state, setState] = useState<FeedbackSettings>({
    rating: 0,
    description: '',
    submitSwitcher: true
  });

  useEffect(() => {
    if(commentRef.current !== null && ratingRef.current !== null) {
      commentRef.current.value = '';
      for(const radio of ratingRef.current) {
        radio.checked = false;
      }
    }
  }, [feedbacks]);

  const onSubmit = async (feedbackData: FeedbackData) => {
    await dispatch(sendFeedbackAction([id, feedbackData]));
    await dispatch(fetchFeedback(id));
    setState({
      rating: 0,
      description: '',
      submitSwitcher: true});
  };

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const feedback = {
      comment: state.description,
      rating: state.rating,
    };
    onSubmit(feedback);
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, rating: +evt.currentTarget.value});

    if (state.description !== null && state.description.length > COMMENT_LENGTH && state.submitSwitcher) {
      setState({...state, rating: +evt.currentTarget.value, submitSwitcher: false});
    }
  };

  const onChangeTAHandler  = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = evt.currentTarget.value;
    if (text.length > COMMENT_LENGTH && state.rating !== 0 && state.submitSwitcher) {
      setState({...state, description: text, submitSwitcher: false});
    } else if ((text.length < COMMENT_LENGTH || state.rating === 0) && !state.submitSwitcher) {
      setState({...state, description: text, submitSwitcher: true});
    } else {
      setState({...state, description: text});
    }
  };

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={ onSubmitHandler }>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating ratingRef={ ratingRef } onChangeHandler={ onChangeHandler }/>
      <textarea ref={commentRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={ onChangeTAHandler } />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">{COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ state.submitSwitcher }>Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;


{/*<div className="reviews__rating-form form__rating">*/}
{/*  { RATING_LEGEND.map((star: RatingLegend, index: number): JSX.Element => (*/}
{/*    <Fragment key={ star.title }>*/}
{/*      <input ref={(el: HTMLInputElement) => (ratingRef.current[index] = el)} className="form__rating-input visually-hidden" name="rating" value={ star.rating.toString() } id={`${star.rating.toString()}-stars`} type="radio" onChange={ onChangeHandler }/>*/}
{/*      <label htmlFor={`${star.rating.toString()}-stars`} className="reviews__rating-label form__rating-label" title={ star.title }>*/}
{/*        <svg className="form__star-image" width="37" height="33">*/}
{/*          <use xlinkHref="#icon-star"></use>*/}
{/*        </svg>*/}
{/*      </label>*/}
{/*    </Fragment>*/}
{/*  ))}*/}
{/*</div>*/}
