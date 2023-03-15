import React from 'react';
import {Feedback} from '../../../types/feedback';
import RatingStars from '../../common/ratingStars/ratingStars';

type FeedbacksListProps = {
  feedbacks: Feedback[];
}

function FeedbacksList( {feedbacks}: FeedbacksListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      { feedbacks.map((feedback: Feedback): JSX.Element => (
        <li className="reviews__item" key={ feedback.id } >
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
            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FeedbacksList;
