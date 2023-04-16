import React, {FormEvent, useEffect, useRef, useState} from 'react';
import {fetchFeedback, sendFeedbackAction} from '../../../../store/api-actions';
import {FeedbackData} from '../../../../types/feedback';
import {useAppDispatch, useAppSelector} from '../../../../hooks/use-global-state';
import {getFeedback} from '../../../../store/loading-data/loading-data.selectors';
import {COMMENT_LENGTH} from '../../../../constants';
import Rating from './rating';
import {useDisabling} from '../../../../hooks/use-disabling/use-disabling';

type FeedbackSettings = {
  rating: number;
  description: string;
  isValidate: boolean;
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
    isValidate: false
  });

  const isDisabled = useDisabling(state.isValidate);

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
      isValidate: false
    });
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

    if (state.description !== null && state.description.length > COMMENT_LENGTH && !state.isValidate) {
      setState({...state, rating: +evt.currentTarget.value, isValidate: true});
    }
  };

  const onChangeTAHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = evt.currentTarget.value;
    if (text.length > COMMENT_LENGTH && state.rating !== 0 && !state.isValidate) {
      setState({...state, description: text, isValidate: true});
    } else if ((text.length < COMMENT_LENGTH || state.rating === 0) && state.isValidate) {
      setState({...state, description: text, isValidate: false});
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
        <button className="reviews__submit form__submit button" type="submit" disabled={ isDisabled }>Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
