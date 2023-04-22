import RatingStars from '../../../common/rating-stars/rating-stars';
import React from 'react';
import {Feedback} from '../../../../types/feedback';
import {getDateForData, getDateForDescription} from '../../../../services/utils';

type FeedbackCardProps = {
  feedback: Feedback;
}

function FeedbackCard( { feedback } : FeedbackCardProps ): JSX.Element {
  const currentDate = getDateForData(feedback.date);

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src= { feedback.user.avatarUrl }
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          { feedback.user.name }
        </span>
      </div>
      <div className="reviews__info">
        <RatingStars rating={ feedback.rating } specifyClassWord={ 'reviews' } />
        <p className="reviews__text">
          { feedback.comment }
        </p>
        <time className="reviews__time" dateTime={currentDate}>{ getDateForDescription(currentDate) }</time>
      </div>
    </li>
  );
}

export default FeedbackCard;
